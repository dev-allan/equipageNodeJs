const { Console } = require("console");
const http = require("http");
const app = require("./app")

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

server.listen(process.env.PORT || 3000);

console.log("Serveur fonctionnant sur le port 3000");
