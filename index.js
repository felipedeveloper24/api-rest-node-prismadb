
const express = require("express");
const rutasCategorias = require("./routes/CategoryRoutes");
const rutasPost = require("./routes/PostRoutes");

const app = express();

app.use(express.json());

app.use("/api/categorias",rutasCategorias)
app.use("/api/posts",rutasPost);

app.listen(3000,()=>{
    console.log("El servidor está en el puerto 3000");
});

