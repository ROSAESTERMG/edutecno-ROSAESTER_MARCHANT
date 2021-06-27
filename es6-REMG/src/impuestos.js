// JavaScript Document

//------------------CLASE IMPUESTOS -----------------//

export default class Impuestos{
constructor(monto,deducible){
    
this._monto = monto;
get monto(){
return this._monto;
}
set monto(nuevo_monto){
this._monto = nuevo_monto;
}
    

this.deducible = deducible;
get deducible(){
return this._deducible;
}
set deducible(nuevo_deducible){
this._deducible = nuevo_deducible;
}   
    
    
calcular(){
return ((monto*deducible)*0,21);
}
}
}

// (monto_bruto_anual − deducciones) * 21%)


    



