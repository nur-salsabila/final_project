module.exports = {
  extensions: ['.svelte'],
  preprocess: require('svelte-windicss-preprocess').preprocess({
    compile: false,
    prefix: 'windi-',
    verbosity: 1,
    debug: false,
    devTools: {
      completions: false,
    },
  }),
};
