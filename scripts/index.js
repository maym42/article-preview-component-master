let cardMedia = document.getElementById("card-social-media");
let cardPerson = document.getElementById("card-person");
/*btn */
let shareBtnPerson = document.getElementById("btn-share-person");
let shareBtnBack = document.getElementById("btn-share-social");



shareBtnPerson.addEventListener("click", function() {
    cardMedia.classList.toggle("hide-social-media-card");
    cardPerson.classList.toggle("hide-person-card");
});

shareBtnBack.addEventListener("click", function() {
    cardMedia.classList.add("hide-social-media-card");
    cardPerson.classList.remove("hide-person-card");
});