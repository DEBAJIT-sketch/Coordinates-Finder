function getLocation() {

    if (!navigator.geolocation) {
        document.getElementById("status").textContent =
            "Geolocation is not supported by this browser.";
        return;
    }

    document.getElementById("status").textContent =
        "Finding your location...";

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;

            document.getElementById("latitude").textContent =
                latitude.toFixed(6) + "°";

            document.getElementById("longitude").textContent =
                longitude.toFixed(6) + "°";

            document.getElementById("accuracy").textContent =
                Math.round(accuracy) + " meters";

            document.getElementById("status").textContent =
                "Location found successfully!";
        },

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

        {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 0
        }
    );
}
