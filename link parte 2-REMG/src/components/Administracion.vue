<template>
  <div id="app">
   <!-- CONTENIDO PARA LA VISTA DE POST -->
  
      <div >
             <h3> Usted entro como usuario: "{{$route.params.id}}"</h3><br>
             <h1 >{{mensaje}}</h1>
        </div>

<footer>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <ul class="list-inline text-center">
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></li>
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></li>
                    <li class="list-inline-item"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github fa-stack-1x fa-inverse"></i></span></li>
                </ul>
                <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
            </div>
        </div>
    </div>
</footer>
  </div>
</template>

<script>

export default {
  name:"Idadmin",
  data () {
      return {
      mensaje:null,
  }
},
  methods: {
      cambiar(){
          
          if (this.$route.params.id=='simple')
            this.mensaje='Bienvenido a la página de Administración'
          else
             if (this.$route.params.id=='avanzado')
             this.mensaje='Esta página de administración está en construcción. Intente como administrador simple'
             else
              this.mensaje='Nivel de usuario no Existe'
      }
  },
created: function(){
        this.cambiar()
    }


}
</script>