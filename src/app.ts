import { App } from '@slack/bolt';
import { config } from 'dotenv';

config();

const app = new App({
  token: process.env.BOT_TOKEN,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
});

// This will match any message that contains 👋
app.message(':wave:', async ({ message, say }) => {
  await say(`Hello, <@${message.user}>`);
});

(async () => {
  await app.start();
  console.log('⚡️ Bolt app started');
})();
