    const postsPreview = document.querySelectorAll(".postEffect") ;
window.addEventListener("scroll", function (){
     const position = window.pageYOffset;

    postsPreview.forEach(function(item, index) {
        if (position >= 600) {
            setTimeout(function() {
            item.classList.add('postEffectBefore'); 
        }, index * 500); 
        }
        
    });

})

const frase = document.querySelector(".slogan")

window.addEventListener("load",  function(){
    frase.classList.add("effectBanner")



})