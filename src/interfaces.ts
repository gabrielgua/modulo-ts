class Conta {
    numero: number;
    private saldo: number = 0;

    constructor(numero: number) {
        this.numero = numero;
    }

    getSaldo() {
        return this.saldo;
    }

    addSaldo(valor: number) {
        this.saldo += valor;
    } 
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.addSaldo(valor);
    }
}

interface Transacional {
    transferir: (valor: number, destinatario: Conta) => boolean; 
    taxa: number;
}

class ContaCorrente extends Conta implements Transacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.addSaldo(valor - this.taxa);
        return true;
    };
    taxa: number = 0;
}