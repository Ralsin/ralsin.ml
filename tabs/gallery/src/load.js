window.onload = load()
function load(){
    window.addEventListener("orientationchange", function(event) {
        if(window.screen.width < window.screen.height){
            document.head.getElementsByTagName('link')[0].setAttribute('href', '../src/mobile-gallery.css')
        } else {
            document.head.getElementsByTagName('link')[0].setAttribute('href', '../src/gallery.css')
        }
    })
    if(window.screen.width < window.screen.height){
        document.head.getElementsByTagName('link')[0].setAttribute('href', '../src/mobile-gallery.css')
    }
    setTimeout(()=>{
        i = 0
        do{
            i = i+1
            var img = document.createElement('img')
            img.addEventListener('error', (err)=>{err.target.remove()})
            img.setAttribute('src', `./images/${i}.png`)
            img.setAttribute('class', `img${i}`)
            img.setAttribute('onclick', `location.href='./images/${i}.png'`)
            document.getElementsByClassName('handler')[0].appendChild(img)
        } while (i < 20)
    }, 100)
}