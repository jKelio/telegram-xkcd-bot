const TeleBot = require('telebot');
var xkcd = require('xkcd-api');

const bot = new TeleBot({
    token: '329895413:AAEEEnKzuMADR4IUld-w-qNKH5GzgqybF_Y', // Required. Telegram Bot API token.
    polling: { // Optional. Use polling.
        interval: 1000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update polling timeout (0 - short polling).
        limit: 100, // Optional. Limits the number of updates to be retrieved.
        retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
        allowedUpdates: [] // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates regardless of type.
    }/*,
  webhook: { // Optional. Use webhook instead of polling.
    key: '__YOUR_KEY__.pem', // Optional. Private key for server.
    cert: '__YOUR_CERT__.pem', // Optional. Public key.
    url: 'https://....', // HTTPS url to send updates to.
    host: '0.0.0.0', // Webhook server host.
    port: 443 // Server port.
  },
  modules: {
    // Optional. Module configuration.
    //
    // Example:
    //
    // myModuleName: {
    //   data: 'my module data'
    // }
    }
  }*/
});

/*bot.on('text', msg => {
  let fromId = msg.from.id;
  let firstName = msg.from.first_name;
  let reply = msg.message_id;
  return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
});*/

bot.on('/xkcd', msg => {
    xkcd.random(function (error, response) {
        if (error) {
            console.error(error);
        } else {
            console.log(response);
            return bot.sendPhoto(msg.chat.id, response.img);
        }
    });
}),

bot.connect();