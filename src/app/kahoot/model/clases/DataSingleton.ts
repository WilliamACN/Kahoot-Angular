import { Preguntas } from './preguntas';
export class DataSingleton {
    private static dataPreguntas: Preguntas;

    public constructor(){}

    public static getDataInstance(): Preguntas {
        if (!DataSingleton.dataPreguntas) {
          DataSingleton.dataPreguntas = new Preguntas();
        }
        return DataSingleton.dataPreguntas;
      }
}