import { Injectable } from '@nestjs/common';

@Injectable()
export class BotService {
  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    const TelegramBot = require('node-telegram-bot-api');

    const token = process.env.TELEGRAM_BOT_TOKEN;

    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', (msg) => {
      bot.sendMessage(msg.from.id, msg.text.toString());
    });
  }
}
