const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".sideshow")

eventHub.addEventListener("sideshowticketpurchased",() =>{
    contentTarget.innerHTML += `
    <div class="person gawker">
    </div> `
})