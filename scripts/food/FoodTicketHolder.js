import {TicketBooth} from "./TicketBooth.js"
const eventHub= document.querySelector("#state-fair")
const contentTarget = document.querySelector(".rides")


export const FoodTicketHolder = () => { 
eventHub.addEventListener("rideTicketPurchased",customEvent =>{
    contentTarget.innerHTML +=
`  

<div class="people food"></div>
`
} )
}


