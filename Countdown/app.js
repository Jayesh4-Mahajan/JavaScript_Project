const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMoth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 5, 23, 11, 30, 0);
const futureDate = new Date(tempYear,tempMoth,tempDay+10,11,30,0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway end on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in milliseconds
const futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  const today =  new Date().getTime();
  // console.log(today);
  const t = futureTime - today;
  // console.log(t);
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  let days = Math.floor(t/oneDay);
  let hours = (t % oneDay)/oneHour;
  hours = Math.floor(hours);
  // console.log(hours);
  let minutes = Math.floor((t % oneHour)/oneMinute);
  let seconds = Math.floor((t % oneMinute)/1000);

  // set values array
  const values = [days,hours,minutes,seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  };

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  
  if(t<0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</hr>`
  }
};

//countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime()