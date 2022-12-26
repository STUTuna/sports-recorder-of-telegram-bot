import { Injectable } from '@nestjs/common';

@Injectable()
export class BotService {
  onModuleInit() {
    this.botMessage();
  }
  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    const TelegramBot = require('node-telegram-bot-api');

    const token = process.env.TELEGRAM_BOT_TOKEN;

    const bot = new TelegramBot(token, { polling: true });

    // Matches /alive
    bot.onText(/\/alive/, function onDoneText(msg) {
      bot.sendMessage(msg.from.id, '還活著 一切安好');
    });

    // Matches /register 將使用者註冊到google sheet
    bot.onText(/\/register/, function onDoneText(msg) {
      bot.sendMessage(msg.from.id, 'in register');
    });

    // Matches /done 紀錄該使用者完成運動到google sheet
    bot.onText(/\/done/, function onDoneText(msg) {
      bot.sendMessage(msg.from.id, 'in done');
    });

    bot.on('inline_query', (msg) => {
      bot.sendMessage(msg.from.id, 'in inline_query');
    });
  }
}
