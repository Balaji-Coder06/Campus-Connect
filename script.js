function postDiscussion() {
    let input = document.getElementById("d-input");
    let text = input.value.trim();
    if (text !== "") {
        let newDiv = document.createElement("div");
        newDiv.className = "d-item";
        newDiv.innerText = text;
        document.getElementById("d-List").prepend(newDiv);
        input.value = "";
    }
}

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});