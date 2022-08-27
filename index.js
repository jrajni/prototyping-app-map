
function sresultFunction(newFun){

for(let i=0;i<this.length;i++){
newFun(this[i],i,this)
}
return this
}

Array.prototype.sresultFunction=sresultFunction
let arr=[1,2,3]
