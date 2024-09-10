import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { BriefStoreOnMap } from "./component";

type MarkerType = {
    lat: number;
    lng: number;
    branchId: string;
};

interface MapGraphProps {
    mapType?: "default" | "satellite";
    markers: MarkerType[];
}

export default function MapGraph({ mapType = "default", markers }: MapGraphProps) {
    const [selectedMarker, setSelectedMarker] = useState<MarkerType | null>(
        null
    );
    const [mapRegion, setMapRegion] = useState({
        latitude: 7.1762595,
        longitude: 4.7280668,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const handleMarkerClick = (marker: MarkerType) => {
        setSelectedMarker(marker === selectedMarker ? null : marker); // Toggle marker
    };

    const mapTypes: { [key: string]: "standard" | "satellite" } = {
        default: "standard",
        satellite: "satellite",
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={mapRegion}
                mapType={mapTypes[mapType]}
                onRegionChangeComplete={(region) => setMapRegion(region)}
            >
                {markers.map((marker, i) => (
                    <Marker
                        key={i}
                        coordinate={{
                            latitude: marker.lat,
                            longitude: marker.lng,
                        }}
                        onPress={() => handleMarkerClick(marker)}
                    >
                        {selectedMarker &&
                            selectedMarker.lat === marker.lat && (
                                <Callout
                                    onPress={() => setSelectedMarker(null)}
                                >
                                    <View>
                                        {/* Render custom callout content */}
                                        <BriefStoreOnMap
                                            branchId={marker.branchId}
                                            open={Boolean(i)}
                                            image={`"https://res.cloudinary.com/xmart/image/upload/v1725629779/corisio/demo/2_nobt7k.png"`}
                                            storeView={`"https://res.cloudinary.com/xmart/image/upload/v1725629779/corisio/demo/2_nobt7k.png"`}
                                        />
                                    </View>
                                </Callout>
                            )}
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}

// Add custom map styles if needed
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position:"absolute"
    },
    map: {
        width: "100%",
        height: "100%",
    },
});
