const jsonServer = require('json-server'); // importing json-server library
const server = jsonServer.create();

const fs = require('fs');
const db = JSON.parse(fs.readFileSync(path.join('db.json')));
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port, () => {
	console.log('JSON Server is running');
});
