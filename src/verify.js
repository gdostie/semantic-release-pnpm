import { isEmpty, isObject } from "./utils.js";

/**
 * Verifies the conditions for the PNPM monorepo plugin.
 * Checks if the necessary configurations are provided in the plugin config.
 *
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 * @throws Will throw an error if the required configurations are missing
 */
async function verify(pluginConfig, context) {
  const { pkg } = context;

  if (!isObject(pluginConfig)) {
    throw new Error("The plugin configuration must be an object.");
  }

  if (isEmpty(pluginConfig.packages)) {
    throw new Error(
      'The plugin configuration must include a "packages" field specifying the packages in the monorepo.'
    );
  }

  if (!Array.isArray(pluginConfig.packages)) {
    throw new Error('The "packages" field must be an array of package paths.');
  }

  for (const packagePath of pluginConfig.packages) {
    if (typeof packagePath !== "string") {
      throw new Error(
        `Invalid package path: ${packagePath}. Each package path must be a string.`
      );
    }
  }

  // Additional checks can be added here as needed
}

export default verify;
