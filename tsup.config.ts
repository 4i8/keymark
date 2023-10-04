import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/**/*.ts"],
  format: ["esm", "cjs"],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  esbuildOptions: (options) => {
    options.footer = {
      js: "module.exports = module.exports.default;",
    };
  },
  cjsInterop: true,
  dts: true,
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
});
