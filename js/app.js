// set innerText 
function setInnerText(elementId, value) {
    document.getElementById(elementId).innerText = value;
}
// calculation the total cost 
function totalCost(elementId, value) {
    const getTotalCost = document.getElementById(elementId);
    const totalCostText = getTotalCost.innerText;
    const totalCost = parseInt(totalCostText);
    const sum = totalCost + parseInt(value);
    return sum;
}

const seats = document.getElementsByClassName('kbd');
let count = 0;
for (let seat of seats) {
    seat.addEventListener('click', function (event) {

        count += 1;
        setInnerText('cart-count', count);
        // get seat number & ticket price
        const seatName = event.target.innerText;
        const price = document.getElementById('ticket-price').innerText;
        // Store the information
        //step-1: get the container by id
        const selectedContainer = document.getElementById('selected-container');
        // step-2: create element & set innerText
        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        li1.innerText = seatName;
        const li2 = document.createElement('li');
        li2.innerText = 'economy';
        const li3 = document.createElement('li');
        li3.innerText = price;

        // marked the selected item
        event.target.style.backgroundColor = '#1DD100';
        // set disable button
        event.target.disabled = true;

        //count the booking-seat
        const seatBookingtext = document.getElementById('cart-count').innerText;
        const seatBooking = parseInt(seatBookingtext);
        if(seatBooking === 4){
            const getApply = document.getElementById('apply-btn').innerText;
            console.log(getApply);
        }
        
        // step-3: set the element in cart container 
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        selectedContainer.appendChild(ul);
        
        // console.log('code working');
    })

}