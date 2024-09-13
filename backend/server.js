// u20780193 - Deliverable 1

import express from "express";

const app = express();

app.use(express.static("frontend/public"));


app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});