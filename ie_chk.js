(function(){
    var userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    //IE向けの記述
    var msg = '<div style="background-color: rgb(0,0,255); width: 100vw;height: 100vh; position:fixed;top:0;left: 0;color:white;z-index:1000;">' +
    '<div style="position:fixed;top:25%;left:50%; transform:translate(-50%);">'+
    '<h1  style="font-size:30px">このサイトはInternet Explorer（IE）非対応です。</h1>'+
    '<p style="text-align: center;;font-size: 21px">他のブラウザーで閲覧してください。</p>'+
    '<p style="margin:20px auto;font-size: 16px;text-align: center;">当サイト対応のブラウザは下記よりダウンロードできます。</p>'+     
    '<p style="text-align:center; margin:15px 0 ;font-size: 20px;"><a href="https://www.microsoft.com/ja-jp/edge"  style="color:white">Microsoft Edge</a></p>'+  
    '<p style="text-align:center; margin:15px 0 ;font-size: 20px;"><a href="https://www.google.com/chrome/" style="color:white">Google Chrome</a></p>'+  
    '<p style="text-align:center; margin:15px 0 ;font-size: 20px;"><a href="https://www.mozilla.org/ja/firefox/new/" style="color:white">MMozilla Firefox</a></p>'+  
    '</ul>'+  
    '</div>'+  
    '</div>';
    document.write( msg);
    } 
})();