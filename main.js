!(function(d){

     var next = d.getElementsByClassName('carousel__button--next')[0],
     prev = d.getElementsByClassName('carousel__button--prev')[0];
next.addEventListener("click",()=>{
    var classLength = d.querySelectorAll(".carousel__photo");
    console.log(classLength.length);
    classLength[1].classList.add('active');
    classLength[0].classList.add('prev');
})
prev.addEventListener("click",()=>{
    alert("prev");
})
}(document));
