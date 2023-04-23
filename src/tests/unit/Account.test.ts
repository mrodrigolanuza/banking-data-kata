import { Account } from "../../core/Account";
import { Clock } from "../../core/Clock";
import { Console } from "../../core/Console";
import { StatementPrinter } from "../../core/StatementPrinter";
import { Transaction } from "../../core/Transaction";
import { TransactionRepository } from "../../core/TransactionRepository";



describe('The account', () => {
    const repository = new TransactionRepository(new Clock());
    const console = new Console();
    const statementPrinter = new StatementPrinter(console);
    const account = new Account(repository, statementPrinter);
    const addDepositySpy = jest.spyOn(repository, 'addDeposit');
    const withdrawDepositySpy = jest.spyOn(repository, 'withdrawDeposit');
    const printerSpy = jest.spyOn(statementPrinter, 'print');
    
    it('perfomrs a deposit correctly throughout the repository', () =>{
        account.deposit(100);

        expect(addDepositySpy).toHaveBeenCalledWith(100);
    });
    it('perfomrs a withdrawal correctly throughout the repository', () =>{
        account.withdraw(200);

        expect(withdrawDepositySpy).toHaveBeenCalledWith(200);
    });
    it('prints a statement throughout the statement printer', () =>{
        const transactions = [new Transaction('', 0), new Transaction('', 0)];
        repository.allTransactions = () => transactions;

        account.printStatement();

        expect(printerSpy).toHaveBeenCalledWith(transactions);
    });
});