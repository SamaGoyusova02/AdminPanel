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