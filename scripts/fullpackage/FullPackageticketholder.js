const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".attractions")

eventHub.addEventListener("fullPackageTicketPurchased",() =>{
    contentTarget.innerHTML += `
    <div class="people rides">
 <div class="person bigSpender"></div>
 </div>
     `})

eventHub.addEventListener("fullPackageTicketPurchased",() =>{
    contentTarget.innerHTML += `
    <div class="people food">
    <div class="person bigSpender" </div>
    </div>`
})

// eventHub.addEventListener("fullPackageTicketPurchased",() =>{
//     contentTarget.innerHTML += `
//     <div class="people games">
//     <div class="person bigSpender" </div>
//     </div>`
// })

// eventHub.addEventListener("fullPackageTicketPurchased",() =>{
//     contentTarget.innerHTML += `
//     <div class="person bigSpender" </div>`
// })
