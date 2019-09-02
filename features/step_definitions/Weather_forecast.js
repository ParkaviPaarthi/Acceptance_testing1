var { Before, Given, When, Then,AfterAll} = require('cucumber')

var seleniumWebdriver = require('selenium-webdriver');

test = require('selenium-webdriver/testing');

var Weather_check=require('../action_file/weather_app.js');

Given("a user should launch the weather forecast application",function(){
    Weather_check.get_Driver();
    console.log("Weather app is launched");
})

When('user enter the {string} name then weather forecast for the cities will be displayed',function(city){
  
 Weather_check.city_Name(city);
})

When('user select the {int} then three hourly forecast for the particular days will be displayed',function(day){
    
    Weather_check.day_Selector(day);

})

When('user select the {int} again then three hourly forecast for the particular days will be hidden',function(day){
    
    Weather_check.day_Hidden(day);

})

Then('user should see {int} the three hour max_min temperature,wind,cloud and rainfall condition for the particular data',function(day){
    Weather_check.weather_Condition(day);
})

When('user enter the {string} name which is not available in the application then it should throw the error',function(city){
  
    Weather_check.cityErr_Name(city);
   })

When (/^user select the (.*) and (.*) which is not present then error message should be thrown accordingly$/,async function(day_count,day_name){

    Weather_check.dayErr_name(day_count,day_name);
})
   


