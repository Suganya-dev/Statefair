
const eventHub= document.querySelector("#state-fair")
const contentTarget = document.querySelector(".food")




    eventHub.addEventListener("foodTicketPurchased",() => {
        //  console.log("foodTicketPurchased",customEvent)
        contentTarget.innerHTML +=
        `
       <div class="person eater"></div>
        
        `
    })


