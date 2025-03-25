import test from "ava";
import sinon from "sinon";
import { prepare } from "./prepare.js";

test.beforeEach((t) => {
  t.context.execStub = sinon.stub().resolves();
});

test.afterEach((t) => {
  sinon.restore();
});

test("bumps the version in package.json", async (t) => {
  const pluginConfig = {};
  const context = {
    cwd: process.cwd(),
    nextRelease: { version: "1.0.0" },
    pkg: { name: "test-package", version: "0.0.0" },
  };

  await prepare(pluginConfig, context, t.context.execStub);

  t.true(
    t.context.execStub.calledWith(`pnpm version 1.0.0`, {
      cwd: context.cwd,
    })
  );
});

test("generates changelog if specified in the plugin config", async (t) => {
  const pluginConfig = { generateChangelog: true };
  const context = {
    cwd: process.cwd(),
    nextRelease: { version: "1.0.0" },
    pkg: { name: "test-package", version: "0.0.0" },
  };

  await prepare(pluginConfig, context, t.context.execStub);

  t.true(t.context.execStub.calledWith(`pnpm changelog`, { cwd: context.cwd }));
});

test("does not generate changelog if not specified in the plugin config", async (t) => {
  const pluginConfig = { generateChangelog: false };
  const context = {
    cwd: process.cwd(),
    nextRelease: { version: "1.0.0" },
    pkg: { name: "test-package", version: "0.0.0" },
  };

  await prepare(pluginConfig, context, t.context.execStub);

  t.false(
    t.context.execStub.calledWith(`pnpm changelog`, { cwd: context.cwd })
  );
});
