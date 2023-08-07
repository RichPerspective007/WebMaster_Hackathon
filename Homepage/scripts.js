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