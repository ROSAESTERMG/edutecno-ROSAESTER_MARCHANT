<template>
  <div class="todo-list">
    <div class="todo-list-container" align="center">
      <h2>LISTA EN ARCHIVO SEPARADO APP.VUE</h2>

      <table class='table table-striped'>
          <thead class="thead-dark">
           <th scope="col">ID</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">APELLIDO</th>
              <th scope="col">RUT</th>
              <th scope="col">FEC. NAC.</th>
              <th scope="col">EDAD</th>
           
          </thead>
         <tbody>
            <tr v-for="(persona, index) in personas" :key="index">
              <th scope="row">{{ persona.id }}</th>
              <td >{{ persona.nombre }}</td>
              <td >{{ persona.apellido }}</td>
              <td >{{ persona.rut }}</td>
                <td >{{ persona.nacimiento }}</td>
              <td >{{ persona.edad }}</td>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reloj",
  data() {
    return {
      personas: [
{ id:1,nombre: 'Marcelo',apellido:'araya',rut:'1-1', nacimiento:'01-01-1969',edad:51},
{ id:2,nombre: 'José',apellido:'Casanova',rut:'2-2', nacimiento:'01-01-1972',edad:48 },
{ id:3,nombre: 'Roberto',apellido:'Ahumada',rut:'3-3', nacimiento:'01-01-1970',edad:50 },
]
     
    };
  },

 
};
</script>
