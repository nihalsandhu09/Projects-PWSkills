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



   let firstquestion = document.getElementById("firstquestion")
   let answer = document.getElementById('answer')
  let insidefirstquestion  = document.getElementById('inside-first-question ')
  let toggle =false;
  function showAnswer(){
    
    // answer.style.display = "block"
    answer.style.display = toggle ? "none" : "block";

    toggle = !toggle;
  }
  insidefirstquestion.addEventListener('click',showAnswer,false)
    



   firstquestion.addEventListener('mouseover',function(){
    
    insidefirstquestion.removeEventListener('click',showAnswer,true)
     
    
   })

  // let questionContainer = document.querySelectorAll('#firstquestion')
  
  // questionContainer.forEach(function (container) {
  //   let question = container.querySelector('#inside-first-question');
  //   let answer = container.querySelector('#answer');

  //   // Initialize a variable to toggle the visibility of the answer for each container
  //   let toggle = false;

  //   // Function to show or hide the answer for the current container
  //   function showAnswer() {
  //       answer.style.display = toggle ? "none" : "block";
  //       toggle = !toggle;
  //   }
  //     // Add click event listener to the question element inside the container
  //     insidefirstquestion.addEventListener('click', showAnswer, false);

  //     // Optionally, you can add mouseover event listener to the container to disable toggling on hover
  //     container.addEventListener('mouseover', function () {
  //         insidefirstquestion.removeEventListener('click', showAnswer, false);
  //     });
  // });

    // let questionContainers = document.querySelectorAll('.question-container');

    // questionContainers.forEach(function (container) {
    //     let question = container.querySelector('.question');
    //     let answer = container.querySelector('.answer');
    //     let toggle = false;

    //     function showAnswer() {
    //         console.log("Clicked!");  // Debugging line
    //         answer.style.display = toggle ? "none" : "block";
    //         toggle = !toggle;
    //     }

    //     question.addEventListener('click', showAnswer, false);

    //     container.addEventListener('mouseover', function () {
    //         console.log("Mouseover!");  // Debugging line
    //         question.removeEventListener('click', showAnswer, false);
    //     });
    // });




   

 