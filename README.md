# Flitter
## _Express your thoughts online_


Flitter is a Twitter clone created for the Web Development Bootcamp final project.

## Features

- Register your name, last name, username, email and password.
- Login with your username and password.
- Create posts and share them to your followers and public timeline.
- Give likes to users' posts.
- Follow users.
- Access to your own profile and posts.
- Access to users' profiles and posts.
- Search users and posts by keywords. 
- Delete your account. All your personal information will be deleted from the database, as well as your posts.

## Yet to implement


- Option to message users.
- Chat.
- Notifications view page.
- Followers and following list view page.
- Public timeline and private timeline.
- Response to posts.
- Retweet posts.


## Tech

Flitter uses a number of open source projects to work properly:

- [JavaScript] 
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [Font Awesome] - icon library and toolkit
- [Pug] - template engine used to code HTML
- [jQuery] - JavaScript library
- [MongoDB] - database

And of course Flitter itself is open source with a [public repository][dill]
 on GitHub.

## Installation
First clone the repo:

```
git clone https://github.com/meweli/flitter.git
```

Flitter requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd flitter
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```
Finally, to launch the app:

```
npm start
```
and paste this address in your preferred browser:
```
http://localhost:3003/
```

## License

MIT

**Have fun!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [JavaScript]: <https://www.javascript.com/>
   [Font Awesome]: <https://fontawesome.com/>
   [Pug]: <https://pugjs.org/api/getting-started.html>
   [MongoDB]: <https://www.mongodb.com/>
   [dill]: <https://github.com/meweli/flitter>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
