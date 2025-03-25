# semantic-release-pnpm

A semantic-release plugin for managing releases in PNPM monorepos.

## Installation

To install the plugin, run:

```bash
npm install semantic-release-pnpm --save-dev
```

## Usage

To use the plugin, add it to your `release` configuration in your `package.json`:

```json
{
  "release": {
    "plugins": [
      "semantic-release-pnpm"
    ]
  }
}
```

## Configuration

You can configure the plugin by providing options in the `pluginConfig` object. Here’s an example:

```json
{
  "release": {
    "plugins": [
      [
        "semantic-release-pnpm",
        {
          "someOption": "value"
        }
      ]
    ]
  }
}
```

## Functions

### verifyConditions

This function checks if the necessary configurations for PNPM monorepos are met before proceeding with the release.

### prepare

This function prepares the package for release, handling tasks such as version bumping and changelog generation specific to PNPM monorepos.

### publish

This function manages the publishing of the package to the registry, ensuring that the correct package is published from the monorepo.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.