import {
  withAndroidManifest,
  AndroidConfig,
  createRunOncePlugin,
} from "@expo/config-plugins";
import pkg from "./package.json";
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
  return config;
};

exports.default = createRunOncePlugin(withKey, pkg.name, pkg.version);
