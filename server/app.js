const express = require('express');
const {	ApolloServer } = require('apollo-server-express');

const schema = require('./schema.js');
const resolvers = require('./resolvers.js');

const PORT = process.env.PORT || 7000;
const HOST = process.env.HOST || 'localhost';

// setup server and routes
const apolloServer = new ApolloServer({
	typeDefs: schema,
	resolvers,
	introspection: true,
	playground: true
});

const expressApp = express();

apolloServer.applyMiddleware({
	app: expressApp,
	path: '/',
	cors: true,
	disableHealthCheck: true
});


expressApp.listen(PORT, () => {
	console.log(`Server running at ${HOST}:${PORT} `);
});
