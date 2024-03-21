const chalk = require("chalk");
const qrcode = require('qrcode-terminal');
const fs = require("fs");
const { Client, LegacySessionAuth, LocalAuth, MessageMedia} = require('whatsapp-web.js');
const client = new Client({
     authStrategy: new LocalAuth({
          clientId: "client-one" //Un identificador(Sugiero que no lo modifiques)
     })
})

const clientPrefix = 'Ikann Bot Client:';

console.log(chalk.black.bgGreen(clientPrefix) + chalk.blackBright(' Menyalakan Bot... [ EDITED BY MASBROASLI ]'));

client.on('authenticated', (session) => {
	console.log(chalk.black.bgGreen(clientPrefix) + chalk.blackBright(' Bot Berhasil Terhubung ke Nomor WA yang MenScan QR Code!'))
});
 

client.initialize();
client.on("qr", qr => {
    qrcode.generate(qr, {small: true} );
})

client.on('ready', () => {
    console.log(chalk.black.bgGreen(clientPrefix) + ' Bot Siap Untuk digunakan!')
});

client.on('message', message => {
// KODE RESPON BOT
	if(message.body === '!ping') {
		message.reply('pong!');
	}
});

