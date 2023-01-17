function typenumber(ctrl){
   let textbox = document.getElementById("demo");
   let value = textbox.value;
   if(ctrl.innerText == "."){
    if(value.indexOf(".") != -1)
        return;
   }
   let number = value + ctrl.innerText;
   textbox.value = number;
}
// function typenumber1(){
//     // let number = ".";
//     document.getElementById("demo1").value = ".";
// }
// function typenumber2(){
//     document.getElementById("demo").value += 8;
// }
// function typenumber3(){
//     document.getElementById("demo").value += 7;
// }
// function typenumber4(){
//     document.getElementById("demo").value += 6;
// }
// function typenumber5(){
//     document.getElementById("demo").value += 5;
// }
// function typenumber6(){
//     document.getElementById("demo").value += 4;
// }
// function typenumber7(){
//     document.getElementById("demo").value += 3;
// }
// function typenumber8(){
//     document.getElementById("demo").value += 2;
// }
// function typenumber9(){
//     document.getElementById("demo").value += 1;
// }
// function typenumber10(){
//     document.getElementById("demo").value += ".";
// }
// function typenumber11(){
//     document.getElementById("demo").value += 0;
// }
// function typenumber12(){
//     document.getElementById("demo").value += "=";
// }
// function typenumber13(){
//     document.getElementById("demo").value += "+" ;
// }
// function typenumber14(){
//     document.getElementById("demo").value += "/";
// }
// function typenumber15(){
//     document.getElementById("demo").value += "x" ;
// }
function clearall(){
    document.getElementById("demo").value = "" ;
    document.getElementById("demo1").value = "" ;
    operator = "";

}
function clearone(){
    let textbox = document.getElementById("demo");
    let text = textbox.value;
    let length = text.length;
    if(length > 0){
        let newtext = text.slice(0, length-1);
        textbox.value = newtext;
    }
}

function operation(ctrl){
    let textbox = document.getElementById("demo");
    let texthistory = document.getElementById("demo1");
    texthistory.value = textbox.value;
    textbox.value = "";
   

    operator = ctrl.innerText;
}

function calculate(){
    let textbox = document.getElementById("demo");
    let texthistory = document.getElementById("demo1");

    let no1 = Number(texthistory.value);
    let no2 = Number(textbox.value);

    let answer = 0;
    display = " ";
    display = texthistory.value.concat(operator,textbox.value);

    if( operator == "+")
    {
        answer = no1 + no2;
        // display = no1 + " + " + no2;
    }
    else if( operator == "-")
    {
        answer = no1 - no2;
        // display = no1 + " - " + no2;
    }
    else if( operator == "x")
    {
        answer = no1 * no2;
        // display = no1 + " x " + no2;
    }
    if( operator == "/")
    {
        answer = no1 / no2;
        // display = no1 + " / " + no2;
    }
    textbox.value = answer;
    texthistory.value = display;
}


    
// function typenumber18(){
//     document.getElementById("demo").value += "clear" ;
// }
