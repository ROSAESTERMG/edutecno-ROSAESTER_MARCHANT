// JavaScript Document

//------------------CLASE IMPUESTOS -----------------//

export default class Impuestos{
constructor(monto,deducible){
    
this.monto = monto;
this.deducible = deducible;
}
/*    
get monto(){
return this._monto;
}
set monto(nuevo_monto){
this._monto = nuevo_monto;
}
    
get deducible(){
return this._deducible;
}
set deducible(nuevo_deducible){
this._deducible = nuevo_deducible;
}   
 */   
    
calcular(){
return (((this.monto * this.deducible)*21)100;
}
    
}


// (monto_bruto_anual − deducciones) * 21%)


    



