import { describe, expect, it } from "vitest";
import { isStaleBundleError } from "@/lib/stale-bundle-recovery";

describe("isStaleBundleError", () => {
  it("detects Safari's module import failure", () => {
    expect(isStaleBundleError(new TypeError("Importing a module script failed."))).toBe(true);
  });
  it("detects Chrome's dynamic import failure", () => {
    expect(
      isStaleBundleError(new TypeError("Failed to fetch dynamically imported module: /x.js")),
    ).toBe(true);
  });
  it("ignores ordinary app errors", () => {
    expect(isStaleBundleError(new Error("Cannot read properties of undefined"))).toBe(false);
  });
});

describe("isStaleBundleError chunk names", () => {
  it("detects webpack-style chunk failures", () => {
    expect(isStaleBundleError("Loading chunk destinos-abc failed.")).toBe(true);
  });
});
