if (!titleBar) {
    function msg(text, duration, speed) {
        var box = document.createElement('div');
        Object.assign(box.style, {
            display: 'block',
            width: '175px',
            height: '33px',
            backgroundColor: 'rgb(45, 45, 45)',
            position: 'fixed',
            top: '50px',
            left: '50vw',
            zIndex: '200',
            textIndent: '10px',
            lineHeight: '35px',
            fontSize: '17px',
            color: 'rgb(194, 131, 252)',
            transition: 'margin-down 2s, color 1s',
            opacity: 1
        });
        box.textContent = text;
        document.body.append(box);
        
        setTimeout(function fadeOut() {
            if (box.style.opacity < 0.02) {
                box.remove();
            } else {
                box.style.opacity -= 0.02;
                setTimeout(()=>{
                    requestAnimationFrame(fadeOut);
                }, 5);
            }
        }, duration ? duration : 200);
    }
    msg('Made by Pye_1', 1000)
    var titleBar = document.createElement('div');
    Object.assign(titleBar.style, {
        display: 'block',
        width: '200px',
        height: '35px',
        backgroundColor: 'rgb(45, 45, 45)',
        position: 'fixed',
        top: '50px',
        left: '50px',
        zIndex: '200',
        textIndent: '10px',
        lineHeight: '35px',
        fontSize: '17px',
        color: 'rgb(194, 131, 252)'
    });
    titleBar.textContent = 'Bookmarklet GUI';
    document.body.append(titleBar);

    var closeButton = document.createElement('div');
    Object.assign(closeButton.style, {
        display: 'block',
        width: '25px',
        height: '25px',
        position: 'fixed',
        top: '55px',
        left: '220px',
        zIndex: '202',
        fontSize: '30px',
        textIndent: '5px',
        lineHeight: '20px',
        color: 'rgb(194, 131, 252)'
    });
    closeButton.textContent = 'x';
    titleBar.appendChild(closeButton);

    var toggleButton = document.createElement('div');
    Object.assign(toggleButton.style, {
        display: 'block',
        // backgroundColor: 'rgba(255, 0, 0, 0.4)',
        width: '25px',
        height: '27px',
        position: 'fixed',
        top: '54px',
        left: '195px',
        zIndex: '202',
        fontSize: '25px',
        textIndent: '5px',
        lineHeight: '23px',
        color: 'rgb(194, 131, 252)'
    });
    toggleButton.textContent = '▲';
    titleBar.appendChild(toggleButton);
    let expanded = true;

    var menu = document.createElement('div');
    Object.assign(menu.style, {
        display: 'block',
        width: '200px',
        height: '500px',
        backgroundColor: 'rgba(119, 75, 163, 0.7)',
        position: 'fixed',
        top: '85px',
        left: '50px',
        zIndex: '200',
        textIndent: '10px',
        lineHeight: '35px',
        fontSize: '25px',
        color: '#fff'
    });
    titleBar.appendChild(menu);

    const buttonCSS = {
        display: 'block',
        width: '170px',
        height: '30px',
        backgroundColor: 'rgb(45, 45, 45)',
        position: 'fixed',
        left: '65px',
        zIndex: '200',
        textIndent: '10px',
        lineHeight: '30px',
        fontSize: '15px',
        color: 'rgb(194, 131, 252)'
    };

    var funnyCrash = document.createElement('div');
    Object.assign(funnyCrash.style, buttonCSS);
    funnyCrash.style.top = '100px';
    funnyCrash.textContent = 'Funny Crash';
    menu.appendChild(funnyCrash);

    var historyFlood = document.createElement('div');
    Object.assign(historyFlood.style, buttonCSS);
    historyFlood.style.top = '145px';
    historyFlood.textContent = 'Flood history';
    menu.appendChild(historyFlood);

    var eruda = document.createElement('div');
    Object.assign(eruda.style, buttonCSS);
    eruda.style.top = '190px';
    eruda.textContent = 'Eruda';
    menu.appendChild(eruda);

    var edpuzzle = document.createElement('div');
    Object.assign(edpuzzle.style, buttonCSS);
    edpuzzle.style.top = '235px';
    edpuzzle.textContent = 'Edpuzzle GUI';
    menu.appendChild(edpuzzle);

    var cookieRemover = document.createElement('div');
    Object.assign(cookieRemover.style, buttonCSS);
    cookieRemover.style.top = '280px';
    cookieRemover.textContent = 'Remove cookies';
    menu.appendChild(cookieRemover);

    var passLook = document.createElement('div');
    Object.assign(passLook.style, buttonCSS);
    passLook.style.top = '325px';
    passLook.textContent = 'Password peek';
    menu.appendChild(passLook);

    var ranChar = document.createElement('div');
    Object.assign(ranChar.style, buttonCSS);
    ranChar.style.top = '370px';
    ranChar.textContent = 'Freaky text';
    menu.appendChild(ranChar);

    var kh = document.createElement('div');
    Object.assign(kh.style, buttonCSS);
    kh.style.top = '415px';
    kh.textContent = 'Katamari hack';
    menu.appendChild(kh);

    function toggle() {
        if (expanded) {
            expanded = false;
            menu.style.display = 'none';
            toggleButton.textContent = '▼';
        } else {
            menu.style.display = 'block';
            toggleButton.textContent = '▲';
            expanded = true;
        };
    }
    /*
    var _=setInterval(function(){let text=document.evaluate('//text()[normalize-space(.)!=""]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(let i=0;i<text.snapshotLength;i++){let node=text.snapshotItem(i);let chars=node.textContent.split('');let randomized=chars.map(c=>{return String.fromCharCode(Math.floor(Math.random() * (0x0000 - 0x024F) + 0x0020));});node.textContent = randomized.join('');console.log(String.fromCharCode(Math.floor(Math.random() * (0x0000 - 0x024F) + 0x0020)))}},100)
    */
    addEventListener("click", function (e) {
        if (e.target == closeButton) titleBar.remove();
        if (e.target == toggleButton) toggle();
        if (e.target == edpuzzle) { fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js").then(r => r.text()).then(r => eval(r)) };
        //if (e.target == funnyCrash) { document.body.innerHTML='<h1>Something very funny is happening!!</h1>';document.documentElement.requestFullscreen();setTimeout(function(){while(1)window.location.reload(1)},200);};
        if (e.target == historyFlood) { var num=prompt("How Times Do You Want This Page To Show Up In your History?\Developed By:  Schoolcheats on  YT");done=false;x=window.location.href;for (var i=1; i<=num; i++){history.pushState(0, 0, i==num?x:i.toString());if(i==num){done=true}}if(done===true){alert("Flooding Successful!\n "+window.location.href+" \nIs Now In Your History "+num+(num==1?" time.":" Times. \nDeveloped By: Schoolcheats on  YT"))}};
        if (e.target == eruda) { (function () { var script = document.createElement('script'); script.src='//cdn.jsdelivr.net/npm/eruda'; document.body.appendChild(script); script.onload = function () { eruda.init() } })(); };
        if (e.target == cookieRemover) { void((function(){var a,b,c,e,f;f=0;a=document.cookie.split("; ");for(e=0;e<a.length&&a[e];e++){f++;for(b="."+location.host;b;b=b.replace(/^(?:%5C.|[^%5C.]+)/,"")){for(c=location.pathname;c;c=c.replace(/.$/,"")){document.cookie=(a[e]+"; domain="+b+"; path="+c+"; expires="+new Date((new Date()).getTime()-1e11).toGMTString());}}}alert("Expired "+f+" cookies");})()) }
        if (e.target == passLook) { Array.prototype.slice.call(document.querySelectorAll("input[type='password']")).map(function(el){el.setAttribute('type','text')}) }
        if (e.target == ranChar) { titleBar.remove();var _=setInterval(function(){let text=document.evaluate('//text()[normalize-space(.)!=""]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);for(let i=0;i<text.snapshotLength;i++){let node=text.snapshotItem(i);let chars=node.textContent.split('');let randomized=chars.map(c=>{return String.fromCharCode(Math.floor(Math.random()*(0x0000-0x024F)+0x0020));});node.textContent=randomized.join('');console.log(String.fromCharCode(Math.floor(Math.random()*(0x0000-0x024F)+0x0020)))}},100) }
        if (e.target == kh) { var i,s,ss=['http://kathack.com/js/kh.js','http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js'];for(i=0;i!=ss.length;i++){s=document.createElement('script');s.src=ss[i];document.body.appendChild(s);}void(0); }
    })
} else {
    msg('GUI already running!');
};