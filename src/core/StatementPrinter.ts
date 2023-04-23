import { Transaction } from "./Transaction";
import { Console } from "./Console";

export class StatementPrinter{
    constructor(private readonly console: Console){}

    print(transactions: Transaction[]){
        this.console.log('Date | Amount | Balance');
        // transactions.forEach(t => this.console.log(`${t.getDate()} | ${t.getAmount()} | 0`))
    }
}
