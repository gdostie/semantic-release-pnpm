import test from "ava";
import verify from "./verify.js";

test("throws an error if pluginConfig is not an object", async (t) => {
  const pluginConfig = null;
  const context = {};

  const error = await t.throwsAsync(async () => {
    await verify(pluginConfig, context);
  });

  t.is(error.message, "The plugin configuration must be an object.");
});

test('throws an error if "packages" field is missing', async (t) => {
  const pluginConfig = {};
  const context = {};

  const error = await t.throwsAsync(async () => {
    await verify(pluginConfig, context);
  });

  t.is(
    error.message,
    'The plugin configuration must include a "packages" field specifying the packages in the monorepo.'
  );
});

test('throws an error if "packages" field is not an array', async (t) => {
  const pluginConfig = { packages: "not-an-array" };
  const context = {};

  const error = await t.throwsAsync(async () => {
    await verify(pluginConfig, context);
  });

  t.is(
    error.message,
    'The "packages" field must be an array of package paths.'
  );
});

test("throws an error if any package path is not a string", async (t) => {
  const pluginConfig = { packages: [123] };
  const context = {};

  const error = await t.throwsAsync(async () => {
    await verify(pluginConfig, context);
  });

  t.is(
    error.message,
    "Invalid package path: 123. Each package path must be a string."
  );
});

test("passes with valid pluginConfig", async (t) => {
  const pluginConfig = {
    packages: ["packages/package-a", "packages/package-b"],
  };
  const context = {};

  await t.notThrowsAsync(async () => {
    await verify(pluginConfig, context);
  });
});
