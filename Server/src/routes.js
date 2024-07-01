const express = require("express");
const playerController = require('./controllers/playerControllers')
const habilidadeController = require('./controllers/habilidadeController')

const router = express.Router();

//Players, Monsters and NPCs
router.post('/createPlayer',playerController.playerControllers.createPlayer)
router.get('/findbyName', (req,res) => {playerController.playerControllers.findByName(req,res)})
router.get('/getAll', (req,res)=>{playerController.playerControllers.getAll(req,res)})
router.get('/findbyId', (req, res)=>{playerController.playerControllers.findById(req,res)})
router.put('/addNivel',playerController.playerControllers.addNivel)
router.put('/addXp', (req, res) => {playerController.playerControllers.addXp(req,res)})
router.put('/subXp', (req, res) => {playerController.playerControllers.subXp(req,res)})
router.put('/editElement', (req, res) => {playerController.playerControllers.editElement(req, res)})
router.delete('/removeElement',(req, res) => {playerController.playerControllers.delete(req,res)})

//players
router.get('/getAllType', (req,res) => {playerController.playerControllers.getAllType(req,res)})

//Monsters
router.get('/getAllMonsters', (req,res) => {playerController.playerControllers.getAllMonsters(req,res)})

//NPCs
router.get('/getAllNPCS', (req,res) => {playerController.playerControllers.getAllNPCs(req,res)})

//Habilidades
router.post('/createHabilidade', (req, res) => {habilidadeController.habilidadeController.createHabilidade(req,res)})
router.get('/getAllHabilidades', habilidadeController.habilidadeController.getAll)
router.get('/getAllHablidadesType',habilidadeController.habilidadeController.getAllHablidadesType)
router.get('/getNumberHabilidadesPlayer', habilidadeController.habilidadeController.getNumberHabilidadesPlayer)
router.get('/maxLevelFisico')   
router.get('/maxLevelMental')
router.put('/addNivelHabilidade')
router.put('/subNivelHabilidade')






module.exports = router;



