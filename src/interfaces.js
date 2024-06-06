"use strict";
class Conta {
    constructor(numero) {
        this.saldo = 0;
        this.numero = numero;
    }
    getSaldo() {
        return this.saldo;
    }
    addSaldo(valor) {
        this.saldo += valor;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.addSaldo(valor);
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxa = 0;
    }
    transferir(valor, destinatario) {
        destinatario.addSaldo(valor - this.taxa);
        return true;
    }
    ;
}
