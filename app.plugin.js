const {
  withAndroidManifest,
  AndroidConfig,
  createRunOncePlugin,
  withAppBuildGradle,
} = require("@expo/config-plugins");
const pkg = require("./package.json");
function addDependencies(buildGradle) {
  // 添加需要的仓库地址到repositories部分
  const newDependencies = `
  implementation fileTree(includes: ['*.aar','*.jar'],dir: "${resolve(
    __dirname + "/android/libs"
  ).replace(/\\/g, "\\\\")}")
  `;
  const pattern = /dependencies\s*{\s*/;
  const match = buildGradle.match(pattern);
  if (match) {
    const index = match.index + match[0].length;
    return (
      buildGradle.slice(0, index) + newDependencies + buildGradle.slice(index)
    );
  } else {
    return buildGradle + "\n" + newDependencies;
  }
}
function hasDependencies(buildGradle) {
  if (
    buildGradle.includes(
      resolve(__dirname + "/android/libs").replace(/\\/g, "\\\\")
    )
  ) {
    return true;
  } else {
    return false;
  }
}
const withKey = (config, { token }) => {
  config = withAndroidManifest(config, (config) => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(
      config.modResults
    );
    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      "CDNBYE_TOKEN",
      token || "GPYjSOz4g"
    );
    return config;
  });
  config = withAppBuildGradle(config, async (config) => {
    if (!hasDependencies(config.modResults.contents)) {
      config.modResults.contents = addDependencies(config.modResults.contents);
    }
    return config;
  });
  return config;
};

exports.default = createRunOncePlugin(withKey, pkg.name, pkg.version);
