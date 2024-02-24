let searchBtn = document.querySelector("#magnifier");
let inputBox = document.getElementById("search-box");
let xBtn = document.querySelector("#x");

//X button appearing and disappearing to apper microphone based on input field focus and blur

inputBox.addEventListener("blur", () => {

    xBtn.classList.add("fa-microphone");
    xBtn.classList.remove("fa-x");

});

inputBox.addEventListener("focus", () => {

    xBtn.classList.remove("fa-microphone");
    xBtn.classList.add("fa-x");

});
// When search button pressed it will search

searchBtn.addEventListener("click", () => {

    //redirect to google with same search 

    if (inputBox.value !== "")
        location.href = `https://www.google.com/search?q=${inputBox.value}`;

});

//when x is called,, everything is erased from search bar

xBtn.addEventListener("click", () => {
    inputBox.value = "";
});

//When enter is pressed it will search

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter")
        location.href = `https://www.google.com/search?q=${inputBox.value}`;
})