<template>
  <div class="todo" align="center"><h1>RANDOM GIF CAT</h1>
    <div class="todo-container" align="center">
      <table width=200px align="center">
        <tr>
          <td with=100px align="right">
      TITULO </td>
      <td with=100px align="left">
        <input class="ingreso" type="text"  v-model="atit"/></td>
        </tr>
     <tr>
          <td with=100px align="right">FILTRO</td>
<td with=100px align="left">
  <select name="filtros" v-model="afil">
   <option  v-for="todo in filtro"  v-bind:value="todo">{{todo}}</option>
  </select>
</td>
</tr>
 <tr> 
   <td align="rigth">COLOR</td>
   <td align="left">
 <select name="color" v-model="acol">
   <option    v-for="todo in colores"  v-bind:value="todo.nombre_ing">{{todo.nombre}}</option>
  </select> 
  <div class="circulo"> </div></td>
 </tr>
<tr>
          <td with=100px align="right">
      TAMAÑO </td>
      <td with=100px align="left">
        <input class="ingreso" type="number" v-model="atam" /></td>
        </tr>
   </table>
     
     
    </div>
     <button @click="mostrar">Obtener mi Gatito</button>
    <div class="confondo" align="center" >
       <iframe id="miIframe" :src="nuevo" ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "gatitos",
  data() {
    return {
      filtro: ['blur','mono','sepia','negative','paint','pixel' ],
      colores: [
        {nombre:"Blanco",nombre_ing:"white"},
        {nombre:"Negro",nombre_ing:"black"},
        {nombre:"Naranjo",nombre_ing:"orange"},
        {nombre:"Rojo",nombre_ing:"red"},
        {nombre:"Amarillo",nombre_ing:"yellow"},
        {nombre:"Verde",nombre_ing:"green"},
        {nombre:"Café",nombre_ing:"maroon"},
        {nombre:"Gris",nombre_ing:"silver"},
        {nombre:"Violeta",nombre_ing:"purple"},
        {nombre:"Fucsia",nombre_ing:"fuchsia"},
        {nombre:"Verde CLaro",nombre_ing:"lime"},
        {nombre:"Azúl",nombre_ing:"blue"},
        {nombre:"Oro",nombre_ing:"gold"},
        {nombre:"Cyan",nombre_ing:"deepskyblue"},
      ],
      atit:"",
      acol:"",
      afil:"",
      atam:"",
      nuevo: "",
    };
  },

  methods: {
    mostrar() {
     this.nuevo = "https://cataas.com/cat/gif/says/"+this.atit+"?filter="+this.afil+"&color="+this.acol+"&size="+this.atam+"&type=or";
 
           },
  },
};
</script>

<style scoped>
.todo-container {
  background-color: #ecd3d3;
}
iframe { margin:0; padding:0; height:100%;  display:block; width:100%; border:none; }
.circulo {
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: red;

  padding:3%;
}
h1,h2,
h3 {
  color: rgb(0, 0, 0);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  
}
</style>
