function mediaAluno(nt1,nt2){
    const nota1 = parseFloat(nt1);
    const nota2 = parseFloat(nt2);
    const media = parseFloat((nota1 + nota2) / 2);
    
    //retona media do aluno
    return media;

    /*
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
    */
}

module.exports = {mediaAluno};