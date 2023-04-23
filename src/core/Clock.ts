export class Clock {
    getDateAsString(){
        const date = new Date();
        return date.toLocaleDateString('es-ES', {year: 'numeric', month: '2-digit', day: '2-digit'});
    }
}