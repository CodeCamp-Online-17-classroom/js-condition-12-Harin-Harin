let ticket = prompt("Which zone that you want to check?");
ticket = ticket.toUpperCase();
let price = '';

if(!ticket){alert("Please select the zone")}
else if (ticket.length > 2) {
  alert("Zone code should not exceed 2 characters");
}else if(ticket === 'AA'){
  price = 6500 ;alert(`Zone : ${ticket}\nPrice : ${price} THB`)
}else if(ticket === "BB"){
  price = 5000 ;alert(`Zone : ${ticket}\nPrice : ${price} THB`)
}else if(ticket >= 'SB' && ticket <= 'SN'){
  price = 5500 ;alert(`Zone : ${ticket}\nPrice : ${price} THB`)
}else if(ticket.length == 1 && (ticket >= 'B' && ticket <= 'T')){
  price = 4000 ;alert(`Zone : ${ticket}\nPrice : ${price} THB`)
}else{alert("Invalid zone")}

console.log(`Zone : ${ticket}\nPrice : ${price}`)
