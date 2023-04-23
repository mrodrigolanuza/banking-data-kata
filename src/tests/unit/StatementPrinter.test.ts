import { Console } from "../../core/Console";
import { StatementPrinter } from "../../core/StatementPrinter";
import { Transaction } from "../../core/Transaction";

describe('The Statement Printer', () => {
    it('prints correctly the header line', () =>{
      const console = new Console();
      const printer = new StatementPrinter(console);
      const consoleSpy = jest.spyOn(console, 'log');

      printer.print([new Transaction('', 0)]);

      expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
    });
    it('prints a statament account including only one transaction', () =>{
        const date = '24/04/2023'
        const amount = 100;
        const balance = 100;
        const console = new Console();
        const printer = new StatementPrinter(console);
        const transactions = [new Transaction(date, amount)];
        const consoleSpy = jest.spyOn(console, 'log');
        
        printer.print(transactions);
        
        expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
        expect(consoleSpy).toHaveBeenCalledWith(`${date} | ${amount.toFixed(2)} | ${balance.toFixed(2)}`);

        expect(true).toBe(true);
      });
});