const express = require('express');
const myConfig = {};
require("dotenv").config({ processEnv: myConfig, quiet: true });

const app = express();
const URL = myConfig.SERVER_URL;
const PORT = myConfig.PORT;

app.get("/", (req, res) => {
    res.json({'message': 'running'});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});