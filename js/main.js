const disciplinas = Array.from(document.querySelectorAll('.botoes .materia'))
const periodos = Array.from(document.querySelectorAll('.periodos ul li'))

const atividades = fetch('../data/alunos')
    .then(req => req.json())
    .then(json => ranking(json))

disciplinas.forEach(disc => disc.addEventListener('click', verDisciplina))
periodos.forEach(per => per.addEventListener('click', verPeriodo))

function verDisciplina(event){
    
    console.log(event.target.id)
    
}

function verPeriodo(event){
    
    console.log(event.target.innerHTML)
    
}

function ranking(json){
    console.log(json)
}