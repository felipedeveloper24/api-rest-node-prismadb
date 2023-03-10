
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const createPost = async(req,res)=>{
    try{
        const {title,content,idCategoria} = req.body;
        
        const existCategoria = await prisma.categoria.findUnique({
            where:{
                id: Number(idCategoria)
            }
        })
        if(existCategoria != null){
            const Post = await prisma.post.create({
                data:{
                    title:title,
                    content:content,
                    idCategoria:idCategoria
                }
            })
            if(Post){
                return res.status(200).json({
                    mensaje:"Post registrado correctamente",
                    data: Post
                })
            }

        }else{
            res.status(500).json({
                mensaje: "No existe esa categoria"
            })
        }
        

    }catch(error){
        res.status(500).json({
            mensaje: "Error al crear un post"
        })
    }
}

const getPosts = async (req,res) =>{
    try {
      const posts = await prisma.post.findMany();
      if(posts.length>0){
         return res.status(200).json({
            mensaje:"Se han encontrado resultados",
            data:posts
         })
      }  
      return res.status(200).json({
        mensaje:"no se han encontrado resultados",
     })

    }catch (error) {
        return res.status(500).json({
            mensaje: "Error al realizar la petición"
        })
    }
}



module.exports = {createPost,getPosts};

exports.createPost