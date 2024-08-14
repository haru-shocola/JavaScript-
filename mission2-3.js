//functionは関数を今から書きますよという意味。datetimeshow()は名前。//
function datetimeshow(){
    var datetime=new Date();
    //これだけだと表示が→　Fri Apr 09 2021 09:53:10 GMT+0900 (日本標準時)になるから分かりやすくするように以下の指定が必要である//

    var year=datetime.getFullYear();
    var month=datetime.getMonth() + 1;
    //※月は1月が0、12月が11と0~11で返ってくるので、調整が必要。※曜日はgetDay()で取り出しますが、0~6になるので注意//
    var day=datetime.getDate();
    var hour=datetime.getHours();
    var minute=datetime.getMinutes();
    var second=datetime.getSeconds();

    var datetimeview=year +"年"+ month + "月" + day +"日"+ hour +"時"+ minute +  "分"  + second+"秒";

    var object=document.getElementById("datetime");
    object.innerText=datetimeview;
    //divのidの中のテキストを表示させるのはdatetimeviewですよということ//
}