//http://api.weatherapi.com/v1/current.json?key=1cbd14c718194a54b5a64542240212&q=Kolkata&aqi=no

const temperatureFeild=document.querySelector(".temp");
const locationFeild=document.querySelector(".time-location p");
const dataFeild=document.querySelector(".time-location span");
const weatherFeild=document.querySelector(".condition p");
const searchFeild=document.querySelector(".search-area");
const form=document.querySelector("form");

 form.addEventListener('submit',searchForLocation);

let targetLocation='';

const fetchResults=async(targetLocation)=>{
  let url=`http://api.weatherapi.com/v1/current.json?key=1cbd14c718194a54b5a64542240212&q=${targetLocation}&aqi=no`;
  const res=await fetch(url);
  const result= await res.json();

  let locationName=result.location.name;
  let time=result.location.localtime;
  let temp=result.current.temp_c;
  let condition=result.current.condition.text;

  updateDetails(temp,locationName,time,condition);
};

function updateDetails(temp,locationName,time,condition){

let splitDate=time.split(' ')[0];
let splitTime=time.split(' ')[1];
let currentDay=getDayName(new Date(splitDate).getDay());

  temperatureFeild.innerText=temp;
  locationFeild.innerText=locationName;
  dataFeild.innerText=`${splitDate} ${currentDay} ${splitTime}`;
  weatherFeild.innerText=condition;
}

function searchForLocation(e){
  e.preventDefault();
  targetLocation=searchFeild.value;
  fetchResults(targetLocation);
};

function getDayName(number){
  switch(number){
    case 0:
      return 'Sunday'
      case 1:
      return 'Monday'
      case 2:
      return 'Tuesday'
      case 3:
      return 'wednesday'
      case 4:
      return 'Thrusday'
      case 5:
      return 'Friday'
      case 6:
      return 'Saturday'
  }
}
