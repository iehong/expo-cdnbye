const {
  withAndroidManifest,
  AndroidConfig,
  createRunOncePlugin,
} = require("@expo/config-plugins");
const withMyApiKey = (config, { token }) => {
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

  return config;
};
const pkg = require("./package.json");
module.exports = createRunOncePlugin(withMyApiKey, pkg.name, pkg.version);
