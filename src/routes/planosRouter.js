const express = require("express");

const router = express.Router();

const PlanosController = require("../controllers/PlanosControllers");

router.get("/planos", PlanosController.getAllPlanos); // 1º a rota e chamada pelo front chamando getAllPlanos
router.post("/planos", PlanosController.createPlane);
router.delete("/planos/:nome", PlanosController.deletePlanoByName);
router.put("/planos/:codigo", PlanosController.updatePlano);

module.exports = router;
