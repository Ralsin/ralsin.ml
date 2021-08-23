var am = false;

function href(page){
    switch (page){
        case 'test': location.href='https://ralsin.github.io/fnf/note-swapper'; break;
        case 'github': location.href='https://github.com/Ralsin'; break;
    }
}

function scrollDown(){
    document.getElementById('arrow').setAttribute('style', 'transform: rotate(180deg)');
    document.getElementById('yes').setAttribute('style', 'background-position: 0vw -100vh');
    document.getElementsByClassName('scroll')[0].setAttribute('onclick', 'scrollUp()');
    document.getElementsByClassName('scrollB')[0].childNodes[0].nodeValue = 'Up';
    document.getElementsByClassName('logo')[0].setAttribute('style', 'margin-top: -30vh');
    document.getElementsByClassName('buttondiv')[0].setAttribute('style', 'margin-top: -30vh');
    document.getElementsByClassName('buttondiv')[1].setAttribute('style', 'margin-top: -30vh');
    document.getElementsByClassName('buttondiv')[2].setAttribute('style', 'margin-top: -30vh');
    document.getElementsByClassName('scroll')[0].setAttribute('style', 'margin-top: 0vh; height: 16vh');
    document.getElementsByClassName('scrollB')[0].setAttribute('style', 'font-size: 3vh');
    return;
}
function scrollUp(){
    document.getElementById('arrow').removeAttribute('style');
    document.getElementById('yes').setAttribute('style', 'background-position: 0vw 0vh');
    document.getElementsByClassName('scroll')[0].setAttribute('onclick', 'scrollDown()');
    document.getElementsByClassName('scrollB')[0].childNodes[0].nodeValue = 'Down';
    document.getElementsByClassName('logo')[0].setAttribute('style', 'margin-top: 0vh')
    document.getElementsByClassName('buttondiv')[0].setAttribute('style', 'margin-top: 12vh');
    document.getElementsByClassName('buttondiv')[1].setAttribute('style', 'margin-top: 34vh');
    document.getElementsByClassName('buttondiv')[2].setAttribute('style', 'margin-top: 56vh');
    document.getElementsByClassName('scroll')[0].setAttribute('style', 'margin-top: 78vh');
    document.getElementsByClassName('scrollB')[0].removeAttribute('style');
    if(am){
        document.getElementById('insert-something-here').setAttribute('style', 'height: 84vh; margin-top: 100vh; background: #fafa;')
    }
    return;
}

function aboutme(){
    document.getElementById('insert-something-here').setAttribute('include', './assets/aboutMeText.html')
    document.getElementById('insert-something-here').setAttribute('style', 'height: 84vh; margin-top: 16vh; background: #fafa;')
    scrollDown();
    am = true;
    return;
}