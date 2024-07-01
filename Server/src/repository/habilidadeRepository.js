const {PrismaClient} = require('@prisma/client')
const db = new PrismaClient();

const habilidadeRepository = {
    createHabilidade: async(idplayer, titulo,tipo) => {
        try{
            await db.Habilidade.create({
                data:{
                    idPlayer: idplayer,
                    nome: titulo,
                    tipo: tipo,
                    nivel: 2 
                }
            }) 
        }catch(error){
            throw error; 
        }    
    },
    getAll:async () =>{
        try{
            habilidades = await db.Habilidade.findMany() 
            return habilidades
        }catch(error){
            throw error; 
        }
    },

    getAllType:async (idJogador, tipo) =>{
        try{
            habilidades = await db.Habilidade.findMany({
                where:{
                    idPlayer: idJogador,
                    tipo:tipo
                }
            }) 
            
            return habilidades
        }catch(error){
            throw error; 
        }
    },

}
module.exports = habilidadeRepository