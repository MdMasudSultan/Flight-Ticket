function firstClassTicket(Amount) {                     // First Class Ticket 
    const flyTicketCount = document.getElementById('firstCount-value');
    const flyCountValue = parseInt(flyTicketCount.value);
   let flyTotalCount = flyCountValue;
    if(Amount == true ){
      flyTotalCount = flyCountValue + 1;
    }

    if (Amount == false && flyCountValue > 0) {
        flyTotalCount = flyCountValue - 1;
              }
    flyTicketCount.value = flyTotalCount;

    const totalAmount = flyTotalCount * 150;
    document.getElementById('firstAmount-count').innerText = "($" + totalAmount +")"

    subTotalCost()
}


// Economy Class Ticket 
function EconomyClassTicket(Amount) {
    const flyTicketCount = document.getElementById('economyCount-value');
    const flyCountValue = parseInt(flyTicketCount.value);
   let flyTotalCount = flyCountValue;
    if(Amount == true ){
      flyTotalCount = flyCountValue + 1;
    }

    if (Amount == false && flyCountValue > 0) {
        flyTotalCount = flyCountValue - 1;
              }
    flyTicketCount.value = flyTotalCount;

    const totalAmount = flyTotalCount * 100;
    document.getElementById('economyAmount-count').innerText = "($" + totalAmount +")"
    subTotalCost()
}


    function subTotalCost() {                       // Sub Total Amount

        const firstCount = nameOf("firstCount")                            
        // const firstCount = document.getElementById('firstCount-value');
        // const firstCountValue = parseInt(firstCount.value);
        
        const economyCount = nameOf("economyCount")
        // const economyCount = document.getElementById('economyCount-value');
        // const economyCountValue = parseInt(economyCount.value);

        const subTotal = firstCount * 150 + economyCount * 100;
        document.getElementById('subTotal').innerText = "$" + subTotal;

     
        // ticket Text 
        const text = Math.round(subTotal * 0.1);
        document.getElementById('text-amount').innerText = "$" + text;
 
        // Ticket Total Cost 
        const ticketTotalCost = subTotal + text;
        document.getElementById("total-cost").innerText = "$" + ticketTotalCost;
    }

    // Subtotal Amount Function for 71 line 
    function nameOf(ticket) {                  
        const ticketCount = document.getElementById(ticket + "-value");
        const ticketCountValue = parseInt(ticketCount.value);
        
        return ticketCountValue;
    }


   
   
   
   
   
   
   
    // // first plus count 

// document.getElementById('plus-count').addEventListener('click', function(){
//     const flyTicketCount = document.getElementById('count-value');
//     const flyCountValue = parseInt(flyTicketCount.value);
//     const flyPlusCount = flyCountValue + 1 ;
//     flyTicketCount.value = flyPlusCount

//     const totalAmount = flyPlusCount * 150;
//     document.getElementById('amount-count').innerText = "($" + totalAmount +")"})

// // first minus count 

// document.getElementById('minus-count').addEventListener('click', function(){
//     const flyTicketCount = document.getElementById('count-value');
//     const flyCountValue = parseInt(flyTicketCount.value);
   
//     if (flyCountValue > 0) {
//                   flyMinusCount = flyCountValue - 1;
//               }
//     flyTicketCount.value = flyMinusCount;

//     const totalAmount = flyMinusCount * 150;
//     document.getElementById('amount-count').innerText = "($" + totalAmount +")"

// })


