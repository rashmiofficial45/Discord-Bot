import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
//   console.log(message);
  message.reply({
    content: "Hi from the bot.",
  });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);

  if (interaction.commandName === 'ping') {
    interaction.reply('Pong!');
  }
});

client.login(process.env.TOKEN);
