window.onload = ()=>{
    window.addEventListener("orientationchange", function(event) {
        if(window.screen.width < window.screen.height){
            document.head.getElementsByTagName('link')[0].setAttribute('href', './src/mobile-main.css')
        } else {
            document.head.getElementsByTagName('link')[0].setAttribute('href', './src/main.css')
        }
    })
    if(window.screen.width < window.screen.height){
        document.head.getElementsByTagName('link')[0].setAttribute('href', './src/mobile-main.css')
    }
}

function tab(name){
    var href;
    switch (name) {
        case 'fnfns':
            href = 'fnf/note-swapper'; break;
        case 'trl':
            href = '../bots/toralin'
    }
    location.href = href
}