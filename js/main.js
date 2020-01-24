//import moment from '../node_modules/moment/src'

const periodos = Array.from(document.querySelectorAll('.periodos ul li'))
const menuDisc = document.querySelector('.botoes')
const menuPeri = document.querySelector('.periodos ul')
const hora = document.querySelector('.hora')

let materia = '' 
let aux = {}
const atividades = fetch('../data/alunos.json')
    .then(req => req.json())
    .then(json => {
        ranking(json)
        montaDisciplinas(json)
    })

//const now = moment()
periodos.forEach(per => per.addEventListener('click', verPeriodo))

function montaDisciplinas(lista){
    ldisc = lista[0].disciplinas
    let add = ``
    for (l in ldisc){
        add += `<div id="${l}" class="materia">
            <img id="${l}" src="./images/${l}.png" alt="">
            <p id="${l}" class="nome">${l.toUpperCase()}</p>
        </div>
        `
    }
    menuDisc.insertAdjacentHTML('beforeend',add)
    
    const disciplinas = Array.from(document.querySelectorAll('.botoes .materia'))
    disciplinas.forEach(disc => disc.addEventListener('click', verDisciplina)) 
    materia = document.querySelectorAll('.botoes .materia')
}

function verDisciplina(event){
    materia.forEach(m => m.remove())
    let add = ``
    const disciplina = document.querySelector('.disciplinas .botoes')
    disciplina.setAttribute('style', 'display: block')
    
    if (event.target.id == 'ls'){
        
        add += `<h2>Linguagem de Script</h2>
        <div class="alunos" style="display: block">
        `
        for(aluno of aux){
            if(aluno.disciplinas.ls != ''){
                add += `<div class="aluno">
                    <p class="nome">${aluno.username}</p>
                    <h4 style="font-weight: normal">${
                        (aluno.disciplinas.ls).toString().replace(/[^a-zçãõ-]/gm, ' / ')
                    }</h4>
            </div>
            `
            }
        }
        add += '</div>'
    }

    else if (event.target.id == 'lm'){
        
        add += `<h2>Linguagem de Marcação</h2>
        <div class="alunos" style="display: block">
        `
    
        for(aluno of aux){
            if(aluno.disciplinas.lm != ''){
                add += `<div class="aluno">
                    <p class="nome">${aluno.username}</p>
                    <h4 style="font-weight: normal">${
                        (aluno.disciplinas.lm).toString().replace(/[^a-zçãõ-]/gm, ' / ')
                    }</h4>
                </div>
                `
            }
        }
        add += '</div>'
    }
    
    else if (event.target.id == 'pw'){
        
        add += `<h2>Programação Web 1</h2>
        <div class="alunos" style="display: block">
        `
    
        for(aluno of aux){
            if(aluno.disciplinas.pw != ''){
                add += `<div class="aluno">
                    <p class="nome">${aluno.username}</p>
                    <h4 style="font-weight: normal">${
                        (aluno.disciplinas.pw).toString().replace(/[^a-zçãõ-]/gm, ' / ')
                    }</h4>
                </div>
                `
            }
        }
        add += '</div>'
    }

    else if (event.target.id == 'ape'){
        
        add += `<h2>Algoritmo e Programção Estruturada</h2>
        <div class="alunos" style="display: block">
        `
    
        for(aluno of aux){
            if(aluno.disciplinas.ape != ''){
                add += `<div class="aluno">
                    <p class="nome">${aluno.username}</p>
                    <h4 style="font-weight: normal">${
                        (aluno.disciplinas.ape).toString().replace(/[^a-zçãõ-]/gm, ' / ')
                    }</h4>
                </div>
                `
            }
        }
        add += '</div>'
    }
    add += '<button><a href="#home" onclick="history.go(0)">Voltar</a></button>'
    menuDisc.insertAdjacentHTML('beforeend', add)
}

function verPeriodo(event){
    let evento = event
    let periodo = document.querySelector('.periodos')
    menuPeri.remove()
    let add = `<h2>${evento.target.innerHTML}</h2>
    `

    for (aluno of aux){
        
        if (aluno.periodo == evento.target.innerHTML){
            
            add += `<div class="aluno">
            <p class="nome">${aluno.username}</p>
            
            <h5>Linguagem de Script</h5>
            <h4 style="font-weight: normal">${aluno.disciplinas.ls}</h4>
            <h5>Linguagem de Marcação</h5>
            <h4 style="font-weight: normal">${aluno.disciplinas.lm}</h4>
            <h5>Programação Web 1</h5>
            <h4 style="font-weight: normal">${aluno.disciplinas.pw}</h4>
            <h5>Algoritmo e Programção Estruturada</h5>
            <h4 style="font-weight: normal">${aluno.disciplinas.ape}</h4>
        </div>`
        }
    }
    add += '<button><a href="#home" onclick="history.go(0)">Voltar</a></button>'
    periodo.insertAdjacentHTML('beforeend', add)
}


function ranking(json){
    json.sort(function(a, b){
        return a.feitos < b.feitos ? 1 : a.feitos > b.feitos? -1 : 0
    })
    aux = json

    let fotos = document.querySelectorAll('.foto')
    let nomes = document.querySelectorAll('.nome')
    let quantidade = document.querySelectorAll('h4')

    for(i=0; i<3; i++){
        fotos[i].setAttribute('src', json[i].avatar_url)
        
    }
    for(i=0; i<json.length; i++){
        nomes[i].innerHTML = json[i].username
        quantidade[i].innerHTML = `${json[i].feitos} atividades`
    }
}