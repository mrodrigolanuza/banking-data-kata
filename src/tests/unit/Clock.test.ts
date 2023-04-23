import { Clock } from "../../core/Clock";

class TestableClock extends Clock{
    protected today(): Date {
        return new Date('2023-04-23');
    }
}

describe('The Clock', () => {
    it('gets today date in dd/mm/yyyy format', () =>{
       const clock = new TestableClock();
       
       const date = clock.getDateAsString();
       
       expect(date).toBe('23/04/2023');
    });
});