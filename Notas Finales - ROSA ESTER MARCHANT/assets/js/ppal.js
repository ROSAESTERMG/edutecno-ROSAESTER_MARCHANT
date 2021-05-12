// JavaScript Document


//-----nombre
var $nombre='';       
while(true)
{
    var $nombre = prompt("Ingrese \"Nombre Completo\" ") 
    if ($nombre === '' || $nombre === null){
        alert("Por favor ingrese un Nombre válido. *** Escriba SALIR para salir ***")
    }
    else {
        break;
    }
}


if ($nombre !='SALIR')
{
		//-----carrera
		var $carrera='';       
		while(true)
		{

		   var $carrera = prompt("Ingrese \"Nombre de Carrera\" ")  
			if ($carrera === '' || $carrera === null){
				alert("Por favor ingrese un Nombre de Carrera válido")
			}
			else {

				break;
			}

		}


			/*--------------inicio tabla datos alumno------------------------*/
			document.write("<div class='container'>")
			document.write("<span class='titulo'>NOTAS FINALES</span>")


			document.write("<table width='400' border='0' cellspacing='28'>")
			  document.write("<tbody>")
			   document.write(" <tr>")
				document.write("  <td   width='30%'>Nombre:</td>")
				document.write("  <td class='titulo3'>"+$nombre+"</td>")
			   document.write(" </tr>")
			   document.write(" <tr>")
				document.write("  <td   width='30%'>Carrera:</td>")
			   document.write("   <td class='titulo3'>"+$carrera+"</td>")
			   document.write(" </tr>")
			  document.write("</tbody>")
			document.write("</table>")
			//---------------------


		/*--------------inicio tabla notas alumno------------------------*/

		document.write("<br><table width='100%' class='table'>")
		document.write("<tr>")
		document.write("<th width='40%' align='center'>RAMOS </th>")
		document.write("<th width='15%' align='center'>NOTA 1 </th>")
		document.write("<th width='15%' align='center'>NOTA 2 </th>")
		document.write("<th width='15%' align='center'>NOTA 3 </th>")
		document.write("<th width='15%' align='center'>PROMEDIO</th>")
		document.write("</tr>")

		//-------ciclo for ramos y notas e ir  construyendo las rows de la tabla de notas con sus colores---

		let $ramos = ['','',''];
		let $notas = [[0, 0, 0],[0, 0, 0], [0, 0, 0]];
		//------------ramos----------------
		for (var i = 0; i < 3; i++) 
		{	
			
			var $ramo1_1='';
			while(true)
			{
  				var $ramo1_1 = prompt("Ingrese Nombre Ramo ["+(i+1)+"]") 
				if ($ramo1_1 === '' || $ramo1_1 === null)
				{
					alert("Por favor ingrese un Nombre de Ramo ["+(i+1)+"] válido")
				}
				else 
				{		
						if (i==0)
							{
								document.write("<tr>")
							}
						$ramos[i] = $ramo1_1;	
						document.write("<td class='ramos' >"+(i+1)+" "+$ramos[i]+"</td>")
					
					

						//--------- pide las 3 notas del ramo --------
						for (var ii = 0; ii < 3; ii++) 
						{   document.write("<td align='center' class='notas'>")
						 
							if (i==2 && ii==2)
								{
									document.write("-")
									break
								}
						 	else
						 	{
								var $nota_1=0;
								while(true)
								{
									var $nota_1 = prompt("i:"+i+", ii:"+ii+" Ramo  ***"+$ramos[i] +"*** Ingrese  Nota "+(ii+1)+" (de 1 a 7)") 
									$nota_1=parseInt($nota_1)
									if ($nota_1 >=1 && $nota_1<= 7)
									{			if ($nota_1<4) 
													{ document.write("<span class='nota_roja'>")}
												else {document.write("<span class='nota_azul'>")}
													$notas[i][ii] = $nota_1;	
												document.write($notas[i][ii]+"<\span></td>")
												break;
									}
									else 
									{
												alert("Por favor ingrese Nota [\""+(i+1)+"\"] válida de 1 a 7")
													
									}							
									
								}
						 	  }
						  	document.write("</td>")
							
							} //fin for notas
				
							document.write("<td class='promedio'>")
							if (i==2 )	
							{
								document.write("-")
								var $nota_falta=(($notas[2][0]+$notas[2][1])/3)
								$nota_falta=(4-$nota_falta)*3


							}
							else
							{	    var $nota_prom=0
								   $nota_prom=(($notas[i][0]+$notas[i][1]+$notas[i][2])/3)
									document.write(  $nota_prom.toPrecision(2))
							}
							document.write("</td>")
							document.write("</tr>") 
							if (i==2)
								{
									document.write("<tr >") 
									document.write("<td colspan='5'class='titulo3'>")
									document.write("Para aprobar el ramo **"+$ramos[2]);
									document.write("** con nota mayor o igual a 4, debe obtener una nota "+$nota_falta+" como minímo en la nota 3")
									document.write("</td>")
									document.write("</tr>") 
									document.write("</table>") 
								}
							break
				}
				
			}
			
		}
		
}
else
	{
		
		document.write("<div class='alert alert-primary' role='alert'>")
 document.write(" Acaba de salir del sistema de notas!")
document.write("</div>")
	}





