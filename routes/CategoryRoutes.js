
const express = require("express");
const CategoriaController = require("../controllers/categoryController");

const routerCategorias =  express.Router();

//rutas
routerCategorias.get("/get",CategoriaController.ObtenerCategorias);
routerCategorias.post("/create",CategoriaController.CreateCategory);
routerCategorias.put("/update/:id",CategoriaController.ActualizarCategoria);
routerCategorias.delete("/delete/:id",CategoriaController.EliminarCategoria);
routerCategorias.get("/get/:id",CategoriaController.ObtenerCategoria);

module.exports = routerCategorias;