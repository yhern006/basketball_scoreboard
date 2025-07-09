let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeTotal = 0
let guestTotal = 0

function home_plus(input) {
    homeTotal += input
    homeScoreEl.textContent = homeTotal
}

function guest_plus(input) {
    guestTotal += input
    guestScoreEl.textContent = guestTotal
}

