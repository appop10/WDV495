function loadFunctions() {

    if (document.querySelector("body").clientWidth < 600) {
        makeMenuArrow();

        document.querySelector("#mobile-menu-arrow").onclick = () => {
            if (!document.querySelector(".navigation").classList.contains("drop-down")) {
                document.querySelector(".navigation").classList.add("drop-down");
                document.querySelector(".navigation").classList.add("mui-enter");
                document.querySelector(".navigation").classList.add("height-change");
                document.querySelector("#mobile-menu-arrow").classList.add("rotate-arrow");
            } else {
                document.querySelector(".navigation").classList.toggle("mui-enter-active");
                document.querySelector(".navigation").classList.toggle("height-change");
                document.querySelector("#mobile-menu-arrow").classList.toggle("rotate-arrow");
            }
        }
    }
}

function makeMenuArrow() {
    let listEl = document.createElement("li");
    listEl.innerHTML = "&#8249";
    listEl.setAttribute("id", "mobile-menu-arrow");
    
    document.querySelector(".navigation").appendChild(listEl);
}