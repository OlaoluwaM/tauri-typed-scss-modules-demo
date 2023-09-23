// https://github.com/skovy/typed-scss-modules
export default {
  // typed-scss-modules doesn't provide a way to configure exports to be interfaces instead of types
  banner: "/* eslint-disable @typescript-eslint/consistent-type-definitions */",
  exportType: "default",
  exportTypeName: "Classes",
  logLevel: "error",
  aliasPrefixes: {
    "@src": "./src",
  },
  // To allow for utmost flexibility, unless we want to stick to a specific convention https://github.com/skovy/typed-scss-modules#--nameformat--n
  nameFormat: "none",
};
