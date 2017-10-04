The Chatty App
=====================

A minimal and light dev environment for ReactJS.

### Usage

Clone the boilerplate and create your own git repo.

```
git clone git@github.com:mrdavidgrant/chatty.git
cd chatty
```

Install the dependencies and start the server.

```
npm install
npm start
open http://localhost:3000
```

Move to the ./server folder

```
node server.js
```

### Dependencies

* React
* React-Dom
* express
* randomcolor
* uuid
* ws

### Extras/Stretch Goals

* As an added challenge, I parsed out image URL's ending in .jpg, .gif, or .png from any messages, and displayed the image in chat.  The original URL was removed from the message.

* Message storage was moved from the client to the server.  Any client, upon first login, will be sent the last 10 messages on the server.
