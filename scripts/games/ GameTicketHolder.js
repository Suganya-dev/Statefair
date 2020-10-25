const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".player")

export const GameTicketHolders = ()=>{
    eventHub.addEventListener("gameticketPurchased",CustomEvent=> {
     contentTarget.innerHTML +=
        `
        <div class="person player"></div>
    `
    })
    }
   