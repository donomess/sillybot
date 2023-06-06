const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs')
let result = []

fs.readFile('../bibble.txt', (err, inputD) => {
    if(err) throw err;
        console.log(inputD.toString());
    result = inputD.split('.');
    console.log(result)
})

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verse')
        .setDescription('Reads a random sentence from the amazing work of the Old Testament of the chroniles of the Mathesian Empire'),
    async execute(interaction) {
        min = Math.ceil(0)
        max = Math.floor(result.length)
        await interaction.reply(result[Math.floor(Math.random() * (max - min) + min)]);
    },
};