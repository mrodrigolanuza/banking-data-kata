import { Transaction } from "./Transaction";
import { Console } from "./Console";

export class StatementPrinter{
    private readonly header = 'Date | Amount | Balance';
    
    constructor(private readonly console: Console){}

    print(transactions: Transaction[]){
        this.printHeaderLine();
        this.printStatementLines(transactions);
    }

    private printHeaderLine() {
        this.console.log(this.header);
    }

    private printStatementLines(transactions: Transaction[]) {
        let runningBalance = 0;
        transactions.forEach(transaction => {
            runningBalance += transaction.getAmount();
            this.console.log(this.formatStatementLine(transaction, runningBalance));
        });
    }

    private formatStatementLine(transaction: Transaction, runningBalance: number) {
        const formattedAmount = transaction.getAmount().toFixed(2);
        const formattedBalance = runningBalance.toFixed(2);
        return `${transaction.getDate()} | ${formattedAmount} | ${formattedBalance}`;
    }
}
