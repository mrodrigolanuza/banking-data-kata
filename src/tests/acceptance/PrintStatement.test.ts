import { Account } from "../../core/Account";
import { Clock } from "../../core/Clock";
import { Console } from "../../core/Console";
import { StatementPrinter } from "../../core/StatementPrinter";
import { TransactionRepository } from "../../core/TransactionRepository";

describe('Print Statement', () => {
    //Importante evitar hacer mock de artefactos y librerías que no son propias. 
    //Para ello en este caso, hacemos un wrapper sobre la consola de salida estándar y así crear un mock sobre éste.
    const console = new Console();
    const statementPrinter = new StatementPrinter(console);
    const consoleSpy = jest.spyOn(console, 'log');
    const clock = new Clock();
    //Stub que permite devolver valores predeterminadas en un número de llamadas consecutivas
    clock.getDateAsString = jest
        .fn()
        .mockReturnValueOnce('20/04/2023')
        .mockReturnValueOnce('21/04/2023')
        .mockReturnValueOnce('22/04/2023');
    const repository = new TransactionRepository(clock);
    const account = new Account(repository, statementPrinter);
    
    it('prints an account statement including the transaction made throughout the console', () =>{
        account.deposit(2000.00);
        account.withdraw(500.00);
        account.deposit(1000.00);
        
        account.printStatement();
        
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('20/04/2023 | 2000.00 | 2000.00');
        expect(consoleSpy).toHaveBeenCalledWith('21/04/2023 | -500.00 | 1500.00');
        expect(consoleSpy).toHaveBeenCalledWith('22/04/2023 | 1000.00 | 2500.00');
    });
});