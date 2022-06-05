window.onload = ()=>{
    var r = new XMLHttpRequest()
    r.open('GET', 'https://discard.ralsin.ml/704037343878971424.json')
    r.onload = ()=>{
        document.getElementsByClassName('dpfp')[0].setAttribute('src', 'https://cdn.discordapp.com/avatars/'+JSON.parse(r.response).id+'/'+JSON.parse(r.response).avatar+'?size=1024&quality=lossless')
        document.getElementsByClassName('dpfp')[0].removeAttribute('style')
    }
    r.send()
}

function scrollPage(name){
    scrollBy(0, document.getElementsByClassName(name)[0].scrollHeight + 20)
}
function tab(name){
    var href;
    switch (name) {
        case 'g':
            href = 'tabs/gallery'; break;
        case 'p':
            href = 'tabs/projects'; break;
    }
    location.href = href
}
