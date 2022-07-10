/*
    # Alunos aprovados
    
    1. Crie uma função que recebe o array alunos e um número que irá representar a média final;
    2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
    3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

const alunos = [
    {
        nome: 'Pedro',
        nota: 6, 
        turma: '1A',
    },
    {
        nome: 'Sofia',
        nota: 9, 
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 2, 
        turma: '1A',
    },
]

function alunosAprovados (arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);;
        } 
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5))