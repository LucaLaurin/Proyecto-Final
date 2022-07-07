let materias = {
    desarrolloweb: ["Perez","pedro","pepito","luca","lucia"],
    javascript: ["Salazar","pedro","juan","pepito"],
    react: ["Hernandez","pedro","juan","pepito","luca","lucia"],
    backend: ["Rodriguez","pedro","juan","pepito","luca","lucia"]
}


const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
    }
    else{
        personas.push(alumno);
        if (materia == "desarrolloweb"){
            materias = {
                desarrolloweb: personas,
                javascript: materias['javascript'],
                react: materias['react'],
                backend:materias['backend']
            }      
        }
        else if (materia == "javascript"){
            materias ={
                desarrolloweb: materias['desarrolloweb'],
                javascript: personas,
                react: materias['react'],
                backend:materias['backend']
            }

        }
        else if (materia == "react"){
            materias ={
                desarrolloweb: materias['desarrolloweb'],
                javascript: materia['javascript'],
                react: personas,
                backend:materias['backend']
            }
        }
        else if (materia == "backend"){
            materias = {
                desarrolloweb: materias['desarrolloweb'],
                javascript: materia['javascript'],
                react: materias['react'],
                backend: personas
            }
        }

        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);

    }
}

document.write(materias['desarrolloweb'] + "<br>")

inscribir("toto","desarrolloweb");
inscribir("mia","desarrolloweb");
inscribir("marcelo","desarrolloweb");
inscribir("toto","desarrolloweb");
inscribir("mia","desarrolloweb");
inscribir("marcelo","desarrolloweb");
inscribir("toto","desarrolloweb");
inscribir("mia","desarrolloweb");
inscribir("marcelo","desarrolloweb");
inscribir("toto","desarrolloweb");
inscribir("mia","desarrolloweb");
inscribir("marcelo","desarrolloweb");
inscribir("toto","desarrolloweb");

document.write("<br>" + materias['desarrolloweb']) 