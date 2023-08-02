import React, { useEffect, useState } from 'react';

interface Location {
  city: string;
  temperature: string;
  locationName: string;
  comfort: string;
}

const WeatherComponent = () => {
  const [selectCity, setSelectCity] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [locationName, setLocationName] = useState<string>(''); //"elementName": "MinT"
  const [comfort, setComfort] = useState<string>('');           //"elementName": "CI"
  const [locations, setLocations] = useState<Location[]>([]);

  const url =
    'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-90C3C51A-2913-4342-AAE5-546EA9565BA6';

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const locationsData = data.records.location;

        const locations: Location[] = locationsData.map((location: { locationName: any; weatherElement: any[]; }) => ({
          city: location.locationName,
          temperature: location.weatherElement.find((el: any) => el.elementName === 'MinT').time[0].parameter.parameterName,
          locationName: location.locationName,
          comfort: location.weatherElement.find((el: any) => el.elementName === 'CI').time[0].parameter.parameterName,
        }));

        const initialCity = locations[5].city;
        const { temperature, locationName, comfort } = locations.find(location => location.city === initialCity)!;

        setSelectCity(initialCity);
        setTemperature(temperature);
        setLocationName(locationName);
        setComfort(comfort);
        setLocations(locations);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    setSelectCity(selectedCity);

    const { temperature, locationName, comfort } = locations.find(location => location.city === selectedCity)!;

    setTemperature(temperature);
    setLocationName(locationName);
    setComfort(comfort);
  };

  return (
      
    <div className="flex justify-center">
          <div className="bg-green-500 bg-opacity-70 px-16 py-20 self-center">
            <select 
            className="
            text-black 
              block w-full 
              py-2 px-3 border 
              bg-gradient-to-r 
            from-green-400
            to-blue-500
            border-gray-300 
              rounded-md shadow-sm 
              focus:outline-none 
            focus:ring-blue-500 
            focus:border-blue-500
            "
            value={selectCity} onChange={handleCityChange}
            >
            {locations.map(location => (
              <option key={location.city} value={location.city}>
                {location.city}
              </option>
            ))}
          
            </select>
          
            <div>
              <div>
                <p>{locationName}</p>
              </div>

              <div className="text-6xl font-bold">
                <h1>{temperature}°C</h1>
              </div>

              <div>
                <p>{comfort}</p>
              </div>

            </div>
          </div>
    </div>
    
  );
}

export default WeatherComponent;
