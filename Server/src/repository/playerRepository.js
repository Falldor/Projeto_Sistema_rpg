const {PrismaClient} = require('@prisma/client')
const db = new PrismaClient();


const playerRepository = {
    createPlayer: async(nome) => {
        try{
            await db.Player.create({
                data:{
                    nome: nome,
                    vida: 8,
                    estresse: 8,
                    nivelFisico: 1,
                    nivelMental: 1, 
                    tipo: "player",
                    exp: 5 
                }
            })
        }catch(error){
            throw error
        }
    },

    getAll:async () => {
        try{
            return await db.Player.findMany()
        }catch(error){
            console.log("viado data")
            throw error
        }
        
    },

    getAllType:async (tipo) => {
        try{
            
            elements = await db.Player.findMany({
                where:{tipo:tipo}
            })
            return elements
        }catch(error){
            throw error
        }
        
    },
    getByName:async (nome) => {
        try{
            elemento = await db.Player.findFirst({
                where:{
                    Nome: nome
                }
            })
            return elemento
        }catch(error){
            throw error
        }
    },

    getById:async (id) => {
        try{
            elemento = await db.Player.findFirst({
                where:{
                    id: id
                }
            })
            return elemento
        }catch(error){
            throw error
        }
    },



    editElement: async (id,nome,xp,tipo) => {
        try{
            playerAtt = await db.Player.update({
                where:{id: id},
                data: {
                    Nome: nome,
                    Exp: xp,
                    tipo: tipo
                }
            })
            return playerAtt
        }catch(error){
            console.log("Repository")
            throw error
        }
    },

    updateNivel:async (player) =>{
        try{
            
            playerAtt = await db.Player.update({
                where:{id: player.id},
                data: player
            })
            return playerAtt
        }catch(error){
            throw error
        }
    },

    updateXp:async (player) =>{
        try{
            
            playerAtt = await db.Player.update({
                where:{id: player.id},
                data: player
            })
            return playerAtt
        }catch(error){
            throw error
        }
    },

    delete:async (id) =>{
        try{
            element = await db.Player.delete({
                where: {id: id}
            })
            return element
        }catch(error){
            console.log("Repository")
            throw error
        }
    },
}

module.exports = playerRepository