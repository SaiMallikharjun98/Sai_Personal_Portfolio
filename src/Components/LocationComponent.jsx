import { useState, useEffect } from "react";

// ✅ Load environment variables correctly
const apiKey = import.meta.env.VITE_API_KEYS;
const baseUrl = import.meta.env.VITE_API_URL;

const LocationComponent = () => {
  const [location, setLocation] = useState("Fetching location...");

  useEffect(() => {
    if (!apiKey || !baseUrl) {
      console.error("❌ API Key or Base URL is missing!");
      setLocation("API Key or Base URL is missing.");
      return;
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // ✅ Construct the API URL correctly
          const apiUrl = `${baseUrl}/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

          try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
              throw new Error(`HTTP Error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("API Response:", data); // Debugging

            if (data.results && data.results.length > 0) {
              setLocation(data.results[0].formatted);
            } else {
              setLocation("Location not found.");
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            setLocation("Failed to fetch location.");
          }
        },
        (error) => {
          console.error("Geolocation error:", error.message);
          setLocation("Location permission denied.");
        }
      );
    } else {
      setLocation("Geolocation is not supported.");
    }
  }, []);

  return <div>{location}</div>;
};

export default LocationComponent;
