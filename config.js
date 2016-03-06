const CONFIG = {
  /* eslint-disable no-process-env */
  API_TOKEN: process.env.API_TOKEN,
  /* eslint-enable no-process-env */
};

CONFIG.BOT_OPTIONS = {
  polling: {
    timeout: 60,
  },
};

module.exports = CONFIG;
