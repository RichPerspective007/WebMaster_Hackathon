document.addEventListener("DOMContentLoaded", function() {
let currentlyDisplayedDiv = null;
const btns = document.getElementsByClassName("Timeline_Buttons");
for (const btn of btns) 
{
    btn.onclick = function () 
    {
        const targetDivId = btn.id.replace("_but", "");
        const targetDiv = document.getElementById(targetDivId);
        let flag = "Opened New";

        if (currentlyDisplayedDiv === targetDiv) {
            currentlyDisplayedDiv.style.display = "none";
            currentlyDisplayedDiv = null;
            flag = "Closed It"
        }
        else
        {
            flag = "Opened New";
        }

        if (flag === "Opened New")
        {
            if (currentlyDisplayedDiv === null)
            {
                targetDiv.style.display = "flex";
                currentlyDisplayedDiv = targetDiv;
            }
            else 
            {
                currentlyDisplayedDiv.style.display = "none";
                targetDiv.style.display = "flex";
                currentlyDisplayedDiv = targetDiv;
            }
        }
            
    };
}




})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  
  
