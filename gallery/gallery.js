window.onload = load()
function load(){
    setTimeout(()=>{
        i = 0
        do{
            i = i+1
            var div = document.createElement('img')
            div.addEventListener('error', (err)=>{err.target.remove()})
            div.setAttribute('src', `./images/${i}.png`)
            div.setAttribute('class', `img${i}`)
            console.log(div)
            document.body.appendChild(div)
        } while (i < 20)
    }, 100)
}