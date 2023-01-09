# React (frontend) and NodeJS (backend) Example using Websockets to create a simple help & get help Application for a classroom

This project is just a project example to learn how to use Websockets with React (frontend) and NodeJS (backend).

In the following screenshot you can see 4 instances of the frontend before log in.

![Before log in](/screenshots/screenshot-1.png)

In the following screenshot you can see that user tiburcio has 3 requests, and juan 2 requests.

![Before log in](/screenshots/screenshot-2.png)

In the following screenshot you can see that user tiburcio clicked on `help next` because finished helping pepe and now tiburcio has 2 requests left.

![Before log in](/screenshots/screenshot-3.png)

## Getting Started

Read the links in the acknowlegements section bellow to get an idea about WebSockets.

Download links:

From Github: https://github.com/tcrurav/WebsocketsReactNodeJS.git

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/WebsocketsReactNodeJS.git
```

This project contains 2 different parts:
* Frontend
* Backend

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project customize your environment files.

```
cd WebsocketsReactNodeJS/backend
copy .env.example .env

cd WebsocketsReactNodeJS/frontend
copy .env.example .env
```

Now install all dependencies.

```
cd WebsocketsReactNodeJS/backend
npm install

cd WebsocketsReactNodeJS/frontend
npm install
```

And finally run the project.

```
cd WebsocketsReactNodeJS/backend
npm start

cd WebsocketsReactNodeJS/frontend
npm start
```

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [WS](https://www.npmjs.com/package/ws) - ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.

## Acknowledgments

* https://dev.to/koladev/websocket-with-react-nodejs-and-docker-building-a-chat-application-3447. WebSocket with React, Nodejs, and Docker: Building a Chat Application. Very interesting to start with Websockets in a practical way.
* https://blog.logrocket.com/websocket-tutorial-real-time-node-react/. WebSockets tutorial: How to go real-time with Node and React. Very interesting to understand what Websockets are, and the differences with other options.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
