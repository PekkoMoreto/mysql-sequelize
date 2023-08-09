const dataBase = require("../models");

class PessoaController{
	static async pegaTodasAsPessoas(req, res){
		try{
			const todasAsPessoas = await dataBase.Pessoas.findAll();
			return res.status(200).json(todasAsPessoas);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaPessoa(req, res){
		const {id} = req.params;
		try{
			const umaPessoa = await dataBase.Pessoas.findOne({where: {id: Number(id)}});

			return  res.status(200).json(umaPessoa);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async criaPessoa(req, res){
		const novaPessoa = req.body; 

		try{
			const novaPessoaCriada = await dataBase.Pessoas.create(novaPessoa);

			return res.status(200).json(novaPessoaCriada);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async atualizaPessoa(req, res){
		const novasInfos = req.body;
		const {id} = req.params;

		try{
			await dataBase.Pessoas.update(novasInfos, {where: {id: Number(id)}});
			const pessoaAtualizada = await dataBase.Pessoas.findOne({where: {id: Number(id)}});
            
			return res.status(200).json(pessoaAtualizada);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async apagaPessoa    (req, res){
		const{id} = req.params;

		try{
			await dataBase.Pessoas.destroy({where: {id: Number(id)}});
            
			return res.status(200).json({mensagem: `O id com o numero ${id} foi deletado.`});
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmaMatricula(req, res){
		const {estudanteId, matriculaId} = req.params;
		try{
			const umaMatricula = await dataBase.Matriculas.findOne({where: 
				{id: Number(matriculaId),
					estudante_id: Number(estudanteId)}});

			return  res.status(200).json(umaMatricula);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async criaMatricula(req, res){
		const {estudanteId} = req.params;
		const novaMatricula = {...req.body, estudanteId: Number(estudanteId)}; 

		try{
			const novaMatriculaCriada = await dataBase.Matriculas.create(novaMatricula);

			return res.status(200).json(novaMatriculaCriada);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async atualizaMatricula(req, res){
		const {estudanteId, matriculaId} = req.params;
		const novasInfos = req.body;

		try{
			await dataBase.Matriculas.update(novasInfos, {where: 
				{id: Number(matriculaId),
					estudante_id: Number(estudanteId)}});
			const MatriculaAtualizada = await dataBase.Matriculas.findOne({where: {id: Number(matriculaId)}});
            
			return res.status(200).json(MatriculaAtualizada);
		}catch(error){
			return res.status(500).json(error.message);
		}
	}

	static async apagaMatricula(req, res){
		const{estudanteId, matriculaId} = req.params;

		try{
			await dataBase.Matriculas.destroy({where: {
				id: Number(matriculaId),
				estudante_id: Number(estudanteId)}});
            
			return res.status(200).json({mensagem: `O id com o numero ${matriculaId} foi deletado.`});
		}catch(error){
			return res.status(500).json(error.message);
		}
	}


}

module.exports = PessoaController;