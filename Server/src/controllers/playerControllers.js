const playerService = require("../services/playerService")

const playerControllers = {
    createPlayer: async(req,res) => {
        try{
            nome =  req.body.nome
            await playerService.createPlayer(nome)
            res.status(200).json({message:"jogador criado com sucesso"})
        }catch(error){
            res.status(500).json({message:error})
        }
    },

    getAll:async (req,res) => {
        try{
            elements = await playerService.getAll();
            res.status(200).json(elements)
        }catch(error){
            res.status(500).json({message: error})
        }
    },

    findByName:async(req,res) => {
        try{
            nome = req.query.nome
            element = await playerService.findByName(nome)
            res.status(200).json({body:element})
        }catch(error){
            res.status(500).json({message: error})
        }
    },

    findById:async(req,res) => {
        try{
            id = parseInt(req.query.id)
            element = await playerService.findById(id)
            res.status(200).json({body:element})
        }catch(error){
            res.status(500).json({message: error})
        }
    },

    getAllType:async (req,res) => {
        try{
            tipo = req.query.tipo
            elements = await playerService.getAllType(tipo)
            res.status(200).json(elements)        
        }catch(error){
            res.status(500).json({message: error})
        }
    },

    editElement:async (req, res) => {
        try{
            const {nome, tipo} = req.body
            id = parseInt(req.body.id)
            xp = parseInt(req.body.xp)
            element = await playerService.editElement(id,nome, xp, tipo)
            res.status(200).json({body:element})
        }catch(error){
            console.log("Controller")
            res.status(500).json({message: error})
        }
    },

    addNivel:async (req,res)=>{
        try{
            const {id, tipo} = req.body
            await playerService.addNivel(parseInt(id), tipo) 
            res.status(200).json({message:"parabens por subir de nivel"})
        }catch(error){
            console.log("Controller")
            res.status(500).json({message: error})
        }
    },

    addXp:async (req,res) => {
        try{
            const {id,xp} = req.body
            player = await playerService.addXp(parseInt(id),parseInt(xp)) 
            res.status(200).json({message:player})
        }catch(error){
            console.log("Controller")
            res.status(500).json({message: error})
        }
    },
    
    subXp:async (req,res) => {
        try{
            const {id,xp} = req.body
            player = await playerService.subXp(parseInt(id),parseInt(xp)) 
            res.status(200).json({message:player})
        }catch(error){
            console.log("Controller")
            res.status(500).json({message: error})
        }
    },

    delete:async (req, res) => {
        try{
            id = parseInt(req.body.id)
            element = await playerService.delete(id)
            res.status(200).json({message:element})

        }catch(error){
            console.log("Controller")
            res.status(500).json({message:error})
        }
    },
}

module.exports = {playerControllers}
