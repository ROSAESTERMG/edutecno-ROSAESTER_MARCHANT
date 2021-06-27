// JavaScript Document

//------------------CLASE IMPUESTOS -----------------//

class Impuestos{
constructor(monto,deducible){
 
//--------------monto--------------    
this._monto = monto;
}
get monto(){
return this._monto;
}
set monto(nuevo_monto){
this._monto = nuevo_monto;
}
    
//--------------deducible--------------
this.deducible = deducible;
}
get deducible(){
return this._deducible;
}
set deducible(nuevo_deducible){
this._deducible = nuevo_deducible;
}   
    
    
}

