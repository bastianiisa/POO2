const readlineSync = require('readline-sync');


class Tarefa {
    descricao: string
    status: boolean


    constructor(descricao: string){
        this.descricao = descricao
        this.status = false;
    }

     // Método para marcar a tarefa como completa (true).
    tarefaCompleta() {
        this.status = true; 
    }

    // Método que exibe informações da tarefa (descrição e status).
    exibirInfo(): string {
        return `O status da tarefa "${this.descricao}˜ é: ${this.status}.`; 
    }

}

class FilaDeTarefas {
    private tarefas: Tarefa[]

    constructor() {
        this.tarefas = []
    }

    // Método para adicionar uma nova tarefa à lista.
    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa);
        console.log("Tarefa adicionada com sucesso!");
    }

    // Método para remover a primeira tarefa da lista (como uma fila FIFO).
    removerTarefa(): void{
        if (this.tarefas.length === 0) {
            console.log("Nenhuma tarefa na fila.");
        } else {
            this.tarefas.shift(); // Remove o primeiro elemento da lista.
            console.log("Primeira tarefa removida.");
        }
    }

    // Método para listar todas as tarefas na fila.
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

    // Método para marcar a primeira tarefa na fila como concluída.
    tarefaPronta(): void {
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


         // Controle de fluxo baseado na escolha do usuário.
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