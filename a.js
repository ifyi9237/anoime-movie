const navMenu= document.getElementById("navList");

const toggleBtn= document.getElementById("hamburgerbtn");

function actionbtn() {
    navMenu.classList.toggle('show')
}

    


toggleBtn.addEventListener('click' , actionbtn);