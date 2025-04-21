//your JS code here. If required.
let btn=document.getElementById("btn");
let divData=document.getElementById("weatherData");
//ba6d222a2a6452860e6a43c3837ce0d7
let weatherData="";
const fetchData= async ()=>{
       try{
          const key="ba6d222a2a6452860e6a43c3837ce0d7"
          const city="London"
          const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
          const data= await response.json();
          weatherData=data.weather[0].main;
          console.log(weatherData);
       }
       catch(error){
          console.log("error is: ",error);
       }
       divData.innerHTML=`
       Current weather in London: ${weatherData}
    `
}
btn.addEventListener("click", ()=>{
      fetchData();
      
})