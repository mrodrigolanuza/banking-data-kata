import { Console } from "../../core/Console";
import { StatementPrinter } from "../../core/StatementPrinter";
import { Transaction } from "../../core/Transaction";

describe('The Statement Printer', () => {
    const console = new Console();
    const printer = new StatementPrinter(console);
    const consoleSpy = jest.spyOn(console, 'log');

    it('prints correctly the header line', () =>{
      printer.print([new Transaction('', 0)]);

      expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
    });
    it('prints a statament account including only one transaction', () =>{
        const date = '24/04/2023'
        const amount = 100;
        const balance = 100;
        const transactions = [new Transaction(date, amount)];
        
        printer.print(transactions);
        
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith(`${date} | ${amount.toFixed(2)} | ${balance.toFixed(2)}`);
      });
      it('prints a statament account including several transactions', () =>{
        const transactions = [
            new Transaction('25/04/2023', 1000), 
            new Transaction('26/04/2023', -500), 
            new Transaction('27/04/2023', 2000)
        ];
        
        printer.print(transactions);
        
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith('25/04/2023 | 1000.00 | 1000.00');
        expect(consoleSpy).toHaveBeenCalledWith('26/04/2023 | -500.00 | 500.00');
        expect(consoleSpy).toHaveBeenCalledWith('27/04/2023 | 2000.00 | 2500.00');
   });
});