//collect the input

const inputMessage = document.querySelector(".input-message");
const createMesage = document.querySelector(".btn");
const showLink = document.querySelector(".show-link");


createMesage.addEventListener("click", function () {
    if (inputMessage.value) {
        showLink.value = `${window.location.href}#${btoa(inputMessage.value)}`;
        document.querySelector(".message-link").classList.remove("d-none");
        document.querySelector(".message-box").classList.add("d-none")
        showLink.select();
    } else {
        alert("Please Input a Message")
    }
})


const hash = window.location.hash;
const message = atob(hash.replace("#", ""));

if (message) {
    document.querySelector(".show-message").classList.remove("d-none");
    document.querySelector('.message-box').classList.add('d-none');
    document.querySelector(".message-title").innerHTML = message;
}