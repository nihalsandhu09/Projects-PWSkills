// For images slider 



  let scrollcontainer = document.getElementById('offer-section-img')

  let boxwidth = scrollcontainer.querySelector('span div').clientWidth;

  let backBtn = document.getElementById("back-btn")
      let nextBtn = document.getElementById("next-Btn")


  scrollcontainer.addEventListener('wheel',function(evet){
    evet.preventDefault();
    scrollcontainer.style.scrollBehavior="smooth";
    scrollcontainer.scrollLeft += boxwidth;
  })

  nextBtn.addEventListener('click', function(evt){
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += boxwidth; 
   })
   backBtn.addEventListener('click', function(evt){
     scrollcontainer.style.scrollBehavior = "smooth";
     scrollcontainer.scrollLeft -= boxwidth;
   })
