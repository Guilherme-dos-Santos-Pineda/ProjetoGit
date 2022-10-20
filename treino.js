
function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
        novoAluno('Mario', 23),
        novoAluno('Jose', 45),
        novoAluno('Marcia', 25),
        novoAluno('joao', 35)
]

function temMenosde30(aluno){
    return aluno.idade < 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)

console.log(alunosComMenosde30)