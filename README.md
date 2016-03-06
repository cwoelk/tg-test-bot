Node Telegram Bot Experiment
============================

Very simple test bot using the [Telegram Api][1] through the npm package
[node-telegram-bot-api][2]. It also shows the use of the new [inline feature][3].

## Create a bot ##

Log into Telegram and create your bot talking to the [@BotFather][4] bot.

```
BotFather: They call me the Botfather, I can help you create and set up Telegram
bots. Please read this manual before we begin:
https://core.telegram.org/bots

You can control me by sending these commands:

/newbot - create a new bot
/token - generate authorization token
/revoke - revoke bot access token
/setname - change a bot's name
/setdescription - change bot description
/setabouttext - change bot about info
/setuserpic - change bot profile photo
/setinline - change inline settings
/setinlinefeedback - change inline feedback settings
/setcommands - change bot commands list
/setjoingroups - can your bot be added to groups?
/setprivacy - what messages does your bot see in groups?
/deletebot - delete a bot
/cancel - cancel the current operation

> /newbot
```

It will generate your bot api token for you. Furthermore you should enable the
inline mode with the `/setinline` command.

## Run the code ##

After `npm install` run the following replacing your *`<<<YOUR_API_TOKEN>>>`* with
the one you received from your chat with the [@BotFather][4].
```
API_TOKEN='<<<YOUR_API_TOKEN>>>' DEBUG=tgbot* npm start
```

[1]: https://core.telegram.org/bots/api
[2]: https://github.com/yagop/node-telegram-bot-api
[3]: https://core.telegram.org/bots/inline
[4]: https://telegram.me/botfather
