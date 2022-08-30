import { PreguntaModel } from '../preguntaModel';

export class Preuntas {
    private preguntas: PreguntaModel[];

    constructor(){

        this.preguntas = [
            { id:1, pregunta:"¿Cuantos meses del año tienen 28 días?", respuesCorrecta:"12", tema:"No se jaja" },
            { id:2, pregunta:"¿Cuánto duró la Guerra de los Cien Años?", respuesCorrecta:"116", tema:"Historia" },
            { id:3, pregunta:"¿Cuánto dura un partido de rugby?", respuesCorrecta:"80 min", tema:"Deportes" },
            { id:4, pregunta:"¿Cómo se llama el hermano menor de Mario Bros?", respuesCorrecta:"Luigi", tema:"Entretenimiento" },
            { id:5, pregunta:"¿Cuántas patas tienen las arañas?", respuesCorrecta:"8", tema:"Tampoco se" },
        ]
    }

    public getPregutnas(){
        return this.preguntas;
    }
}