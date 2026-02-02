window.alert("Ingresa 3 notas por alumno para calcular el promedio final del curso. Las ponderaciones para la Nota 1, Nota 2 y Nota 3 son respectivamente 25%, 35% y 40%.");

var cantidad=parseFloat(prompt("Ingrese cantidad de alumnos:"));

notasCurso=0;
for (let i = 0; i < cantidad; i++){
    document.write()
    var contadorAlumno=i+1;
    var nota1=parseFloat(prompt("Para alumno "+ contadorAlumno +", ingrese Nota1:"));
    var nota2=parseFloat(prompt("Para alumno "+ contadorAlumno +", ingrese Nota2:"));
    var nota3=parseFloat(prompt("Para alumno "+ contadorAlumno +", ingrese Nota3:"));
PromedioAlumno=nota1*0.25 + nota2*0.35 + nota3*0.40;
notasCurso+=PromedioAlumno;
}
PromedioCurso=notasCurso/cantidad;
document.write("El promedio final del curso es: " + PromedioCurso);