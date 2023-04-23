import { Account } from "../../core/Account";
import { Console } from "../../core/Console";
import { TransactionRepository } from "../../core/TransactionRepository";

describe('Print Statement', () => {
    //Importante evitar hacer mock de artefactos y librerías que no son propias. 
    //Para ello en este caso, hacemos un wrapper sobre la consola de salida estándar y así crear un mock sobre éste.
    const console = new Console();
    const consoleSpy = jest.spyOn(console, 'log');
    const repository = new TransactionRepository();
    const account = new Account(repository);
    
    it('prints an account statement including the transaction made throughout the console', () =>{
        account.deposit(1000.00);
        account.withdraw(500.00);
        account.deposit(2000.00);
        
        account.printStatement();
        
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('23/04/2023 | 2000.00 | 2500.00');
        expect(consoleSpy).toHaveBeenCalledWith('22/04/2023 | -500.00 | 500.00');
        expect(consoleSpy).toHaveBeenCalledWith('22/04/2023 | 1000.00 | 1000.00');
    });
});