module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          [
            'module-resolver', {
              root: ['./src'],
              extensions: ['.js', '.ios.js', '.android.js'],
              alias: {
                api: './api',
                actions: './actions',
                components: './components',
                constants: './constants',
                containers: './containers',
                reducers: './reducers',
                sagas: './sagas',
                lib: './lib',
                screens: './screens',
              },
            },
          ],
        ],
      },
    },
  };
};
