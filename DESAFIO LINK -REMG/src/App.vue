<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/about">Sobre mi</router-link>|
      <router-link to="/contacto">Contato</router-link>|
      <router-link to="/post/Ultimo">Ultimo Post</router-link>|
       <router-link to="/rutas">Rutas</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}
</style>