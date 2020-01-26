const Router = require("koa-router");
const router = new Router();
const db = require("../utils/db");

//
//const AcceptedParams = ['lat', 'long', 'id'];
const getUsers = db.prepare('SELECT * FROM users order by surname asc');
const insertUser = db.prepare('INSERT INTO Users (phone, name, surname, pesel) VALUES (@phone, @name, @surname, @pesel)')

router.get("/users", ctx => {
    ctx.body = getUsers.all();
    console.log("Wywolalo sie wpakowanie uzytkownikow");
});

router.post("/addUser", ctx => {

    const params = ctx.request.body;
    const user = {
        phone: params.phone,
        name: params.name,
        surname: params.surname,
        pesel: params.PESEL,
    };
    try {
        insertUser.run(user);
        ctx.body = { status: 'CREATED' };
    } catch (e) {
        ctx.body = { status: 'FAILED' };
    }
});

module.exports = router;