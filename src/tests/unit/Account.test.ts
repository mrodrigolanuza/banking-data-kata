import { Account } from "../../core/Account";
import { TransactionRepository } from "../../core/TransactionRepository";



describe('The account', () => {
    const repository = new TransactionRepository();
    const account = new Account(repository);
    const addDepositySpy = jest.spyOn(repository, 'addDeposit');
    const withdrawDepositySpy = jest.spyOn(repository, 'withdrawDeposit');

    it('perfomrs a deposit correctly throughout the repository', () =>{
        account.deposit(100);

        expect(addDepositySpy).toHaveBeenCalledWith(100);
    });
    it('perfomrs a withdrawal correctly throughout the repository', () =>{
        account.withdraw(200);

        expect(withdrawDepositySpy).toHaveBeenCalledWith(200);
    });
});