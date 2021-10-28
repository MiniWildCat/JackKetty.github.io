/* 一、文本内容反爬*/
/*1.当使用复制功能时，无法复制。*/
window.onload = function(){
    document.oncopy = function(){
        event.returnValue=false;
    };
    // /*3.在选中网页元素时，会立即停止运行脚本*/
    document.onselectstart=function(){
        debugger;
    };


    /* 二、刷新页面反爬*/
    /*1.在打开开发者选项卡的情况下刷新，就会停止运行脚本*/
    (function anonymous() {
        debugger
    })();


    /* 三、鼠标或者键盘打开控制面板反爬*/
    /*1.禁止使用右键进行操作打开开发者选项*/
    document.oncontextmenu = function(){
        event.returnValue=false;
    };
    /*2.禁止使用F12键打开开发者选项*/
    document.onkeydown = function(){
        if (window.event && window.event.keyCode === 123){
            event.returnValue = false;
            return false;
        }
    };

};