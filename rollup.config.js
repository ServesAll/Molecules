// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodePolyfills from "rollup-plugin-node-polyfills";
import image from "@rollup/plugin-image";

const dist = "dist";

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: "esm",
    },
    {
      name: "@servesall/molecules",
      file: `${dist}/bundle.umd.js`,
      format: "umd",
      globals: {
        react: "React",
        "react-native": "react-native",
        "react-native-reanimated": "react-native-reanimated",
        "react-native-gesture-handler": "react-native-gesture-handler",
        "react-native-status-bar-height": "react-native-status-bar-height",
        "react-native-maps": "react-native-maps",
        "lottie-react-native": "lottie-react-native",
        "react-native-image-crop-picker": "react-native-image-crop-picker",
        "@servesall/atoms": "@servesall/atoms",
        "react-native-geolocation-service": "react-native-geolocation-service",
        "react-native-dashed-line": "react-native-dashed-line",
        "date-fns": "date-fns",
        "react-native-gradients": "react-native-gradients",
        "react-native-svg": "react-native-svg",
        "react-native-fast-image": "react-native-fast-image",
      },
    },
  ],
  plugins: [
    json(),
    image(),
    resolve({
      extensions: [".js", ".jsx", ".json"],
    }),
    nodePolyfills(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
  external: [
    "react",
    "react-native",
    "react-native-reanimated",
    "react-native-gesture-handler",
    "react-native-status-bar-height",
    "lottie-react-native",
    "react-native-maps",
    "react-native-image-crop-picker",
    "@servesall/atoms",
    "react-native-geolocation-service",
    "react-native-dashed-line",
    "date-fns",
    "react-native-gradients",
    "react-native-svg",
    "react-native-fast-image",
  ],
};
