/*class notas{
    constructor(nF,nP,nT){
        if((!nF||!nP||!nT) || (nF<0 || nP<0 || nT<0) || (nF>10 || nP>10 || nT>10)){
            throw new Error('Nota invalida');
        }
        this.nF=0;
        this.nP=nP;
        this.nT=nT;
    }
}*/
class estudante{
    constructor(nome, matricula){
        if(!nome){
            throw new Error('Nome invalido');
        }
        if(!matricula){
             throw new Error('Matricula invalida');
        }
        if((!nF||!nP||!nT) || (nF<0 || nP<0 || nT<0) || (nF>10 || nP>10 || nT>10)){
            throw new Error('Nota invalida');
        }
        this.nome=nome;
        this.matricula=matricula;
        nF=0;
        nP=0;
        nT=0;
        }
        lancarNota(disciplina, valor){
            //validação
            if(!valor||valor<0||valor>10){
                throw new Error('Nota invalida');
            }
            if(!disciplina ||(disciplina!="feiticaria" || disciplina!="pocoes" || disciplina!="transfiguracao")){
                throw new Error('Disciplina invalida');
            }
            /*estudante.notas.disciplina=valor;*/

            if(disciplina=="feiticaria"){
                nF=valor;
            }
            if(disciplina=="pocoes"){
                nP=valor;
            }
            if(disciplina=="transfiguracao"){
                nT=valor;
            }
        }
        calcularMedia(){
            return ((nF+nP+nT)/3);
        }
}
class EstudanteBolsista extends estudante{
    getSituacao(){
        if(EstudanteBolsista.calcularMedia<5){
            return "Reprovado";
        }
        if(EstudanteBolsista.calcularMedia>=5){
            return "Recuperação";

        }
        if(EstudanteBolsista.calcularMedia>=7){
            return "Aprovado";
        }
    }
}
class EstudanteRegular extends estudante{
    getSituacao(){
        if(EstudanteBolsista.calcularMedia<4){
            return "Reprovado";
        }
        if(EstudanteBolsista.calcularMedia>=4){
            return "Recuperação";

        }
        if(EstudanteBolsista.calcularMedia>=6){
            return "Aprovado";
        }
    }
}
class secretaria{
    alunos = [];
    n=0
    verificarAvaliavel(obj){
        if(!obj.getSituacao || !obj.calcularMedia){
            return true;
        }
        return false
    }
    matricular(estudante){
        if(verificarAvaliavel(estudante)==true){
            this.alunos[i]=estudante;
            estudante.matricula=n;
            n++;
        }
    }
    buscarPorMatricula(matricula){
        for(i=0;i<=n;i++){
            if(this.alunos[i].matricula==matricula){
                return this.alunos[i];
            }
        }
        throw new Error("Estudante não encontrado");
    }
    gerarRanking(){
        return alunos.sort();
    }

}
