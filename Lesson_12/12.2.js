const container = document.getElementById("button-container");

container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        const button = event.target.dataset.name;
        alert(`You clicked the ${button}`);
    }
})