var templateJSON={
    flag:'NGATOOLS',//来自小工具的消息标识
    text:'文本内容',
    cmd:'getAward',//将要执行的功能
    from:'background',
    to:'',
    parameter:{//参数
        floor:1
    }
}

function $(a) {
    return document.getElementById(a)
}

window.onload=function(){
    console.log("window.onload");
    $('BTN_jmpFloor').addEventListener('click',function(){
        templateJSON.cmd='jmpFloor';
        templateJSON.parameter.floor=$('EB_jmpFloor_floor').value;
        sendMessageToContentSciption(templateJSON);
    });

    $('BTN_hideFloor').addEventListener('click',function(){
        templateJSON.cmd='hideFloor';
        templateJSON.parameter.floor=$('EB_hideFloor_floor').value;
        sendMessageToContentSciption(templateJSON);
    });

    $('BTN_showFloor').addEventListener('click',function(){
        templateJSON.cmd='showFloor';
        templateJSON.parameter.floor=$('EB_showFloor_floor').value;
        sendMessageToContentSciption(templateJSON);
    });
};
function sendMessageToContentSciption(message,callback){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,message,function(response){
            if(callback){
                callback(response);
            }
            else{
                console.log("发送消息的回调:",response);
            }
        });
    });
}