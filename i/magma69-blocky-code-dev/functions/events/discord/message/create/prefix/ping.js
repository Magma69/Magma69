// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

//I am adding you to the new profect now!

await lib.discord.channels['@0.2.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Hi`,
      "description": `Hi`,
      "color": 0x00FFFF,
      "footer": {
        "text": `Hello!`
      }
    }
  ]
});