 function refer1()
{
    location.href="history (4).html";
}
function refer2()
{
    location.href="About_Us";
}
function refer3()
{
    location.href="cotact_us";
}
function refer4()
{
    location.href="login_signup";
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
