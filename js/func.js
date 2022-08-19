console.log("开始加载插件JS");
injectCustomJs("js/inject.js");


//向页面注入自己的js
function injectCustomJs(jsPath) {
    var tempElement=document.createElement('script');
    tempElement.setAttribute('type','text/javascript');
    tempElement.src=chrome.extension.getURL(jsPath);
    tempElement.onload=function(){
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(tempElement);
}

//监听来自popup的事件
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    console.log(sender);
    console.log(request);
    
    if(request.flag!='NGATOOLS'){
        sendResponse({ret:'喵~喵？'});
        return;
    }
    if(request.cmd=='jmpFloor'){
        templateJSON=request;
        templateJSON.from='content';
        templateJSON.to='inject';
        window.postMessage(templateJSON,document.location.href);
    }
    else if(request.cmd=='hideFloor'){
        templateJSON=request;
        templateJSON.from='content';
        templateJSON.to='inject';
        window.postMessage(templateJSON,document.location.href);
    }
    else if(request.cmd=='showFloor'){
        templateJSON=request;
        templateJSON.from='content';
        templateJSON.to='inject';
        window.postMessage(templateJSON,document.location.href);
    }

    templateJSON.from='content';
    templateJSON.to='popup';
    sendResponse(templateJSON);
});

console.log("插件加载完成");