// JavaScript Document

//------------------CLASE IMPUESTOS -----------------//

export default class Impuestos{
constructor(monto,deducible){
    
this._monto = monto;
this.deducible = deducible;
}
    
get monto(){
return this._monto;
}
set monto(nuevo_monto){
this.monto = nuevo_monto;
}
    
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


// (monto_bruto_anual − deducciones) * 21%)


    



