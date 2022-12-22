
let navBtn = document.querySelector(".section1 .navBar-btn")
let navbar = document.querySelector(".section1 .navbar")

let x = navBtn.style.right

navBtn.addEventListener("click" , function(){
    navBtn.closest(".section1").classList.toggle("change")
    if(document.querySelector(".section1").classList.contains("change")){
        navBtn.style.right = navbar.clientWidth * 0.8 +"px"
    }else{
        navBtn.style.right = x
    }
      
    
})

