/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

/**
 * assert* methods meant to be used in production too
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 */

export function assertDefined<T>(value: T, format: string, ...args: any): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throwAssertionViolation(format, 2, ...args);
  }
}

export function assertNeverReached(format: string, ...args: any): never {
  throwAssertionViolation(format, 2, ...args);
}

export function assertNotImplemented(): never {
  throwAssertionViolation("Not implemented", 2);
}

function throwAssertionViolation(format: string, framesToPop: number, ...args: any): never {
  if (format === undefined) {
    throw new Error("invariant requires an error message argument");
  }
  let error;
  // noinspection PointlessBooleanExpressionJS
  if (format === undefined) {
    error = new Error(
      "Minified exception occurred; use the non-minified dev environment " +
        "for the full error message and additional helpful warnings."
    );
  } else {
    let argIndex = 0;
    error = new Error(
      format.replace(/%s/g, function () {
        return args[argIndex++];
      })
    );
    error.name = "Invariant Violation";
  }

  (error as any).framesToPop = framesToPop; // we don't care about invariant's own frame
  throw error;
}

export function assertCondition(condition: boolean, format: string, ...args: any): void {
  if (!condition) {
    throwAssertionViolation(format, 2, ...args);
  }
}
