module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@config': './src/config',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@assets': './src/assets',
          },
        },
      ],
    ],
  };
};
