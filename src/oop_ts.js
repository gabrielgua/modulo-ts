"use strict";
class Person {
    constructor(name, income) {
        this.name = name;
        this.income = income;
    }
    hello() {
        return `${this.name} says Hello!`;
    }
}
class BankAccount {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
    // pertence apenas à classe 
    static returnBankNumber() {
        return 125;
    }
    getBalance() { return this.balance; }
    addBalance(ammount) {
        this.balance += ammount;
    }
}
class BankAccountPessoaFisica extends BankAccount {
    addBalance(ammount) {
        this.balance = ammount * 2;
    }
}
const account = new BankAccountPessoaFisica(123);
BankAccount.returnBankNumber();
