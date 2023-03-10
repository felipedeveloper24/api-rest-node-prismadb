
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const CreateCategory = async(req,res)=>{
    const {nombre_categoria} = req.body;
   
    try{
        const categoria = await prisma.categoria.create({
            data:{
                nombre_categoria: nombre_categoria
            }
        })
        console.log(categoria);
        if(categoria){
            return res.status(200).json({
                Mensaje: "Categoría creada correctamente"
            })
        }else{
            return res.status(400).json({
                message: 'No se pudo registrar la asamblea'
            }) 
        }
    }catch(error){
        return res.status(400).json({
            message: 'No se pudo registrar la asamblea'
        }) 
    }
    
}
const ObtenerCategoria = async (req,res)=>{
    const {id} = req.params;
    const post = await prisma.categoria.findUnique({
        where:{
            id: Number(id)
        }
    })
    if(post!=null){
        return res.status(200).json({
            Mensaje: "Se han encontrado resultados!",
            data: post
        })
    }
    return res.status(200).json({
        Mensaje: "No se han encontrado registros"
    })
}
const ObtenerCategorias = async (req,res)=>{
    const posts = await prisma.categoria.findMany();
    console.log(posts.length);

    if(posts.length > 0){
        return res.status(200).json({
            Mensaje: "Se han encontrado resultados!",
            data: posts
        })
    }
    return res.status(200).json({
        Mensaje: "No se han encontrado registros"
    })
}
const ActualizarCategoria = async(req,res)=>{
    const {id} = req.params;
    const {nombre_categoria} = req.body;
    try{
        const post = await prisma.categoria.update({
            where:{
                id:Number(id)
            },data:{
                nombre_categoria: nombre_categoria
            }
        })
        if(post){
            return res.status(200).json({
                Mensaje:"Categoria Actualizada correctamente",
                data:post
            })
        }
        return res.status(400).json({
            Mensaje:"Error al actualizar la categoria"
        })

    }catch(error){
        return res.status(400).json({
            Mensaje:"Error al actualizar la categoria"
        })
    }

} 

const EliminarCategoria = async(req,res)=>{
    const {id} = req.params;
    const post = await prisma.categoria.delete({
        where:{
            id:Number(id)
        }
    })
    if(post!=null){
        return res.status(200).json({
            Mensaje:"Categoria eliminada correctamente",
            data:post
        })
    }
    return res.status(400).json({
        Mensaje:"Error al eliminar la categoria"
    })
}


module.exports = {CreateCategory,ObtenerCategorias,ActualizarCategoria,EliminarCategoria,ObtenerCategoria}