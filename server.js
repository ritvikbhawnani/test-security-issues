const express = require("express");

class Test {}

async function init() {
	const app = express();

	const data = {
		name: "Clifford",
		species: "dog",
		color: "red",
	};

	app.get("/get", async (req, res) => {
		res.json({
			status: "ok",
			data: `
         <h1>${data[req.query.input1]}</h1>
         <h2>${data[req.query.input2]}</h2>
         `,
		});
	});

	const PORT = process.env.PORT || 3000;
	app.use(express.static("./static"));
	app.listen(PORT);

	console.log(`running on http://localhost:${PORT}`);
}

init();
