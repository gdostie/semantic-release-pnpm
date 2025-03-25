import { exec as defaultExec } from "child_process";
import util from "util";

const execPromise = util.promisify(defaultExec);

/**
 * Called by semantic-release during the publish step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 * @param {Function} exec The exec function to use (for dependency injection)
 */
async function publish(pluginConfig, context, exec = execPromise) {
  const { pkg } = context;
  const { name, version } = pkg;

  // Ensure the package is published from the correct directory
  const packageDir = `${context.cwd}/${name}`;

  try {
    // Change to the package directory and run the publish command
    await exec(`pnpm publish --access public`, { cwd: packageDir });
    context.logger.log(`Published ${name}@${version} successfully.`);
  } catch (error) {
    context.logger.error(
      `Failed to publish ${name}@${version}: ${error.message}`
    );
    throw new Error(`Publishing failed: ${error.message}`);
  }
}

export default publish;
