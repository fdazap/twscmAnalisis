
const comboValEst = [
    { 'valor': 'Mision Critica', 'Puntaje': 4, 'Color': 'red' },
    { 'valor': 'Negocio Critico', 'Puntaje': 3, 'Color': 'yellow' },
    { 'valor': 'Operativo', 'Puntaje': 2, 'Color': 'cornflowerblue' },
    { 'valor': 'Minimo', 'Puntaje': 1, 'Color': 'greenyellow' },
];

const comboCoberturaIT = [
    { 'valor': 'Alta', 'Puntaje': 5, 'Color': 'greenyellow' },
    { 'valor': 'Media', 'Puntaje': 4, 'Color': 'cornflowerblue' },
    { 'valor': 'Suficiente', 'Puntaje': 3, 'Color': 'yellow' },
    { 'valor': 'Baja', 'Puntaje': 2, 'Color': 'red' },
    { 'valor': 'Ninguna', 'Puntaje': 1, 'Color': 'gray' }
]

const comboMadurez = [
    { 'valor': 'Optimizado', 'Puntaje': 4, 'Color': 'greenyellow' },
    { 'valor': 'Definido', 'Puntaje': 3, 'Color': 'cornflowerblue' },
    { 'valor': 'Repetible', 'Puntaje': 2, 'Color': 'yellow' },
    { 'valor': 'Inicial', 'Puntaje': 1, 'Color': 'red' },
];

const comboPrioridad = [
    { 'valor': 'Alta', 'Puntaje': 4, 'Color': 'red' },
    { 'valor': 'Media', 'Puntaje': 3, 'Color': 'yellow' },
    { 'valor': 'Baja', 'Puntaje': 2, 'Color': 'cornflowerblue' },
    { 'valor': 'Ninguna', 'Puntaje': 1, 'Color': 'greenyellow' },
];

function ObtenerValorCombo(Opcion) {
    return Opcion.valor;
}

function ObtenerPuntajeCombo(Opcion) {
    return Opcion.Puntaje;
}

function ObtenerColorCombo(Opcion) {
    return Opcion.Color;
}

function ActualizarColor(Opcion, seleccionado) {
    return Opcion[seleccionado].Color;

}

class clsMatriz {

    constructor(jsonData) {
        let nropreguntas = jsonData.rows.length;
        var mat = jsonData.rows.slice();


        for (let i = 0; i < mat.length; i++) {
            mat[i].ITEM = jsonData.rows[i].ITEM;
            mat[i].CATEGORIA = 0;
            mat[i].COBERTURATI = 0;
            mat[i].MADUREZ = 0;
            mat[i].PRIORIDAD = 0;
        }


    }

}

function GenerarOpciones(combo, seleccionado, ident) {

    var OpcionSelect = combo.find(item => { return item.valor === seleccionado })
    let elcolor = OpcionSelect.Color;

    // let tabla = '<td><select class="form-select" ' + elcolor + ' form-select-lg mb-3" aria-label=".form-select-lg example"';

    let tabla = '<td><select id=' + ident + ' class="form-select mb-3" aria-label=".form-select-lg example"';
    tabla += 'style="background-color: ' + elcolor + '" onchange="ActualizarOpcion(this)">';

    //tabla += 'data-style= bg-success'; //"${OpcionSelect.Color}"'
    //tabla += 'aria-label=".form-select-lg example" id=${ident} onchange="">';// En este onchange, toca color y puntaje

    //class="form-select ${OpcionSelect.Color} form-select-lg mb-3" aria-label=".form-select-lg example"
    for (let k = 0; k < combo.length; k++) {
        var valoropcion = ObtenerValorCombo(combo[k]);
        if (valoropcion === seleccionado) {
            tabla += `<option class="bg-light" id="${ObtenerColorCombo(combo[k])}" value="${ObtenerPuntajeCombo(combo[k])}" selected>${valoropcion}</option>`;
        } else {
            tabla += `<option class="bg-light" id="${ObtenerColorCombo(combo[k])}" value="${ObtenerPuntajeCombo(combo[k])}">${valoropcion}</option>`;
        }
    } // for

    tabla += '</select></td>';
    return tabla;

}

function ActualizarOpcion(selectObject) {

    var combosel;
    var OpcionSelect;

    switch (selectObject.id) {
        case 'estrategico': combosel = comboValEst;
            break;
        case 'coberturati': combosel = comboCoberturaIT;
            break;
        case 'madurez': combosel = comboMadurez;
            break;
        case 'prioridad': combosel = comboPrioridad;
            break;
    }

    var OpcionSelect = combosel.find(element => (element.Puntaje === parseInt(selectObject.value)));

    selectObject.style.background = OpcionSelect.Color;


}

function generateTable(jsonData, comboE, comboCIT, comboMad, comboPrio) {

    //let matrespuestas = new clsMatriz(jsonData);

    let table = '<table id="tablaevaluacion" class="table table-bordered border-primary table-responsive">';
    // let table = '<table id="tablavalores" class="table table-bordered border-primary" width="50%">';

    table += '<tr>';
    table += '<th>Categoria</th>'
    table += '<th>Item</th>';
    table += '<th>Capacidades</th>';
    table += '<th>Descripción</th>';
    table += '<th>Valor Estratégico</th>';
    table += '<th>Cobertura Actual TI</th>';
    table += '<th>Madurez Organizacional</th>';
    table += '<th>Prioridad</th>';
    table += '</tr>';

    for (let i = 0; i < jsonData.rows.length; i++) {
        const row = jsonData.rows[i];
        table += '<tr>';
        table += `<td>${row.CATEGORIA}</td>`;
        table += `<td>${row.ITEM}</td>`;
        table += `<td>${row.CAPACIDADES}</td>`;
        table += `<td>${row.DESCRIPCION}</td>`;

        // Generar las Columnas de Opciones

        table += GenerarOpciones(comboE, row.ESTRATEGICO, 'estrategico');
        table += GenerarOpciones(comboCIT, row.COBERTURATI, 'coberturati');
        table += GenerarOpciones(comboMad, row.MADUREZ, 'madurez');
        table += GenerarOpciones(comboPrio, row.PRIORIDAD, 'prioridad');

        table += '</tr>';
    }

    table += '</table>';
    return table;
} // function

function GenerarResultados(tablahtml) {


    let tablaResultados =
    {
        'estrategico': { 'tilulo': 'Valor Estrategico', valor: 0 },
        'coberturati': { 'tilulo': 'Cobertrura TI', valor: 0 },
        'madurez': { 'tilulo': 'Madurez', valor: 0 },
        'prioridad': { 'tilulo': 'Prioridad', valor: 0 }
    }


    for (let i = 0; i < tablahtml.rows.length; i++) {
        for (let j = 0; j < tablahtml.rows[i].cells.length; j++) {
            const selectElement = tablahtml.rows[i].cells[j].querySelector('select');
            if (selectElement) {
                tablaResultados[selectElement.id].valor += parseInt(selectElement.value);
            }

        } // for j
    } //for 

    return generateTwoRowTableFromJSON(tablaResultados);
}

function generateTwoRowTableFromJSON(data) {
    const table = document.createElement('table');
    table.setAttribute('class', 'table table-bordered border-primary table-responsive');

    // Create table header (first row)
    const headerRow = document.createElement('tr');
    for (const fieldName in data) {
        const th = document.createElement('th');
        th.textContent = data[fieldName].tilulo;
        headerRow.appendChild(th);
    }

    // Create second row with field values
    const valueRow = document.createElement('tr');
    for (const fieldName in data) {
        const td = document.createElement('td');
        td.textContent = data[fieldName].valor;
        valueRow.appendChild(td);

    }

    // Append the rows to the table
    table.appendChild(headerRow);
    table.appendChild(valueRow);

    return table;
}


function TablaClienteLeido() {
    let tablita = `<table>`;
    tablita += `<tr><td><strong>Cliente :</strong>  </td> <td> ${jsonData.Cliente}</td></tr>`;
    tablita += `<tr><td><strong>Fecha   :</strong>  </td> <td> ${jsonData.Fecha}</td></tr>`;
    tablita += `<tr><td><strong>Versión :</strong>  </td> <td> ${jsonData.Version}</td></tr>`;
    tablita += `</table>`;
    return tablita
}

const generatedTable = generateTable(jsonData, comboValEst, comboCoberturaIT, comboMadurez, comboPrioridad);







