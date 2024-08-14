var object=document.getElementById("greeting")
//IDの要素を取得して画面に表示させてください//
var text=object.innerText;
//IDの中に書いてあるテキストを取得する//
alert(text);
//それをアラートで表示しましょう//

var object=document.getElementById("greeting1");
var text=prompt("挨拶を入力してください");
object.innerText=text;