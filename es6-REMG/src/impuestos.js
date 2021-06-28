// JavaScript Document

//------------------CLASE IMPUESTOS -----------------//

export default class Impuestos{
constructor(monto,deducible){
    
this.monto = monto;
this.deducible = deducible;
}
 
    
calcular(){
return (((this.monto * this.deducible)*21)/100);
}
    
}



    



