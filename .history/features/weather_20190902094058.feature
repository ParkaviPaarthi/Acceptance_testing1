@Weather_Forecast
Feature: To Find Weather forecast

# Scenario Outline:To Find 5 day Weather forecast using city name

#     Given a user should launch the weather forecast application
#     When user enter the "<city>" name then weather forecast for the cities will be displayed

#    Examples:
#       |city|
#       |perth|

# Scenario Outline:To get 3 hourly Weather forecast using day

#     Given a user should launch the weather forecast application
#     When user select the <day> then three hourly forecast for the particular days will be displayed
#     When user select the <day> again then three hourly forecast for the particular days will be hidden
#    Examples:
#       |day|
#       |1|
    #   |2|

    # Scenario Outline:To Summarise the dailyforecast for the 3 hour data
    # Given a user should launch the weather forecast application
    # When user select the <day> then three hourly forecast for the particular days will be displayed
    # Then user should see <day> the three hour max_min temperature,wind,cloud and rainfall condition for the particular data

    # Examples:
    # |day|
    # |1|

  #   Scenario Outline:Error Condition to Find 5 day Weather forecast using city name

  #   Given a user should launch the weather forecast application
  #   When user enter the "<city>" name which is not available in the application then it should throw the error

  #  Examples:
  #     |city|
  #     |Newyork|

    Scenario Outline:Unhappy path to get 3 hourly Weather forecast using day

    Given a user should launch the weather forecast application
    When user select the <day_count> and <day_name> which is not present then error message should be thrown accordingly
    
   Examples:
      |day_count|day_name|
      |1|Mon|

      