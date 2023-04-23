import { Transaction } from "./Transaction";
import { Console } from "./Console";

export class StatementPrinter{
    private readonly header = 'Date | Amount | Balance';
    
    constructor(private readonly console: Console){}

    print(transactions: Transaction[]){
        this.console.log(this.header);
        // transactions.forEach(t => this.console.log(`${t.getDate()} | ${t.getAmount()} | 0`))
    }
}
