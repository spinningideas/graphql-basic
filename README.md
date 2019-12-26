# GraphQL Reference Implementation

The code in this repo demonstrates use of [graphQL](https://graphql.org/) via [Apollo](https://www.apollographql.com/) [libraries](https://github.com/apollographql). 

This reference implementation uses [express](https://expressjs.com/) and a repository to get data from static json files containing two geography data sets (continents and countries).

## Get Started

You will need to change directory into the "server" folder to install and run the application

To get started perform the following steps:

### 1) Install npm packages

You will need to change directory into the server folder to install and run the application

Install the required packages after changing directory into the "server" folder

```npm install```


### 2) Run the application

The application is configured to use nodemon to monitor for file changes and you can run command to start the application using it. You will see console information with url and port.

```npm run dev```

### 3) Exercise the application via GraphQL Playground

Open a browser and navigate to http://localhost:7000/ and this will display a web based client for querying the server

### 4) Exercise the application via postman

Download and install https://www.getpostman.com and then import the collection in the "postman" folder and run the requests to see api data and responses - see more info: https://learning.getpostman.com/docs/postman/sending-api-requests/graphql/