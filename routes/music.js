const express = require("express");
const autenticarJWT = require("../middlewares/authjwt");

const router = express.Router();

/**
 * @swagger
 * /musicas:
 *   get:
 *     summary: Retorna uma lista de músicas
 *     tags: [Músicas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   titulo:
 *                     type: string
 *                   artista:
 *                     type: string
 *       403:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Token não fornecido ou token inválido
 */

router.get("/", autenticarJWT, (req, res) => {
    res.json([
        { id: 1, titulo: "Música A", artista: "DJ A" },
        { id: 2, titulo: "Música B", artista: "DJ B" },
        { id: 3, titulo: "Música C", artista: "DJ C" },
    ]);
});

module.exports = router;