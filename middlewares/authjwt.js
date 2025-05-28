const jwt = require("jsonwebtoken");
require("dotenv").config();

const segredo = process.env.SECRET_JWT;

const autenticarJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(403).json({ message: "Token não fornecido." });

    try {
        const dados = jwt.verify(token, segredo);
        req.user = dados;
        next();
    } catch (error) {
        res.status(403).json({ message: "Token inválido." });
    }
};

module.exports = autenticarJWT;