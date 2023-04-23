export class Transaction{
    constructor(private readonly date:string, private readonly amount:number){}
    
    getDate(){
        return this.date;
    }

    getAmount(){
        return this.amount;
    }
}