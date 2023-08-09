const dataBase = require("../models");

class NivelController {

	static async pegaTodosOsNiveis(req, res) {
		try {
			const todosOsNiveis = await database.Niveis.findAll();
			return res.status(200).json(todosOsNiveis);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async pegaUmaNivel(req, res){
		const {id} = req.params;
		try{
			const umaNivel = await dataBase.Niveis.findOne({where: {id: Number(id)}});

			return  res.status(200).json(umaNivel);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async criaNivel(req, res){
		const novaNivel = req.body; 

		try{
			const novaNivelCriada = await dataBase.Niveis.create(novaNivel);

			return res.status(200).json(novaNivelCriada);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async atualizaNivel(req, res){
		const novasInfos = req.body;
		const {id} = req.params;

		try{
			await dataBase.Niveis.update(novasInfos, {where: {id: Number(id)}});
			const NivelAtualizada = await dataBase.Niveis.findOne({where: {id: Number(id)}});
            
			return res.status(200).json(NivelAtualizada);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async apagaNivel    (req, res){
		const{id} = req.params;

		try{
			await dataBase.Niveis.destroy({where: {id: Number(id)}});
            
			return res.status(200).json({mensagem: `O id com o numero ${id} foi deletado.`});
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

}

module.exports = NivelController;