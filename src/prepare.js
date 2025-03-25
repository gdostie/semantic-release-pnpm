import { exec as defaultExec } from "child_process";
import util from "util";

const execPromise = util.promisify(defaultExec);

/**
 * Called by semantic-release during the prepare step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 * @param {Function} exec The exec function to use (for dependency injection)
 */
async function prepare(pluginConfig, context, exec = execPromise) {
  // Bump the version in package.json
  const newVersion = context.nextRelease.version;
  await exec(`pnpm version ${newVersion}`, { cwd: context.cwd });

  // Generate changelog if specified in the plugin config
  if (pluginConfig.generateChangelog) {
    await exec(`pnpm changelog`, { cwd: context.cwd });
  }

  // Additional preparation steps can be added here
}

export default prepare;
