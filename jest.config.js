module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue', 'node'],
  modulePathIgnorePatterns: ['e2e'],
  transformIgnorePatterns: ['/node_modules/(?!(vue-jest)/)'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
    '^[^.]+.vue$': 'vue-jest',
  },
}
