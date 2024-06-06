class Person {
    name: string;
    income?: number; 

    constructor(name: string, income?: number) {
        this.name = name;
        this.income = income;
    }

    hello(): string {
        return `${this.name} says Hello!`;
    }
}

class BankAccount {
    protected balance: number = 0;
    accountNumber: number;

    constructor(accountNumber: number) {
        this.accountNumber = accountNumber;
    }


    // pertence apenas à classe 
    static returnBankNumber(): number {
        return 125;
    }

    private getBalance(): number { return this.balance; }

    addBalance(ammount: number) {
        this.balance += ammount;
    }
}

class BankAccountPessoaFisica extends BankAccount {
    addBalance(ammount: number): void {
        this.balance = ammount * 2;
    }
}

const account = new BankAccountPessoaFisica(123);

BankAccount.returnBankNumber();