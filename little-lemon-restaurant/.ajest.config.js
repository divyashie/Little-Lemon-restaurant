module.exports = {
    testEnvironment: "jsdom", //Simulates a browser-like environment for tests
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], //Adds custom matchers
};
