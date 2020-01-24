const disciplinas = Array.from(document.querySelectorAll('.botoes .materia'))
const periodos = Array.from(document.querySelectorAll('.periodos ul li'))

const atividades = fetch('../data/alunos.json')
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
    json.sort(function(a, b){
        return a.feitos < b.feitos ? 1 : a.feitos > b.feitos? -1 : 0
    })

    let fotos = document.querySelectorAll('.foto')
    let nomes = document.querySelectorAll('.nome')
    let quantidade = document.querySelectorAll('h4')
    console.log(quantidade)

    for(i=0; i<3; i++){
        fotos[i].setAttribute('src', json[i].avatar_url)
        
    }
    for(i=0; i<json.length; i++){
        nomes[i].innerHTML = json[i].username
        quantidade[i].innerHTML = `${json[i].feitos} atividades`
    }
}