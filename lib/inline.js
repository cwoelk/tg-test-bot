const debug = require('debug')('tgbot:inline');

const suggestions = ['aaa', 'abc', 'aac', 'bbb', 'ccc'];

let _bot;

function init(bot) {
  debug('Registering inline handler');
  bot.on('inline_query', handleInlineQuery);
  _bot = bot;
  return bot;
}

module.exports = init;

function handleInlineQuery(inlineQuery) {
  debug('Inline query', inlineQuery);
  const query = inlineQuery.query;
  const matches = [];

  suggestions.forEach((el, index) => {
    if (query && el.indexOf(query) > -1) {
      matches.push({
        type: 'article',
        id: `suggestion_${index}`,
        title: el,
        message_text: el,
      });
    }
  });

  if (matches.length) {
    debug('Inline answer', matches);
    _bot.answerInlineQuery(inlineQuery.id, matches);
  }
}
