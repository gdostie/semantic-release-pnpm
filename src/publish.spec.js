import test from "ava";
import sinon from "sinon";
import { publish } from "./publish.js";

test.beforeEach((t) => {
  t.context.execStub = sinon.stub().resolves();
  t.context.logger = {
    log: sinon.stub(),
    error: sinon.stub(),
  };
});

test.afterEach((t) => {
  sinon.restore();
});

test("publishes the package successfully", async (t) => {
  const pluginConfig = {};
  const context = {
    cwd: process.cwd(),
    pkg: { name: "test-package", version: "1.0.0" },
    logger: t.context.logger,
  };

  await publish(pluginConfig, context, t.context.execStub);

  t.true(
    t.context.execStub.calledWith(`pnpm publish --access public`, {
      cwd: `${context.cwd}/test-package`,
    })
  );
  t.true(
    t.context.logger.log.calledWith(
      "Published test-package@1.0.0 successfully."
    )
  );
});

test("logs an error if publishing fails", async (t) => {
  const pluginConfig = {};
  const context = {
    cwd: process.cwd(),
    pkg: { name: "test-package", version: "1.0.0" },
    logger: t.context.logger,
  };

  const error = new Error("Publishing failed");
  t.context.execStub.rejects(error);

  await t.throwsAsync(
    async () => {
      await publish(pluginConfig, context, t.context.execStub);
    },
    { message: "Publishing failed: Publishing failed" }
  );

  t.true(
    t.context.logger.error.calledWith(
      "Failed to publish test-package@1.0.0: Publishing failed"
    )
  );
});
