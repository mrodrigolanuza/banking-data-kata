export class Clock {
    getDateAsString(){
        return this.today().toLocaleDateString('es-ES', {year: 'numeric', month: '2-digit', day: '2-digit'});
    }

    protected today(){
        return new Date();
    }
}