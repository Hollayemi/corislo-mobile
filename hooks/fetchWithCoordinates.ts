import useSWR from "swr";
import useGeolocation from "./useGeolocation";
import { useEffect, useState } from "react";


interface ProductResponse {
    result: object;
    // Add other fields if needed
}


// Define types for SWR response
interface SWRResponse<T> {
    data: ProductResponse;
    error: any;
    isLoading: boolean;
}


// Define type for coordinates
interface Coordinates {
    latitude: number | null;
    longitude: number | null;
}

const useSWRWithCoordinates = <T>(url: string) => {
    // Get coordinates and loading state from the useGeolocation hook
    const {
        coordinates: { latitude: lat, longitude: lng },
        loading,
    } = useGeolocation();
    // State to store formatted latitude
    const [formattedLat, setFormattedLat] = useState<string>("");

    useEffect(() => {
        if (lat !== null) {
            setFormattedLat(lat.toFixed(4));
        }
    }, [lat]);

    // SWR hook for fetching data
    const { data , error } = useSWR<T>(lat && lng ? [url, lat, lng] : null);

    return {
        data,
        error,
        isLoading: loading || (!data && !error),
        status: !formattedLat
            ? "Getting your current location"
            : "Loading data...",
        isset: formattedLat,
        lat,
        lng,
    };
};

export default useSWRWithCoordinates;
