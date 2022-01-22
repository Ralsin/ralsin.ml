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