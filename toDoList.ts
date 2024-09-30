const readlineSync = require('readline-sync');


class Tarefa {
    descricao: string
    status: boolean


    constructor(descricao: string){
        this.descricao = descricao
        this.status = false;
    }

    tarefaCompleta() {
        this.status = true; 
    }

    exibirInfo(): string {
        return `O status da tarefa "${this.descricao}˜ é: ${this.status}.`; 
    }

}

class FilaDeTarefas {
    private tarefas: Tarefa[]

    constructor() {
        this.tarefas = []
    }

    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
        console.log("Tarefa adicionada com sucesso!");
    }

    removerTarefa(): void{
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na fila.");
        } else {
            this.tarefas.shift();
            console.log("Primeira tarefa removida.");
        }
    }

    listarTarefas(): void{
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na fila.");
        } else {
            console.log("Tarefas:");
            this.tarefas.forEach((tarefa, index) => {
                console.log(`${index + 1}. ${tarefa.exibirInfo()}`);
            });
        }
    }

    tarefaPronta(): void{
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na fila.");
        } else {
            this.tarefas[0].tarefaCompleta();
            console.log(`Tarefa "${this.tarefas[0].descricao}" marcada como feita.`);
        }
    }
}

function menu(){
    const fila = new FilaDeTarefas()
    let opcao = '0'


    while (opcao !== '5' ){
        console.log('---- Menu To-Do List ----')
        console.log('1. Adicionar tarefa')
        console.log('2. Remover tarefa')
        console.log('3. Listar tarefas')
        console.log('4. Marcar tarefa como concluída')
        console.log('5. Sair')

        opcao = readlineSync.question("Selecione uma opção: ");


        switch (opcao){
            case '1':
                const descricao = readlineSync.question("Insira a descrição da tarefa:")
                const tarefa = new Tarefa(descricao) 
                fila.adicionarTarefa(tarefa)

                break;


            case '2':
                fila.removerTarefa()

                break;

            
            case '3':
                fila.listarTarefas()

                break;

            case '4':
                fila.tarefaPronta()

                break;

            
            case '5': 
                console.log("Saindo...");

                return;

            default:
                console.log("Opção inválida, por favor digite um número de 1 a 5.")

        }
        

    }

}
menu(); 