<template>
  <div class="todo" align="center">
    <div class="todo-container" align="center">
      <img src="src/imagenes/logo.jpg" height="100" alt="" />
      <h2>POKEGUIA</h2>
      Nombre <input class="ingreso" type="text" v-model="nuevo" />
      <button @click="mostrar">Buscar</button>
      <br />
      <br />
    </div>
    <div class="confondo">
      <h3>MOVIMIENTOS</h3>
      <table align="center">
        <tr v-for="(todo, index) in movimientos" :key="index">
          <td class="tabla">
            {{ todo }}
          </td>
        </tr>
      </table>

      <h3>HABILIDADES</h3>
      <table align="center">
        <tr v-for="(todo, index) in habilidades" :key="index">
          <td class="tabla">
            {{ todo }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "poke",
  data() {
    return {
      habilidades: [],
      movimientos: [],
      nuevo: "",
    };
  },

  methods: {
    mostrar() {
      var resultado = "";
      var _this = this;
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.nuevo)
        .then((response) => response.json())
        .then((data) => {
          let nuevoarray = data.moves[0];
          let nuevoarray2 = data.abilities;
          console.log(nuevoarray2);
          //-------------------------------MOVIMIENTOS
          for (const property in nuevoarray.move) {
            if (property == "name") resultado = nuevoarray.move[property];
          }
          _this.movimientos.push(resultado);
          //-------------------------------HABILIDADES
          console.log("largo: " + nuevoarray2.length);
          var i = 0;
          for (const property in nuevoarray2) {
            let nuevoarray3 = nuevoarray2[property];
            resultado = nuevoarray3.ability["name"];
            _this.habilidades.push(resultado);
            i = i + 1;
          }
        })
        .catch(function() {
          alert("NOMBRE NO EXISTE");
        });
    },
  },
};
</script>

<style scoped>
.todo-container {
  background-color: #e6e6e6;
}

.tabla {
  color: white;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
}
h2,
h3 {
  color: rgb(18, 99, 190);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 22px;
}
</style>
