const Router = require("koa-router");
const router = new Router();
const db = require("../utils/db");

//
//const AcceptedParams = ['lat', 'long', 'id'];
const Users = db.prepare('SELECT * FROM users order by surname asc');


router.get("/users", ctx => {


    ctx.body = Users.all();
    console.log("Wywolalo sie wpakowanie uzytkownikow");

});

router.post("/newUser", ctx => {

    const params = ctx.request.body;
    const User = {};
    User.phone = params.phone;
    User.name = params.name;
    User.surname = params.surname;
    User.pesel = params.pesel;
    User.date_of_birth = params.date_of_birth;
    Users.push(User);

    ctx.body = { status: true };
});

module.exports = router;