module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rotDir>/src/**/*. ts"],
  coverageDirectory: "coverage",
  testEnvironment: "node",
  transform: {
    ".*\\.ts$": "ts-jest",
  },
};
