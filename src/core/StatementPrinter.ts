import { Transaction } from "./Transaction";
import { Console } from "./Console";

export class StatementPrinter{
    private readonly header = 'Date | Amount | Balance';
    
    constructor(private readonly console: Console){}

    print(transactions: Transaction[]){
        this.console.log(this.header);
        
        if(transactions.length > 0){
            const transaction = transactions[0];    
            let runningBalance = 0;
            runningBalance += transaction.getAmount();
            this.formatStatementLine(transaction, runningBalance);
        }
        
    }

    private formatStatementLine(transaction: Transaction, runningBalance: number) {
        const formattedAmount = transaction.getAmount().toFixed(2);
        const formattedBalance = runningBalance.toFixed(2);
        this.console.log(`${transaction.getDate()} | ${formattedAmount} | ${formattedBalance}`);
    }
}
