function omikujishow(){
    var omikuji=new Array("大吉","吉","中吉","小吉","末吉","凶","大凶");

    var number1=Math.random();
    var number2=number1*7;
    var number=Math.floor(number2);
    var message=omikuji[number];

    if(number == 0){
        document.getElementById("omikuji").style.color="red"
    }else if(number ==6){
        document.getElementById("omikuji").style.color="blue"
    }else{
        document.getElementById("omikuji").style.color="black"
    }
    var object=document.getElementById("omikuji");
    object.innerText=message;  
        
}
