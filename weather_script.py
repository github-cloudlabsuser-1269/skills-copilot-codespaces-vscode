import requests

#Fetch weather data
api_key = "your_api_key"
city = "your_city"
url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

response = requests.get(url)
data = response.json()

if response.status_code == 200:
    temperature = data['main']['temp']
    humidity = data['main']['humidity']
    weather_condition = data['weather'][0]['description']
    print(f"Temperature: {temperature}°C")
    print(f"Humidity: {humidity}%")
    print(f"Weather Condition: {weather_condition}")
else:
    print("Failed to fetch weather data")