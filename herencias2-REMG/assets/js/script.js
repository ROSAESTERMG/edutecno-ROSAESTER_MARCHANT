var texto='';
var arraymusica=['0EaZZvi0Hrc','-yN95PUWYUo','UqSGG60Txuo'];
var arraypelicula=['zNd-ltmGCsw','E4uFhSDbvOk','WxqEBI2kY0o','tPFnJ6aBrnY'];
var arrayserie=['_Loq6OnPWWU','rjzzHbcmezc','g5RvP1YDB0Y','z_XmlVjkXrY'];  


function getRandom(){
  return Math.random() * (3 - 0);
}


//-------multimedia-----------------//
class Multimedia {
  constructor(url) {
    this._url = url;
   
  }
  get url() {
    return this._url;
  }
  set url(url) {
    this._url = nuevo_url;
  }
  setinicio() {
  return `Video Reproduciendose...`;
  }
}

//--------------Reproductor------
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url)
    this._id = id;
    
  }

  get id() {
    return this._id
  }
  set id(nuevo_id) {
    this._id = nuevo_ido;
  }
  
    
  setinicio(indice, indice2,tiempo) {
   document.getElementById('f_'+this.id).src+='?start='+tiempo;  
console.log(document.getElementById('f_'+this.id).src)
 if ( indice2=='b1')
  document.getElementById(indice2).innerHTML ='Selección Nº '+indice+' de Música';
  
else
if ( indice2=='b2')
  document.getElementById(indice2).innerHTML ='Selección Nº '+indice+' de Películas';
 
else 
    if ( indice2=='b3')
  document.getElementById(indice2).innerHTML ='Selección Nº '+indice+' de Documentales';
  }
    
playMultimedia() {
   console.log(this.id)
    texto='<iframe id="f_'+this.id+'" width="560" height="315"  src="https://www.youtube.com/embed/'+this.url+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  '
    document.getElementById(this.id).innerHTML = texto
    
  }
}

  //    
//------------------------------------------
function mostrar_1() {
 let elm = document.getElementById('collapseOne');
if(elm.className === 'collapse'){
    document.getElementById('peliculas1').innerHTML =''
    document.getElementById('series1').innerHTML =''
    var indice=parseInt(getRandom())
    console.log('index: '+indice)
    const video = new Reproductor(arraymusica[indice],'musica1');
       video.playMultimedia();
       video.setinicio(indice+1,'b1',399)  
    
}
    else 
        {
        document.getElementById('b1').innerHTML ='Selección de Música';}
}

 //------------------------------------------
function mostrar_2() {
 let elm = document.getElementById('collapseTwo');
if(elm.className === 'collapse'){
    document.getElementById('musica1').innerHTML =''
    document.getElementById('series1').innerHTML =''
    var indice=parseInt(getRandom())
    console.log('index: '+indice)
    const video = new Reproductor(arraypelicula[indice],'peliculas1');
       video.playMultimedia();
       video.setinicio(indice+1,'b2',399)  
   
}
    else 
        {
        document.getElementById('b2').innerHTML ='Selección de Películas';}
} 

//------------------------------------------
function mostrar_3() {
 let elm = document.getElementById('collapseThree');
if(elm.className === 'collapse'){
    document.getElementById('peliculas1').innerHTML =''
    document.getElementById('musica1').innerHTML =''
    var indice=parseInt(getRandom())
    console.log('index: '+indice)
    const video = new Reproductor(arrayserie[indice],'series1');
       video.playMultimedia();
       video.setinicio(indice+1,'b3',399)  
   
}
    else 
        {
        document.getElementById('b3').innerHTML ='Selección de Documentales';}
}