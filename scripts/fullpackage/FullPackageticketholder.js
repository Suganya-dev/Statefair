const eventHub = document.querySelector("#state-fair")
const contentTarget1 = document.querySelector(".food")
const contentTarget2 = document.querySelector(".rides")
const contentTarget3 = document.querySelector(".games")
const contentTarget4 = document.querySelector(".sideshow")


eventHub.addEventListener("fullPackageTicketPurchased",() =>{
    contentTarget2.innerHTML += `
   <div class="person bigSpender"></div>
  `})

eventHub.addEventListener("fullPackageTicketPurchased",() =>{
    contentTarget1.innerHTML += `
     <div class="person bigSpender" </div>
    `
})

eventHub.addEventListener("fullPackageTicketPurchased",() =>{
    contentTarget3.innerHTML += `
   <div class="person bigSpender" </div>
    `
})

eventHub.addEventListener("fullPackageTicketPurchased",() =>{
    contentTarget4.innerHTML += `
   <div class="person bigSpender" </div>
    `
})
