function vacationBookList (input){
let numPages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let days = Number(input[2]);
let hoursNeeded = numPages / pagesPerHour;
console.log(hoursNeeded / days)
}

vacationBookList(["432", "15", "4"])