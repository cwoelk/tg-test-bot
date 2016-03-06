const TelegramBot = require('node-telegram-bot-api');
const debug = require('debug')('tgbot');

const lib = require('./lib');

const { API_TOKEN, BOT_OPTIONS } = require('./config');

const server = {};
// let botId;
let bot;

server.start = () => {
  bot = new TelegramBot(API_TOKEN, BOT_OPTIONS);
  registerListener();
};

function registerListener() {
  debug('Registering handler');

  bot.getMe().then((res) => {
    debug('started. That\'s me', res);
    // botId = res.id;
  });

  bot.on('message', rawMessageHanlder);

  lib.inline(bot);

  // Matches /echo [whatever] example
  bot.onText(/\/echo (.+)/, (msg, match) => {
    debug('Received msg', msg);
    const fromId = msg.from.id;
    const resp = match[1];
    bot.sendMessage(fromId, resp);
  });
}

function rawMessageHanlder(message) {
  debug('Received message', message);
}

module.exports = server;
