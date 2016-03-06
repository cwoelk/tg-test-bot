module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'comma-dangle': [1, 'always-multiline'],
    'dot-location': [2, 'property'],
    'no-inner-declarations': [2, 'both'],
    'no-use-before-define': [2, 'nofunc'],
    'no-process-env': 2,
    'no-console': 2,
    'no-param-reassign': [2, { props: false }],
  },
};
