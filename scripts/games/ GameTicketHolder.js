// const eventHub = document.querySelector("#state-fair")
// const contentTarget = document.querySelector(".games")


//     eventHub.addEventListener("gameticketPurchased",() => {
//      contentTarget.innerHTML +=
//         `
//         <div class="person player"></div>
//     `
//     })
    
const eventHub=document.querySelector("#state-fair")
const contentTarget = document.querySelector(".games")

eventHub.addEventListener("gameticketPurchased",() =>{
   contentTarget.innerHTML +=
   `
   <div class="person player">
    </div>`

})