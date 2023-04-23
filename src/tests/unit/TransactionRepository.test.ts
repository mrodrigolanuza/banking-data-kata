import { Clock } from "../../core/Clock";
import { Transaction } from "../../core/Transaction";
import { TransactionRepository } from "../../core/TransactionRepository";

describe('The Transaction Repository', () => {
    it('stores a deposit for a given amount', () =>{
       const today = '23/04/2023';
       const amount = 100;
       const clock = new Clock();
       clock.getDateAsString = () => today;
       const repository = new TransactionRepository(clock);
       
       repository.addDeposit(amount);
       
       const transactions = repository.allTransactions();
       expect(transactions[0]).toEqual(new Transaction(today, amount));
    });
});