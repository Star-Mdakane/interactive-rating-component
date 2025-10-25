const form = document.getElementById("content");
const main = document.getElementById("main");
const thanks = document.getElementById("thanks");
const rating = document.getElementById("rating");

form.addEventListener("submit", (e) => {
    e.preventDefault();


    const selectedRating = document.querySelector("input[name='rating']:checked");

    if (selectedRating) {
        rating.textContent = ` You selected ${selectedRating.id} out of 5`
        main.style.display = "none";
        thanks.style.display = "block";
        setTimeout(() => {
            main.style.display = "block";
            thanks.style.display = "none";
        }, 5000)
    } else {
        console.log("No rating selected");
    }
})