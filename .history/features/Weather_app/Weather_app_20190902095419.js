var seleniumWebdriver = require('selenium-webdriver');
var By = seleniumWebdriver.By
var Keys=seleniumWebdriver.Key
var chromedriver = require('chromedriver');
var url = "http://localhost:3000/";
var assert = require('assert');
var util = require('util');
var until = require('selenium-webdriver').until;
var promise = require('selenium-webdriver').promise;
var driver

class Weather {
    constructor() {
        driver = new seleniumWebdriver.Builder().withCapabilities({
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true,
            chromeOptions: {
                args: ['start-maximized', 'disable-extensions']
            },
            path: chromedriver.path
        }).build();
    };
    get_Driver() {
        driver.get(url);
    }
     city_Name(city) {

        = driver.wait(until.elementLocated(By.xpath("//input[@id='city']")), 5 * 1000).then(city_name => {
            city_name.clear();
            city_name.sendKeys(city+'\n');
            
            //*[@id="root"]/div/div[1]/div[2]/div[3]/span[1]/span

        })
        setTimeout(function() {
            driver.close();
            console.log('All browsers closed successfully');
        }, 20000);
        return validate;
    }
    day_Selector(day) {
        // setTimeout(function(){
        //     console.log('waiting time');
        // },10000)
        driver.wait(until.elementLocated(By.xpath("//*[@id='root']/div/div["+day+"]/div[1]/span[1]/span[1]")), 1000).then(day_select => {


            day_select.click();

            //driver.executeScript("document.getElementById('//id of element').setAttribute('style', 'visibility: hidden;')");
            //let count = 1;
            let len = 4;

            for (let j = 1; j < len; j++) {
                console.log('j -->', j);

                driver.wait(until.elementLocated(By.xpath("//*/div/div/div["+day+"]/div[2]/div["+j+"]/span[1]/span")),3000).getText()
                    .then((text) => {
                        console.log('text-->', text);
                    }).catch((e) => {
                        console.log(e)
                    });

            }
            })
            

    }

    day_Hidden(day){
        
        driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div['+day+']/div[1]/span[1]/span[1]')), 5*1000).then(day_select => {

          day_select.click();

         var ele=driver.findElement(By.xpath("//*/div/div/div["+day+"]/div[2]/div[1]/span[1]/span"));
          if(ele.is_Enabled()){
              console.log('enbaled');
          }
          else{
              console.log('disabled');
          }
          var elements=driver.findElement(By.xpath("//*/div/div/div["+day+"]/div[2]/div[1]/span[1]/span"))
            if(elements.length > 0){
                throw new Error('The Element was found!');
              } else {
                console.log('true');
              }
           
        
    })
    setTimeout(function() {
        driver.close();
        console.log('All browsers closed successfully');
    }, 10000);
    }

    weather_Condition(day){
        driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div['+day+']/div[1]/span[3]/span[1]')),5*1000).getText()
        .then((text)=>{
            console.log('Maximum Temperature-->', text);
        }).catch((e) => {
            console.log(e)
        });
        // setTimeout(function(){
        //     console.log("hiii");
        // },3000)
        driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div['+day+']/div[1]/span[3]/span[2]')),5*1000).getText()
        .then((text)=>{
            console.log('Minimum Temperature-->', text);
        }).catch((e) => {
            console.log(e)
        });
        driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div['+day+']/div[1]/span[4]/span[1]')),5*1000).getText()
        .then((text)=>{
            console.log('Speed', text);
        }).catch((e) => {
            console.log(e)
        });
        driver.wait(until.elementLocated(By.xpath("//*[local-name()='svg' and @class='icon' and @data-test='description-"+day+"']")),5*1000).getAttribute("aria-label")
        .then((text)=>{
            console.log('Clouds', text);
        }).catch((e) => {
            console.log(e)
        });
        driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div['+day+']/div[1]/span[5]/span[1]')),5*1000).getText()
        .then((text)=>{
            console.log('Rainfall', text);
        }).catch((e) => {
            console.log(e)
        });
        driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div['+day+']/div[1]/span[5]/span[2]')),5*1000).getText()
        .then((text)=>{
            console.log('Rainfall-min-->', text);
        }).catch((e) => {
            console.log(e)
        });
        driver.wait(until.elementLocated(By.xpath("//*[@class='rmq-5ea3c959 direction' and @data-test='direction-"+day+"']//*[@viewBox='0 0 32 32']")),5*1000).getAttribute("style")
        .then((text)=>{
            console.log('Wind_Directions and width', text);
            
        }).catch((e) => {
            console.log(e)
        });
        setTimeout(function() {
            driver.close();
            console.log('All browsers closed successfully');
        }, 10000);
        }

         cityErr_Name(city) {

            driver.wait(until.elementLocated(By.xpath("//input[@id='city']")), 5 * 1000).then(city_name => {
                city_name.clear();
                city_name.sendKeys(city+'\n');
                driver.wait(until.elementLocated(By.xpath("//*[@data-test='error']")),5*1000).getText()
                .then((text)=>{
                    console.log('Error Message:', text);
                    
                    
                }).catch((e) => {
                    console.log(e)
                    
                });
              
            })
            setTimeout(function() {
                driver.close();
                console.log('All browsers closed successfully');
            }, 10000);
        }

       async dayErr_name(day_count,day_name) {

           var ele= await driver.findElement(By.xpath("//*[@class='name' and @data-test='day-"+day_count+"']")).getText();
           
           if(JSON.stringify(ele)!=JSON.stringify(day_name)){
            console.log("The day is not present in the webpage or application please choose the another one");
           }
        else {
            try{
                console.log("day is present noww");
            }
                catch(e){
                    console.log(e);
                      }
        }
        
          
               
       // }
              
         
            setTimeout(function() {
                driver.close();
                console.log('All browsers closed successfully');
            }, 10000);
        }
        


    
}

module.exports = new Weather;


