const { withAndroidManifest, AndroidConfig } = require("@expo/config-plugins");
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
module.exports = withMyApiKey;
