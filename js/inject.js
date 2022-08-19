function jmpFloor(parameter){
    //#post1strow19
    var page = Math.floor(parameter.floor/20)+1;
    var url = new URL(document.URL);
    if(page != 1){
        url.searchParams.set('page',page);
    }
    url = url.toString();
    var index = url.indexOf('#');
    if(index!=-1){
        url=url.substring(0,index);
    }
    url+='#post1strow'+parameter.floor;
    console.log("URL:",url);
    document.location=url;
}
function hideFloor(parameter){
    $('post1strow'+parameter.floor).style.display='none';
}
function showFloor(parameter){
    $('post1strow'+parameter.floor).style.display='block';
}

function sendMessageToContent(value){
    window.postMessage({msg:'???'+value});
}
//监听来自content的事件
window.addEventListener("message",function(msg){
    console.log(msg);
    //只接受来自当前域名的消息
    if(msg.data.from=='content'){
        //只接收来自content的消息
        console.log(msg.data);
        eval(msg.data.cmd)(msg.data.parameter);
    }
},false);