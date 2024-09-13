// u20780193 - Deliverable 1

import express from "express";

const app = express();

app.use(express.static("frontend/public"));


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost/${process.env.PORT}`);
});