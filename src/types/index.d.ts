// This file contains TypeScript definitions for the semantic-release-pnpm plugin.

export interface PluginConfig {
  // Configuration options for the plugin
  pkgRoot: string; // The root directory of the package
  registry?: string; // The registry to publish the package to
  // Add other configuration options as needed
}

export interface Context {
  // Context provided by semantic-release
  nextRelease: {
    version: string; // The version to be released
    // Add other properties as needed
  };
  // Add other context properties as needed
}

export interface VerifyConditions {
  (pluginConfig: PluginConfig, context: Context): Promise<void>;
}

export interface Prepare {
  (pluginConfig: PluginConfig, context: Context): Promise<void>;
}

export interface Publish {
  (pluginConfig: PluginConfig, context: Context): Promise<void>;
}