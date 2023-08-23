const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const a=req.body.a;
    const b=req.body.b;
    if(typeof a !== 'number' || typeof b !== 'number')
        return res.status(400).send("Add get: Not a number");
    const result=a+b;
    res.status(200).json({ "result": result });
});


baseRouter.post('/subtract', (req, res) => {
    const a=req.body.a;
    const b=req.body.b;
    if(typeof a !== 'number' || typeof b !== 'number')
        return res.status(400).send("Sub get: Not a number");
    const result=a-b;
    res.status(200).json({ "result": result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});