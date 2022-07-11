const materias = {
	desarrolloweb: [90,6,3,"desarrolloweb"],
	javascript: [84,8,2,"javascript"],
	react: [92,8,4,"react"],
	backend: [96,8,4,"backend"],
	diseño: [91,6,3,"diseño"],
	programacion: [79,7,4,"programacion"],
	sql: [75,9,2,"sql"],
	uxui: [98,9,1,"ux/ui"],
	phyton: [100,10,4,"phyton"]
}

const aprobo = ()=>{
    for (materia in materias){

        let asistencias = materias[materia][0];
		let promedio = materias[materia][1];
		let trabajos = materias[materia][2]

        console.log(materias[materia][3]);

        if (asistencias >= 90) {
			console.log("%c   Asistencias en orden","color:green");
		} else {
			console.log("%c   Falta de Asistencias","color:red");
		}

        if (promedio >= 7) {
			console.log("%c   Promedio en orden","color:green");
		} else {
			console.log("%c   Promedio desaprobado","color:red");
		}

        if (trabajos >= 3) {
			console.log("%c   Trabajos prácticos en Orden","color:green");
		} else {
			console.log("%c   Faltan trabajos prácticos","color:red");
		}
    }
}
aprobo()