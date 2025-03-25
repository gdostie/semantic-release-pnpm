import test from "ava";
import { isObject, isEmpty } from "./utils.js";

test("isObject returns true for objects", (t) => {
  t.true(isObject({}));
  t.true(isObject({ key: "value" }));
});

test("isObject returns false for non-objects", (t) => {
  t.false(isObject(null));
  t.false(isObject(undefined));
  t.false(isObject([]));
  t.false(isObject("string"));
  t.false(isObject(123));
  t.false(isObject(true));
});

test("isEmpty returns true for empty objects", (t) => {
  t.true(isEmpty({}));
});

test("isEmpty returns false for non-empty objects", (t) => {
  t.false(isEmpty({ key: "value" }));
});

test("isEmpty returns true for empty arrays", (t) => {
  t.true(isEmpty([]));
});

test("isEmpty returns false for non-empty arrays", (t) => {
  t.false(isEmpty([1, 2, 3]));
});

test("isEmpty returns true for falsy values", (t) => {
  t.true(isEmpty(null));
  t.true(isEmpty(undefined));
  t.true(isEmpty(""));
  t.true(isEmpty(0));
  t.true(isEmpty(false));
});

test("isEmpty returns false for truthy values", (t) => {
  t.false(isEmpty("string"));
  t.false(isEmpty(123));
  t.false(isEmpty(true));
});
