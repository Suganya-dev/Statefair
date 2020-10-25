import {TicketBooth} from "./TicketBooth.js"
const eventHub= document.querySelector("#state-fair")
const contentTarget = document.querySelector(".attraction")


export const FoodTicketHolder = () => { 
eventHub.addEventListener("foodticketPurchased",customEvent =>{
    contentTarget.innerHTML +=
`  
<div class="people food"></div>
`
} )
}


