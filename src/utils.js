/**
 * Checks if a value is an object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Checks if an object or array is empty.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export function isEmpty(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (isObject(value)) {
    return Object.keys(value).length === 0;
  }
  return !value;
}
