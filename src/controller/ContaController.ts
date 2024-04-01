import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();

    numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta !== null)
        buscaConta.visualizar()
        else
            console.log("Conta não encontrada!")
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!")
    }
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);
        if(buscaConta !== null){
        this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;    
        console.log(`A conta ${conta.numero} foi atualizada com sucesso`)
        }else
            console.log("Conta não encontrada!")
    }
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);
        if(buscaConta !== null){
        this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)
        console.log(`A conta ${numero} foi excluida com sucesso`)
        }else
            console.log("Conta não encontrada!")
    }
    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if(conta != null){
            //o if aqui é porque ele verifica se tem o saldo, ja o depositar nao precisa pq só adiciona no saldo
            if(conta.sacar(valor) == true)
            console.log(`O Saque na conta numero ${numero} foi efetuado com sucesso!`);
            }else
                console.log(`A conta ${numero} não encontrada!`)
        
        
    }
    depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero);
        if(conta != null){
            conta.depositar(valor);
            console.log(`O deposito na conta numero ${numero} foi efetuado com sucesso!`);
            }else
                console.log(`A conta ${numero} não encontrada!`)
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem)
        let contaDestino = this.buscarNoArray(numeroDestino)

        if(contaOrigem != null && contaDestino != null ){
            if(contaOrigem.sacar(valor) == true){
                contaDestino.depositar(valor);
                console.log(`A transferencia da conta ${numeroOrigem} para ${numeroDestino} foi realizada com sucesso!`)
            }
        }else
            console.log(`A conta ${numeroOrigem} ou Conta numero ${numeroOrigem} nao foram encontradas!`)

    }

    //Metodos Auxiliares

    public gerarNumero(): number {
        return ++this.numero
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }
        return null;
    }
}