const habildiadeService = require("../services/habilidadeService")

const habilidadeController = {
    createHabilidade: async(req,res) => {
        
        try{
            const {id, nome, tipo} =  req.body
            await habildiadeService.createHabilidade(Number(id),nome, tipo)
            res.status(200).json({mensage:"Habilidade criada com sucesso"})
        }catch(error){
            console.log('controle')
            res.status(500).json({mensage:`falha ao criar habildiade por ${error}`})
        }
    },

    getAll: async(req,res) => {
        try{
            habilidades = await habildiadeService.getAll()
            res.status(200).json(habilidades)
        }catch(error){
            console.log('controle')
            res.status(500).json({mensage:`falha ao criar habildiade por ${error}`})
        }
    },

    getNumberHabilidadesPlayer: async(req,res) => {
        try{
            const {id, tipo} = req.query
            result = await habildiadeService.getNumberHabilidadesPlayer(parseInt(id), tipo)
            res.status(200).json(result)
        }catch(error){
            console.log('controle')
            res.status(500).json({mensage:`falha ao criar habildiade por ${error}`})
        }
    },



    getAllHablidadesType: async(req,res) => {
        try{
            const {idJogador, tipo} = req.query
            habilidades = await habildiadeService.getAllType(parseInt(idJogador),tipo)
            res.status(200).json(habilidades)
        }catch(error){
            console.log('controle')
            res.status(500).json({mensage:`falha ao criar habildiade por ${error}`})
        }
    }


}

module.exports = {habilidadeController}
