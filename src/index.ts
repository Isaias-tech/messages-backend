import express from "express";
import morgan from "morgan";

const app = express();

// config
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);
const port = app.get("port");

// middkewares
app.use(morgan());
app.use(express.json());

// routes
app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});