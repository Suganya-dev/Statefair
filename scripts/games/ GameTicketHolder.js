const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".attraction")

export const GameTicketHolders = ()=>{
    eventHub.addEventListener("gameticketPurchased",CustomEvent=> {
     contentTarget.innerHTML +=
        `
        <div class="people games"></div>
    `
    })
    }
   