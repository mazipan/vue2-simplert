module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/Simplert.vue',
    '!**/node_modules/**'
  ],
  coverageDirectory: 'test/coverage',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
}
