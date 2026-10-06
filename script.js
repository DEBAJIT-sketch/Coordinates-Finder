function getLocation() {

    // Check if the browser supports GPS
    if (!navigator.geolocation) {
        document.getElementById("status").textContent =
            "Geolocation is not supported by this browser.";
        return;
    }

    // Show loading message
    document.getElementById("status").textContent =
        "Finding your location...";

    // Get the current location
    navigator.geolocation.getCurrentPosition(

        // If location is successfully found
        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            // Show latitude
            document.getElementById("latitude").textContent =
                latitude.toFixed(6) + "°";

            // Show longitude
            document.getElementById("longitude").textContent =
                longitude.toFixed(6) + "°";

            // Show GPS accuracy
            document.getElementById("accuracy").textContent =
                Math.round(accuracy) + " meters";

            // Show success message
            document.getElementById("status").textContent =
                "Location found successfully!";
        },

        // If there is an error
        function(error) {

            if (error.code === 1) {

                document.getElementById("status").textContent =
                    "Location permission denied.";

            } else if (error.code === 2) {

                document.getElementById("status").textContent =
                    "Location is unavailable.";

            } else if (error.code === 3) {

                document.getElementById("status").textContent =
                    "Location request timed out.";

            } else {

                document.getElementById("status").textContent =
                    "Unable to get your location.";
            }
        },

        // GPS options
        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }
    );
}