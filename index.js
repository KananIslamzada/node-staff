let express = require("express");
let app = express();


const staf = [
    { id: 1, name: "kanan", age: 20 },
    { id: 2, name: "kananos", age: 25 },
];

app.get("/", (_, res) => {
    res.json(staf);
});


app.listen(3000, () => {
    console.log("listening on 3000");
});