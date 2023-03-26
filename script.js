const hobbiesButton = findSelector("#learning-btn")
const gymButton = findSelector("#gym-btn")
const musicButton = findSelector("#music-btn")
const readingButton = findSelector("#reading-btn")
const friendsButton = findSelector("#friends-btn")
const meetingButton = findSelector("#meeting-btn")
const swimmingButton = findSelector("#swimming-btn")
const gamingButton = findSelector("#gaming-btn")
const walkingButton = findSelector("#walking-btn")

const closeHobbyButton    = findSelector("#hobby-close-button")
const closeGymButton      = findSelector("#gym-close-button")
const closeMusicButton    = findSelector("#music-close-button")
const closeReadingButton  = findSelector("#reading-close-button")
const closeFriendsButton  = findSelector("#friends-close-button")
const closeMeetupButton   = findSelector("#meetup-close-button")
const closeSwimmingButton = findSelector("#swimming-close-button")
const closeGamingButton   = findSelector("#gaming-close-button")
const closeWalkingButton  = findSelector("#walking-close-button")




function findSelector(identifier) {
    return document.querySelector(identifier)
}


hobbiesButton.addEventListener("click", (e) => {
    e.preventDefault()
    toggleSideBarCard(".sidebar-learning", ".hobby-btn", ".hobbyCardButton")

})


gymButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-gym", ".gym-btn", ".gymCardButton")

    // findSelector(".sidebar-walking").style.display   = "none";
    // findSelector(".sidebar-gaming").style.display    = "none";
    // findSelector(".sidebar-swimming").style.display  = "none";
    // findSelector(".sidebar-friends").style.display   = "none";
    // findSelector(".sidebar-reading").style.display   = "none";
    // findSelector(".sidebar-music").style.display     = "none";
    // findSelector(".sidebar-meetup").style.display    = "none";
    // findSelector(".sidebar-learning").style.display  = "none";
})


musicButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-music", ".music-btn", ".musicCardButton")

  
})


readingButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-reading", ".reading-btn", ".readingCardButton")

  
})



friendsButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-friends", ".friends-btn", ".friendsCardButton")

})



meetingButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-meetup", ".meeting-btn", ".meetingCardButton")

})



swimmingButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-swimming", ".swimming-btn", ".swimmingCardButton")

   
})


gamingButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-gaming", ".gaming-btn", ".gamingCardButton")


   
})


walkingButton.addEventListener("click", (e) => {

    e.preventDefault()
    toggleSideBarCard(".sidebar-walking", ".walking-btn", ".walkingCardButton")

    
})



function toggleSideBarCard(sideBarSelector, buttonSelector, cardSelector) {

    // A helper function that takes in a the sidebar select, the button to select and the card 
    // when called allowed the more information to be viewed

    sideBarDiv = findSelector(sideBarSelector)
    let isButtonClicked = findSelector(buttonSelector)

    isButtonClicked = handleClick(isButtonClicked, cardSelector)
    let toggleState = sideBarDiv.classList.toggle("sidebar-active")

    if (toggleState == false) {
        findSelector(cardSelector).innerHTML = "view more..."
    }

}


closeHobbyButton.addEventListener("click", (event) => {
    closeSideButton(".hobbyCardButton", ".sidebar-learning", event)

})

closeGymButton.addEventListener("click", (event) => {
    closeSideButton(".gymCardButton", ".sidebar-gym", event)

})

closeMusicButton.addEventListener("click", (event) => {
    closeSideButton(".musicCardButton", ".sidebar-music", event)

})

closeReadingButton.addEventListener("click", (event) => {
    closeSideButton(".readingCardButton", ".sidebar-reading", event)

})

closeFriendsButton.addEventListener("click", (event) => {
    closeSideButton(".friendsCardButton", ".sidebar-friends", event)

})

closeMeetupButton.addEventListener("click", (event) => {
    closeSideButton(".meetingCardButton", ".sidebar-meetup", event)

})

closeSwimmingButton.addEventListener("click", (event) => {
    closeSideButton(".swimmingCardButton", ".sidebar-swimming", event)

})

closeGamingButton.addEventListener("click", (event) => {
    closeSideButton(".gamingCardButton", ".sidebar-gaming", event)

})

closeWalkingButton.addEventListener("click", (event) => {
    closeSideButton(".walkingCardButton", ".sidebar-walking", event)

})


function closeSideButton(cardCloseButtonSelector, cardSideBarSelector, event) {

    event.preventDefault()
    let sideBarLearning = findSelector(cardSideBarSelector)

    sideBarLearning.classList.add("fade-out")
    sideBarLearning.classList.remove("sidebar-active")
    findSelector(cardCloseButtonSelector).innerHTML = "view more.."
    sideBarLearning.classList.remove("fade-out")
}


function handleClick(buttonClicked, cardButton) {

    let button = findSelector(cardButton)

    if (buttonClicked) {
        button.innerHTML = "View less.."

    } else {
        button.innerHTML = "View more.."

    }

}


