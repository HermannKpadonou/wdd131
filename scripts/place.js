const temperature = 28; 
  const windSpeed = 10; 

  function calculateWindChill(temp, wind) {
      if (wind > 4.8) {
          const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
          return Math.round(windChill) + " °C";
      } else {
          return "N/A";
      }
  }

  document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);