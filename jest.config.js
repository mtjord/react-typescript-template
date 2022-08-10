module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./jest-setup.ts"],
    // See https://jestjs.io/docs/webpack#handling-static-assets
    // moduleNameMapper: { "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js" },
    restoreMocks: true,
    clearMocks: true,
    resetMocks: true,
};
