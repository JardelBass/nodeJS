function mediaAluno(nome,nt1,nt2){
    const nomeAluno = nome;
    const nota1 = parseFloat(nt1);
    const nota2 = parseFloat(nt2);
    const media = parseFloat((nota1 + nota2) / 2);

    if(media >= 7){
        return "Aluno "+nomeAluno+" apreovado com media: "+media;
    }else{
        return "aluno " +nomeAluno+" reprovado com media: "+media;
    }
}

module.exports = {mediaAluno};