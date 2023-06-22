
export class matriz {

    constructor(jsonData) {
        nropreguntas = jsonData.rows.length;
        let matriz = jsonData.rows;

        for (let i = 0; i < matriz.rows.length; i++) {
            matriz.rows[i].ITEM = jsonData.rows[i].ITEM;
            matriz.rows[i].CATEGORIA = 0;
            matriz.rows[i].COBERTURATI = 0;
            matriz.rows[i].MADUREZ = 0;
            matriz.rows[i].PRIORIDAD = 0;
        }
        console.log(matriz);
    }

}

