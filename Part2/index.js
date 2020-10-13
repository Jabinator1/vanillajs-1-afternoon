
let grabId = document.getElementById("grab-id")
let styleCard = document.getElementById("style-card")
let cards = document.getElementsByTagName("section")

function setCard() {
    let card = document.getElementById(grabId.value)
    console.log(card)

    card.style.color = styleCard.value
    console.log(grabId.value, styleCard.value)
}

function resetCard() {
    for (i = 0; i < 3; i++) {
        cards[i].style.color = "gray"
    }
}