const Router = require("koa-router");
const router = new Router();

const EmergencyCalls = []; //
//const AcceptedParams = ['lat', 'long', 'id'];

router.get("/calls", ctx => {

    ctx.body = EmergencyCalls;
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