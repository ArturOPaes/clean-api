module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "<rotDir>/src/**/*. ts",
    "!<rootDir>/src/**/*-protocols.ts",
    "!**/protocols/**",
  ],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".*\\.ts$": "ts-jest",
  },
};
