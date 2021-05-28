var txtInput = document.querySelector("#input")
var txtOutput = document.querySelector("#output")
var txt = "During their routine summer fun, the two brothers Phineas and Ferb(in a Dinsney series) create their own language, Ferb Latin which quickly catches on. To speak it you must take the first letter of every word, move it to the end, and then say '-erb'\; though two-letter words stay the same. "

var serverLink = "https://api.funtranslations.com/translate/ferb-latin.json"
var i = 0, speed = 50;
function clickHandler() {
    var inputText = txtInput.value;
    var fetchLink = serverLink + "?" + "text=" + inputText;
    fetch(fetchLink)
        .then(response => response.json())
        .then(data => txtOutput.textContent = data.contents.translated)
        .catch((error) => {
            txtOutput.textContent = error;
        });;

}

function typeWriter() {

    if (i < txt.length) {
        document.getElementById("type").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    console.log(Pandya)
}