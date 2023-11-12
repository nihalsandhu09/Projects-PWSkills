// For images slider 

let container =  document.getElementById('offer-section-img');

function scrollleft(){
    container.scrollLeft -= 50
}

function scrollRight(){
    container.scrollLeft -= 50
}

let scrollcontainer = document.querySelector(".gallery");
let imageWidth = scrollcontainer.querySelector("span img").clientWidth;
    let backBtn = document.getElementById("backBtn")
    let nextBtn = document.getElementById("nextBtn")



    // scrollcontainer.addEventListener('wheel',function(evt){
    //     evt.preventDefault();
    //     scrollcontainer.scrollLeft += (evt.deltaY > 0 ? 1 : -1) * imageWidth
    //     scrollcontainer.style.scrollBehavior="auto";
    // })

    scrollcontainer.addEventListener('wheel', function(evet){
        evet.preventDefault();
        scrollcontainer.style.scrollBehavior = "smooth"
        scrollcontainer.scrollLeft += (evet.deltaY >0 ?1:-1) * imageWidth
        })
        
  nextBtn.addEventListener('click', function(evt){
   scrollcontainer.style.scrollBehavior = "smooth";
   scrollcontainer.scrollLeft += imageWidth; 
  })
  backBtn.addEventListener('click', function(evt){
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= imageWidth;
  })

