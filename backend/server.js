// u20780193 - Deliverable 1

import express from "express";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "frontend/public")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/public", "index.html"));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
