import express from "express";
import bodyParser from "body-parser";

const app = experss();
const port = 3000;

app.listen(port, (req, res) => { console.log(`Server running on port ${port}.`) });