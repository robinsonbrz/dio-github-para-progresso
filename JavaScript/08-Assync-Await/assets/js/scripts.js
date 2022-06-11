const BASE_URL = 'https://mdb.enedino.com.br/';

let json_retorno = []

const getListTodo = async () => {
	try {
		const data = await fetch(BASE_URL);
		return await data.json();
	} catch (e) {
		console.log(e.message);
	}
};

const loadList = async () => {
	const H3 = document.getElementsByTagName('h3')[0];
	let json_retorno = await getListTodo();
    let numero_aleatorio = Math.floor(Math.random() * (json_retorno.length )) ;
    let tarefa = json_retorno[numero_aleatorio]['description'];
    console.log("Retorno: " + tarefa );
    H3.textContent = (numero_aleatorio + 1) + ": " + tarefa;
};

loadList();

const btn = document.getElementById('muda-tarefa');
btn.addEventListener('click', loadList);