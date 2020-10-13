
let grabId = document.getElementById("grab-id")
let styleCard = document.getElementById("style-card")

function setCard() {
    let card = document.getElementById(grabId.value)
    console.log(card)

    card.style.color = styleCard.value
    console.log(grabId.value, styleCard.value)
}

function resetCard() {
    let cards = document.getElementsByTagName("section")
    
    for (i = 0; i < 3; i++) {
        cards[i].style.color = "gray"
    }
}