// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `You have been given the Member Role!`,
  message_reference: {
    'message_id': `${context.params.event.id}`
  }
});
console.log('Message sent')
await lib.discord.guilds['@0.2.3'].members.roles.update({
  role_id: `952009645743046666`,
  user_id: `${context.params.event.author.id}`,
  guild_id: `${context.params.event.guild_id}`
});
console.log('Role given')
