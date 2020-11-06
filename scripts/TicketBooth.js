const contentTarget = document.querySelector(".entry")
// const contentTarget = document.querySelector(".attractions")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "rideTicket"){
        console.log("rideClick",clickEvent)
    const  rideEvent = new CustomEvent("rideTicketPurchased")
    eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click",clickEvent=>{
   if(clickEvent.target.id === "foodTicket"){
    const foodEvent = new CustomEvent("foodTicketPurchased")
    eventHub.dispatchEvent(foodEvent)
   }
})

eventHub.addEventListener("click",clickEvent=>{
    if(clickEvent.target.id === "gameTicket"){
     const gameEvent1 = new CustomEvent("gameticketPurchased")
     eventHub.dispatchEvent(gameEvent1)
    }
 })
 
 eventHub.addEventListener("click",clickEvent =>{
     if(clickEvent.target.id === "sideshowTicket"){
        console.log("sideshowClick",clickEvent)
     const sideshow = new CustomEvent("sideshowticketpurchased")
     eventHub.dispatchEvent(sideshow)
     }
})

eventHub.addEventListener("click",clickEvent =>{
    if(clickEvent.target.id === "fullPackageTicket"){
    console.log("fullpackageclick",clickEvent)
     const fullPackage = new CustomEvent("fullPackageTicketPurchased")
     eventHub.dispatchEvent(fullPackage)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
         <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideshowTicket">sideshow Ticket </button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}
