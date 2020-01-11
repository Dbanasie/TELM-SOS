const Koa = require("koa");
const cors = require("koa-cors");
const bodyParser = require('koa-bodyparser');

const CallRouter = require("./routes/calls/index");

const app = new Koa();

app.use(cors({ origin: true }));
app.use(bodyParser());
app.use(CallRouter.routes());
app.use(CallRouter.allowedMethods());

app.listen(8888);

const db = require('better-sqlite3')('baza.db');

const row = db.prepare('SELECT * FROM users').all();
console.log(row);