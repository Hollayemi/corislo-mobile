import * as Location from "expo-location";
import { useState, useEffect } from "react";

const useGeolocation = (interval: number = 120000) => {
    const [coordinates, setCoordinates] = useState<{
        latitude: number | null;
        longitude: number | null;
    }>({ latitude: null, longitude: null });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const updateCoordinates = async () => {
            try {
                const { status } =
                    await Location.requestForegroundPermissionsAsync();
                if (status !== "granted") {
                    setError("Permission to access location was denied");
                    setLoading(false);
                    return;
                }

                const location = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High,
                });
                setCoordinates({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };

        updateCoordinates(); // Initial call
        const intervalId = setInterval(updateCoordinates, interval);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [interval]);

    return { coordinates, loading, error };
};

export default useGeolocation;
