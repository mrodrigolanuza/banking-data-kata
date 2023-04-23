import { Clock } from "./Clock";
import { Transaction } from "./Transaction";


export class TransactionRepository{
    transactions:Transaction[] = [];
    
    constructor(private readonly clock:Clock){}
    
    addDeposit(amount:number){
        this.transactions.push(new Transaction(this.clock.getDateAsString(), amount));
    }
    withdrawDeposit(amount:number){

    }
    allTransactions():Transaction[]{
        return this.transactions;
    }
}