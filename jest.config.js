module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  testMatch: ["<rootDir>/src/**/*.test.js"],
  collectCoverageFrom: ["src/**/*.js", "!src/config/**/*.js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      statements: 96.0,
      branches: 96.0,
      functions: 96.0,
      lines: 96.0
    }
  }
};
