function href(page){
    switch (page){
        case 'test': location.href='https://ralsin.github.io/fnf/note-swapper'; break;
        case 'github': location.href='https://github.com/Ralsin'; break;
    }
}

function scrollDown(){
    document.getElementById('arrow').setAttribute('style', 'transform: rotate(180deg)');
    document.getElementById('yes').setAttribute('style', 'background-position-y: -100vh');
    document.getElementsByClassName('scroll')[0].setAttribute('onclick', 'scrollUp()');
    document.getElementsByClassName('scrollB')[0].childNodes[0].nodeValue = 'Back';
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
    document.getElementById('yes').removeAttribute('style');
    document.getElementsByClassName('scroll')[0].setAttribute('onclick', 'scrollDown()');
    document.getElementsByClassName('scrollB')[0].childNodes[0].nodeValue = 'Down';
    document.getElementsByClassName('logo')[0].setAttribute('style', 'margin-top: 0vh')
    document.getElementsByClassName('buttondiv')[0].setAttribute('style', 'margin-top: 12vh');
    document.getElementsByClassName('buttondiv')[1].setAttribute('style', 'margin-top: 34vh');
    document.getElementsByClassName('buttondiv')[2].setAttribute('style', 'margin-top: 56vh');
    document.getElementsByClassName('scroll')[0].setAttribute('style', 'margin-top: 78vh');
    document.getElementsByClassName('scrollB')[0].removeAttribute('style');
    document.getElementById('embed-div').removeAttribute('style');
    return;
}

function aboutme(){
    document.getElementById('embed').setAttribute('data', 'assets/aboutMe.html');
    document.getElementById('embed-div').setAttribute('style', 'margin-top: 16vh');
    scrollDown();
    return;
}
function fnfns(){
    document.getElementById('embed').setAttribute('data', 'fnf/note-swapper');
    document.getElementById('embed-div').setAttribute('style', 'margin-top: 16vh');
    scrollDown();
    return;
}