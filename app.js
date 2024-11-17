const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieList[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=> {
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0){
        movieList[i].style.transform = `translateX(${
            movieList[i].computedStyleMap().get("transform")[0].x.value
      -300}PX)`;
        }
        else{
            movieList[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    console.log(movieList[i].querySelectorAll("img").length);
});

//toggole

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle")

ball.addEventListener("click",() => {
    items.forEach(item =>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})