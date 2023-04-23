import { Clock } from "./Clock";
import { Transaction } from "./Transaction";


export class TransactionRepository{
    transactions:Transaction[] = [];
    
    constructor(private readonly clock:Clock){}
    
    addDeposit(amount:number){
        const transaction = new Transaction(this.clock.getDateAsString(), amount);
        this.transactions.push(transaction);
    }
    withdrawDeposit(amount:number){
        const transaction = new Transaction(this.clock.getDateAsString(), -amount);
        this.transactions.push(transaction);
    }
    allTransactions():Transaction[]{
        return this.transactions;
    }
}