const habilidadeDB = require('../repository/habilidadeRepository')

const habilidadeService = {
    createHabilidade: async (id,nome,tipo) => {
        try{
            await habilidadeDB.createHabilidade(id,nome, tipo)
        }catch(error){
            console.log(error)
            throw error
        }
        
    },

    getAll: async () => {
        try{
            habilidades = await habilidadeDB.getAll()
            return habilidades
        }catch(error){
            console.log(error)
            throw error
        }
        
    },

    getNumberHabilidadesPlayer: async (id, tipo) => {
        try{
            let count = 0
            habilidades = await habilidadeDB.getAllType(id,tipo)
           if(Object.keys(habilidades).length <= 0){
            return true
           }else{return false}
        }catch(error){
            console.log(error)
            throw error
        }
        
    },

    getAllType: async (idJogador,tipo) => {
        try{
            habilidades = await habilidadeDB.getAllType(idJogador,tipo)
            return habilidades
        }catch(error){
            console.log(error)
            throw error
        }
        
    },
}

module.exports = habilidadeService