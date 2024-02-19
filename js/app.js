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
//apply coupon
// step-1: get the input field by id 
const getApplyBtn = document.getElementById('apply-btn');
getApplyBtn.addEventListener('click', function () {
    const getCouponField = document.getElementById('input-area');
    const coupon = getCouponField.value;
    getCouponField.value = '';
    // console.log(coupon);
     // step-1:calculate get grand total
     const getTotalPrice = document.getElementById('total-price');
     const totalPriceText = getTotalPrice.innerText;
     const getPrice = parseInt(totalPriceText);
     
     if (coupon === 'Couple 20') {
         //set total price  in the grand total container after discount
         const discount = (getPrice * 20) / 100;
         setInnerText('grand-total', getPrice - discount);
     }
     else if (coupon === 'NEW15') {
         //set total price  in the grand total container after discount
         const discount = (getPrice * 15) / 100;
         setInnerText('grand-total', getPrice - discount);
     }
     else {
         //set total price in the grand total container
         setInnerText('grand-total', getPrice);
         return alert('Please inter the valid coupon code')
     }
    
});



/*
// calculation the grand total cost 
function grandTotal(coupon) {
    // step-1:same ways to get grand total
    const getTotalPrice = document.getElementById('total-price');
    const totalPriceText = getTotalPrice.innerText;
    const getPrice = parseInt(totalPriceText);

    if (coupon === 'Couple 20') {
        //set total price  in the grand total container after discount
        const discount = (getPrice * 20) / 100;
        setInnerText('grand-total', getPrice - discount);
    }
    else if (coupon === 'NEW15') {
        //set total price  in the grand total container after discount
        const discount = (getPrice * 15) / 100;
        setInnerText('grand-total', getPrice - discount);
    }
    else {
        //set total price in the grand total container
        setInnerText('grand-total', getPrice);
        return alert('Please inter the valid coupon code')
    }
}
*/
/*
// hidden the homeScreen
const homeScreen = document.getElementById('main');
    homeScreen.classList.add('hidden');
    // show the modal
    const playScreen = document.getElementById('modal');
    playScreen.classList.remove('hidden');
*/
const seats = document.getElementsByClassName('kbd');
let count = 0;
const seatText = document.getElementById('total-seat').innerText;
let totalSeat = parseInt(seatText);
for (let seat of seats) {
    seat.addEventListener('click', function (event) {
        totalSeat -= 1;
        count += 1;
        if (count === 1) {
            const getPassenger = document.getElementById('passenger-btn');
            getPassenger.removeAttribute('disabled');
        }
        else if (count === 4) {
            const getApply = document.getElementById('apply-btn');
            getApply.removeAttribute('disabled');

        }
        else if (count > 4) {
            return alert('You can not buy more than 4 tickets');
        }
        setInnerText('cart-count', count);

        setInnerText('total-seat', totalSeat);

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
        // calculate the total price
        const totalPrice = totalCost('total-price', price);
        // set the total cost in total price container 
        setInnerText('total-price', totalPrice);
        // set total cost in the grand total container
        setInnerText('grand-total', totalPrice);

        // step-3: set the element in cart container 
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        selectedContainer.appendChild(ul);

    })

}