const gimjoin = document.getElementById("gimjoin");
const gim = document.getElementById("gim");
const koot = document.getElementById("koot");
const kootjoin = document.getElementById("kootjoin");
const near = document.getElementById("near");
const nearjoin = document.getElementById("nearjoin");
const blook = document.getElementById("blook");
const blookjoin = document.getElementById("blookjoin");


function hasLettersRegex(str) {
return /[a-zA-Z]/.test(str);
}

gimjoin.addEventListener("click", () => {
    if(gim.value.length > 6 || hasLettersRegex(gim.value) == true) alert("The join code you have entered is false.")
    else window.open(`https://www.gimkit.com/join?gc=${gim.value}`)

})

kootjoin.addEventListener("click", () => {
    if(koot.value.length != 7 || hasLettersRegex(koot.value) == true) alert("The join code you have entered is false.")
    else window.open(`https://kahoot.it/?pin=${koot.value}`)

})

nearjoin.addEventListener("click", () => {
    if(near.value.length != 5) alert("The join code you have entered is false.")
    else window.open(`https://app.nearpod.com/?pin=${near.value}`)
})

blookjoin.addEventListener("click", () => { 
    if(blook.value.length != 7 || hasLettersRegex(blook.value) == true) alert("The join code you have entered is false.")
    else window.open(`https://play.blooket.com/play?id=${blook.value}`)
})