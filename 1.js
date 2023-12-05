 function refer1()
{
    location.href="history.html";
}
function gotoaboutus()
{
    location.href="aboutus.html";
}
function refer3()
{
    location.href="contactus.html";
}
function refer4()
{
    location.href="login_page.html";
}
function gotoexplore(){
  location.href="WEBD.html";
}

let t = document.getElementById("chg1");

t.addEventListener("mouse Hover", refer2());

function refer2() {
  
const targetElement = document.getElementById("sec");
const hiddenImage = document.getElementById("img");

targetElement.addEventListener("mouseover", () => {
  hiddenImage.style.display = "block"; // Show the image on hover
});

targetElement.addEventListener("mouseout", () => {
  hiddenImage.style.display = "none"; // Hide the image on mouseout
});
}
