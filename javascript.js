const oper = document.getElementById('op');
let sighn,val1='',val2='';
const equal = document.getElementById('eq');
//add
const add = function(a,b) {
    return a+b;
};
//substract
const subtract = function(a,b){
    return a-b;
};
//multiply
const multiply = function(a,b) {
    return a*b;
};
//devid
const devid = function(a,b){
    return a/b;
};

//clear function
const clearInput = function(){
    document.getElementById("input").textContent = "";
    val1='';
}
//delet function 
const clearDelet = function(){
    if(val1 === ''){
        document.getElementById("input").textContent +=0;
    }
    
}

//get the value of input
const getFieldValue= function(){
    let fieldValue = document.getElementById("input").value;
    return fieldValue.split("");
};
//wright the value whene btn clicked
const setValue = function(a){
    if(sighn === undefined){
        document.getElementById("input").textContent += a;
        val1+=a;
    }
    else{
        val2+=a;
    }
    

};
//opperato
function operators(a,b,op) {
        if(op=='+' && val2 !=''){
            let ad = add(a,b)
            document.getElementById("input").textContent = ad;
            val1=ad;
            val2='';
            sighn=undefined;
        }
        
        else if(op=='-'&&val2 !=''){
            let ad= subtract (a, b)
            document.getElementById("input").textContent = ad;
            val1=ad;
            val2=0;
            sighn=undefined;
        }
        else if(op=='×'&&val2 !=''){
            let ad=multiply (a, b)
            document.getElementById("input").textContent = ad;
            val1=ad;
            val2=0;
            sighn=undefined;
        } 
        else if(op=='÷'&&val2 !=''){
            let ad= devid (a, b)
            document.getElementById("input").textContent = ad;
            val1=ad;
            val2='';
            sighn=undefined;
        }
}
const opclicked= function(pmsd){
    sighn = pmsd;
}
equal.addEventListener('click',function al(){
    operators(parseFloat(val1),parseFloat(val2),sighn);
});