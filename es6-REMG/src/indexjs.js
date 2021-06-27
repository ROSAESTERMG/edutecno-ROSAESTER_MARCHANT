// JavaScript Document

// JavaScript Document
var $texto = '';




//---------------------fin consultorio-----------------------------//






//----------------fin ----paciente----------------------------//

Consultorio.prototype.setAgregarPaciente = function (paciente_nuevo) {
  this.paciente.push(paciente_nuevo);
}

var paciente1 = new Paciente('Marcelo', 20, '111-1', 'ANEMIA');
var consultorio1 = new Consultorio('Arica', [paciente1]);




//----------- guardar pacientes ------------------//
const guardar_pacientes = () => {

  var n1 = document.getElementById('nombre').value;
  var m1 = parseInt(document.getElementById('monto').value);
  var d1 = parseInt(document.getElementById('deducible').value);
 

   let perro1 = new Perro('Pastor Aleman');
console.log(perro1.raza);
perro1.raza = 'Pastor Belga';
console.log(perro1.raza); 
    
    


  var impuestox = new Pers(m1,d1);
  persona1.setAgregarPersona(impuestox);

    
  document.getElementById("nombre").value = '';
  document.getElementById("monto").value = '';
  document.getElementById("deducible").value = '';
  alert('datos ingresados');
}


//----------- mostrar pacientes ------------------//
const mostrar_pacientes = () => {
  var divr = document.getElementById("div_mostrar")

  //var pac = [];
  var $i = 0;

 /*$.each(consultorio1.paciente, (index, value) => {

    pac = [$i][0] = index;
    pac = [$i][1] = value;
    $i++;

  });*/

  $texto = '<br><br><p ">-----------------  LISTADO DE PACIENTES -------------- </p>';

//  for ($i = 0; $i < consultorio1['paciente'].length; $i++) {
      for ($i = 0; $i < consultorio1.paciente.length; $i++) {
    //$texto += '<p>NOMBRE:' + consultorio1['paciente'][$i].nombre + ', EDAD:' + consultorio1['paciente'][$i].edad + ', RUT:';
     $texto += '<p>NOMBRE:' + consultorio1.paciente[$i].getNombre() + ', EDAD:' + consultorio1.paciente[$i].getEdad() + ', RUT:';   
   // $texto += consultorio1['paciente'][$i].rut + ', DIAGNOSTICO:' + consultorio1['paciente'][$i].diagnotico + '</p>';
        $texto += consultorio1.paciente[$i].getRut() + ', DIAGNOSTICO:' + consultorio1.paciente[$i].getDiag() + '</p>';
   console.log(consultorio1.paciente[$i].nombre);
  }

  document.getElementById("div_mostrar").innerHTML = $texto;
}


//--------------------- buscar paciente ---------------------//
const buscar_pacientes = () => {
    var abuscar = document.getElementById("nombre2_p").value
   // const resultado = consultorio1['paciente'].find(pac => pac.nombre === abuscar);
 const resultado = consultorio1.paciente.find(
    pac => pac.getNombre() === abuscar
  );
    if (resultado === undefined ){} 
    else
    {
        alert('paso '+resultado )
      $texto = '<br><br><p ">-----------------  PERSONA ENCONTRADA -------------- </p>';
     // $texto += resultado.nombre + ', EDAD:' + resultado.edad + ', RUT:' + resultado.rut + ', DIAGNOSTICO:' + resultado.diagnotico;
      $texto +=
      resultado.getNombre() +
      ", EDAD:" +
      resultado.getEdad() +
      ", RUT:" +
      resultado.getRut() +
      ", DIAGNOSTICO:" +
      resultado.getDiag();
      document.getElementById("p_buscar").innerHTML = $texto;
    }
}
