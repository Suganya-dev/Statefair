const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")



eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "rideTicket"){
    const  rideEvent = new CustomEvent("rideTicketPurchased")
    eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click",clickEvent=>{
   if(eventHub.target.id === "foodTicket"){
    const foodEvent = new CustomEvent("foodticketPurchased")
    eventHub.dispatchEvent(foodEvent)
   }
})

eventHub.addEventListener("click",clickEvent=>{
    if(eventHub.target.id === "gameTicket"){
     const gameEvent = new CustomEvent("gameticketPurchased")
     eventHub.dispatchEvent(gameEvent)
    }
 })

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
   
        </div>
    `
}
