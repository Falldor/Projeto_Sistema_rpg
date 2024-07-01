const playerDB = require('../repository/playerRepository')

const playerService = {
    createPlayer: async (nome) => {
        try{
            playerDB.createPlayer(nome.toLowerCase())

        }catch(error){
            throw error
        }
    },

    getAll: async () =>{
        try{
            return await playerDB.getAll()
        }catch(error){
            throw error
        }
    },

    findByName: async (nome) => {
        try{
            elemento = await playerDB.getByName(nome)
            if(elemento != null){
                return elemento
            }else{
                throw "Nenhum elemento com esse nome"   
            }
        }catch(error){
            throw error
        }
    },

    findById: async (id) => {
        try{
            elemento = await playerDB.getById(id)
            if(elemento != null){
                return elemento
            }else{
                throw "Nenhum elemento com esse ID"   
            }
        }catch(error){
            throw error
        }
    },

    getAllType:async (tipo) => {
        try{
            return await playerDB.getAllType(tipo)     
        }catch(error){
            throw error
        }
    },


    editElement: async(id, nome,xp,tipo) =>{
        try{
            element = await playerDB.editElement(id, nome, xp, tipo)
            return element
        }catch(error){
            console.log("Service")
            throw error
        }
    },

    addNivel:async (id, tipo) =>{
        try{
            player = await playerDB.getById(id)
            if(tipo == "mental"){
                player.nivelMental += 1
                player.estresse += 6
            }else{
                player.nivelFisico += 1
                player.vida += 6
            }
            player = await playerDB.updateNivel(player)
            return player
        }catch(error){
            throw error
        }
    },

    addXp:async (id,xp) => {
        try{
            player = await playerDB.getById(id)
            player.Exp += xp
            player = await playerDB.updateXp(player)
            return player
        }catch(error){
            throw error
        }
    },

    subXp:async (id,xp) => {
        try{
            player = await playerDB.getById(id)
            player.Exp -= xp
            player = await playerDB.updateXp(player)
            return player
        }catch(error){
            throw error
        }
    },

    delete:async (id) => {
        try{
            element = await playerDB.delete(id)
            return element
        }catch(error){
            console.log("Service")
            throw error
        }
    },
}

module.exports = playerService