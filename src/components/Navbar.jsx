import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            // Replace with your API endpoint
            const response = await fetch(
              `https://yourapi.com/get-location?lat=${latitude}&lng=${longitude}&apikey=be5164f5f3ce45ed9330f`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer be5164f5f3ce45ed9330f",
                },
              }
            );

            if (!response.ok) {
              throw new Error("Failed to fetch location");
            }

            const data = await response.json();

            // Assuming your API returns a "city" field
            if (data && data.city) {
              setLocation(data.city);
            } else {
              setError("Location not available");
            }
          } catch (err) {
            setError("Failed to fetch location details.");
            console.log(err);
          }
        },
        () => {
          setError("Unable to retrieve your location.");
        }
      );
    };

    fetchLocation();
  }, []);

  return (
    <header className="w-full bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">BroFree</h1>
          <button className="text-sm hover:text-blue-400">
            {error || location}
          </button>
          <button className="text-sm hover:text-blue-400">About</button>
        </div>
        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="text-sm hover:text-green-400">Login</button>
          <button className="text-sm hover:text-red-400">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
