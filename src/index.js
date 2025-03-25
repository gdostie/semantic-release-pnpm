// This file exports the main function of the semantic-release plugin.
// It includes the verifyConditions function that checks the plugin configuration and context.

import verify from "./verify.js";
import prepare from "./prepare.js";
import publish from "./publish.js";

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyConditions(pluginConfig, context) {
  await verify(pluginConfig, context);
}

/**
 * Called by semantic-release during the preparation step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function preparePackage(pluginConfig, context) {
  await prepare(pluginConfig, context);
}

/**
 * Called by semantic-release during the publishing step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function publishPackage(pluginConfig, context) {
  await publish(pluginConfig, context);
}
