 //menubar
        let menubar = document.getElementById('menubar')
        function openmenu(){
            menubar.style.left='0'
            menubar.style.transition = '.5s ease-in-out'
        }
        function closemenu(){
            menubar.style.left ='-100%'
            menubar.style.transition = '.5s ease-in-out'
        }

//loading anime
let loadd = document.getElementById('loadd')
let content = document.getElementById('content')
window.addEventListener("load" , function(){
     setTimeout(function(){
    loadd.style.display = 'none'
    content.style.display = 'block'
     } , 3000)
})

