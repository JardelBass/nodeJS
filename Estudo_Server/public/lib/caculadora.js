function mediaAluno(nome,nt1,nt2){
    const nomeAluno = nome;
    const nota1 = parseFloat(nt1);
    const nota2 = parseFloat(nt2);
    const media = parseFloat((nota1 + nota2) / 2);

    const aluno = {
        "nome": nomeAluno,
        "media": media,
        "aprov": "" 
        };

    if(media >= 7){
        aluno.nome = nomeAluno;
        aluno.media = media;
        aluno.aprov ="Aprovado";
        return  aluno;
    }else{
        aluno.nome = nomeAluno;
        aluno.media = media;
        aluno.aprov ="Reprovado";
        return  aluno;
    }
}

module.exports = {mediaAluno};