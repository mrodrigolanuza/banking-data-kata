import { Account } from "../../core/Account";
import { StatementPrinter, Transaction } from "../../core/StatementPrinter";
import { TransactionRepository } from "../../core/TransactionRepository";



describe('The account', () => {
    const repository = new TransactionRepository();
    const statementPrinter = new StatementPrinter();
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
        const transactions = [new Transaction(''), new Transaction('')];
        repository.allTransactions = () => transactions;

        account.printStatement();

        expect(printerSpy).toHaveBeenCalledWith(transactions);
    });
});