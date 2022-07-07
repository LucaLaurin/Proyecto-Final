const materias = {
    desarrolloweb: ["Fede","lucia","maxi","luca","camila"],
    javascript: ["Ivan","lucia","juan","maxi","luca"],
    react: ["Franco","lucia","juan","maxi","camila"],
    backend: ["Julio","lucia","juan","maxi","luca","camila"]
}

const obtenerInformacion = (materia)=>{
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);
    if (informacion !== false) {
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>`);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style='color:blue'>
    ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
    <br><br>`;

}


mostrarInformacion("desarrolloweb");
mostrarInformacion("javascript");
mostrarInformacion("react");
mostrarInformacion("backend");


document.write(cantidadDeClases("lucia"))
document.write(cantidadDeClases("luca"))
document.write(cantidadDeClases("camila"))