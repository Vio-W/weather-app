import { Bot, webhookCallback, InlineKeyboard } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN);
const MINI_APP_URL = "https://weather-app-violet3799.vercel.app/"; // your frontend URL

bot.command("start", async (ctx) => {
  const keyboard = new InlineKeyboard().webApp("🚌 Open BookMeBus", MINI_APP_URL);

  await ctx.reply(
    "🚌 Welcome to BookMeBus!\n\n" +
    "I'm your AI booking assistant. I can help you:\n\n" +
    "✅ Search for bus routes\n" +
    "✅ Book tickets\n" +
    "✅ Check your bookings\n" +
    "✅ Get e-tickets\n\n" +
    "Just tell me where you'd like to go! For example:\n" +
    "\"Phnom Penh to Siem Reap tomorrow\"\n\n" +
    "Or use these commands:\n" +
    "/help - Show all commands\n" +
    "/mybookings - View your bookings\n" +
    "/search - Quick search from recent routes\n" +
    "/support - Contact support",
    { reply_markup: keyboard }
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply("Here's what I can do... (fill in your help text)");
});

bot.command("mybookings", async (ctx) => {
  await ctx.reply("You have no bookings yet. (placeholder — no backend yet)");
});

bot.command("search", async (ctx) => {
  await ctx.reply("Quick search coming soon.");
});

bot.command("support", async (ctx) => {
  await ctx.reply("Need help? Contact us at support@example.com");
});

export default webhookCallback(bot, "std/http");