function tab(name){
    var href;
    switch (name) {
        case 'a':
            href = 'artworks'; break;
        case 'o':
            href = 'oc'; break;
        case 'f':
            href = 'fan'; break;
    }
    location.href = href
}