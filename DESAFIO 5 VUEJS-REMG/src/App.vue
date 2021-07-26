<template>
  <div class="todo-list">
    <div class="todo-list-container" align="center">
      <h2>Seleccione Cuenta Regresiva</h2>

      <table align="center">
        <tbody>
          <tr v-for="(todo, index) in todos" :key="index">
            <th scope="row">
              <button type="button" v-on:click="cambiar(todo)">
                {{ todo }} Segundos
              </button>
            </th>
          </tr>
        </tbody>
      </table>
      <h2>{{ countdown }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reloj",
  data() {
    return {
      todos: [3, 6, 9],
      countdown: null,
    };
  },

  methods: {
    cambiar(atodo) {
      this.countdown = atodo;
      if (this.countdown >= 0) {
        this.interval = setInterval(() => {
          if (this.countdown === 0) {
            this.countdown = null;
            clearInterval(this.interval);
          } else {
            console.log(this.countdown);
            this.countdown -= 1;
          }
        }, 1000);
      } else {
        alert("no tiene");
      }
    },
  },
};
</script>
