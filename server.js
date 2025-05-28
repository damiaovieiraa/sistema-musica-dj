const express = require("express");
const cors = require("cors");
const path = require("path");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./docs/swagger");
const routerAuth = require("./routes/auth");
const routerMusic = require("./routes/music");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", routerAuth);
app.use("/musicas", routerMusic);

app.use("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.warn(`Servidor rodando na porta ${PORT}`);
});