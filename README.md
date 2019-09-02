This application displays the 5 day weather forecast for a given location.

### Features

* Enter city name, get 5 day weather forecast
* Select day, get 3 hourly forecast
* Select day again, hide 3 hourly forecast
* Daily forecast should summarise the 3 hour data:
  * Most dominant (or current) condition
  * Most dominant (or current) wind speed and direction
  * Aggregate rainfall
  * Minimum and maximum temperatures

### Additionally added the below mentioned error scenario in feature file
* Enter the city name ,which is not exist ,
* Enter the days which is not present in the application.

## Had implemented all the below Bdd scenarios and step_definitions in the feature file.
./features
./step_definitions


### Running the app locally

You'll need node and npm installed - first off, install the required dependencies:

    $ npm install

To start up the application:

    $ npm run develop

To execute the feature file
  
    $ npm test



### Reports will be find in below folder
./reports