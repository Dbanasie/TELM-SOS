const Router = require("koa-router");
const router = new Router();
const db = require("../utils/db");

//
//const AcceptedParams = ['lat', 'long', 'id'];
const EmergencyCalls = db.prepare('SELECT * FROM Calls order by date desc');


router.get("/calls", ctx => {


    ctx.body = EmergencyCalls.all();
    console.log("Wywolalo sie wpakowanie zgloszen");
});

router.post("/emergency-call", ctx => {

    const params = ctx.request.body;
    const Call = {};
    Call.lat = params.lat;
    Call.long = params.long;
    Call.id = params.id;
    Call.date = new Date();
    EmergencyCalls.push(Call);

    ctx.body = { status: true };
});

module.exports = router;