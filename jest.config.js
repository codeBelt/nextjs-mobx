module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  modulePathIgnorePatterns: ['<rootDir>/src/environments'],
  moduleNameMapper: {
    environment: '<rootDir>/src/environments/test',
  },
};
