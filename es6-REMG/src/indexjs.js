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

  var an = document.getElementById('nombre_p').value;
  var ae = parseInt(document.getElementById('edad_p').value);
  var ar = document.getElementById('rut_p').value;
  var ad = document.getElementById('diag_p').value;
  if (an.length == 0) {
    alert('Nombre Vacío');
    document.getElementById("nombre_p").focus();
    return;
  }


  if (isNaN(ae) || ae < 0) {
    alert('Edad debe ser mayor o igual a 0');
    document.getElementById("edad_p").focus();
    return;
  }
  if (ar.length == 0) {
    alert('Rut Vacío');
    document.getElementById("rut_p").focus();
    return;
  }
  if (ad.length == 0) {
    alert('Diagnóstico Vacío');
    document.getElementById("diag_p").focus();
    return;
  }

  var pacienteX = new Paciente(an, ae, ar, ad);
  consultorio1.setAgregarPaciente(pacienteX);
//var new Consultorio('Arica', [paciente1]);
    
  document.getElementById("nombre_p").value = '';
  document.getElementById("edad_p").value = '';
  document.getElementById("rut_p").value = '';
  document.getElementById("diag_p").value = '';
  alert('paciente ingresado');
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
