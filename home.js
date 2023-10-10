let usersSection = document.querySelector(".member-container");
let isShow = true;
function showHideUsers() {
    if (isShow) {
    usersSection.style.display = "none";
    isShow = false;
    } else {
        usersSection.style.display = "block";
        isShow = true;
    }
}

let usersSections = document.querySelector(".signup");
let isShows = true;
function showHideUsers2() {
    if (isShows) {
    usersSections.style.display = "none";
    isShows = false;
    } else {
        usersSections.style.display = "block";
        isShows = true;
    }
}
