window.onload = load()
function load(){
    setTimeout(()=>{
        i = 0
        do{
            i = i+1
            var img = document.createElement('img')
            img.addEventListener('error', (err)=>{err.target.remove()})
            img.setAttribute('src', `./images/${i}.png`)
            img.setAttribute('class', `img${i}`)
            img.setAttribute('onclick', `location.href='./images/${i}.png'`)
            document.body.appendChild(img)
        } while (i < 20)
    }, 100)
}