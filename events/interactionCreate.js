const { Events } = require('discord.js');
//Do not forget to create interactionCreate.js as it is vital to allow slashcommands to work!
/*This is an event listener that will check the text input from the user and see if it matches
any slashcommands in the commands folder. If there isn't a matching commanding, the try catch
block will catch an error
*/
module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};
