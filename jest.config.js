const IS_EE = require('./config/is_ee_env');

const moduleNameMapper = {
  '^react-native$': 'react-native-web',
  '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  '^ee_else_ce(/.*)$': ['<rootDir>/src$1', '<rootDir>/src/plugins/ContentManager$1'],
};

if (IS_EE) {
  const rootDirEE = ['<rootDir>/src/ee$1', '<rootDir>/src/plugins/ContentManager$1'];

  Object.assign(moduleNameMapper, {
    '^ee_else_ce(/.*)$': rootDirEE,
  });
}

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  modulePaths: ['node_modules', '<rootDir>/src', '<rootDir>/src/plugins/ContentManager'],
  moduleNameMapper,

  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
