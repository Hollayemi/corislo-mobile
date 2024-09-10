import { View } from "react-native";
import MapGraph from "./screen";
import { useState } from "react";
import { SearchBox2 } from "../../components/search";
import Button from "../../components/button";

export default function Map() {
    const [mapType, setMapType] = useState("default");
    const [search, setSearch] = useState("");
    const [markers, setMarkers] = useState([
        {
            lat: 7.1762595,
            lng: 4.7260668,
            info: "Coristen",
            branchId: "655f40b1ada0620d29ca6260",
        },
        {
            lat: 7.1768595,
            lng: 4.7290668,
            info: "Marker 2",
            branchId: "655f40b1ada0620d29ca6260",
        },
        {
            lat: 7.1768393,
            lng: 4.7280468,
            info: "Corisio",
            branchId: "655f40b1ada0620d29ca6260",
        },
    ]);
    return (
        <View style={{  }}>
            <MapGraph markers={markers} />
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                <View style={{ paddingHorizontal:10, justifyContent: "center", flexDirection: "row" }}>
                    <SearchBox2
                        placeholder="Search"
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                        mystyles={{ position: "absolute", top: 5, zIndex: 40, width: "100%" }}
                    />
                </View>
                <Button
                    title="Set your location"
                    mystyles={{ marginBottom: 15, marginHorizontal: 10 }}
                    onPress={() => {}}
                    // disabled={!Boolean(selected)}
                />
            </View>
        </View>
    );
}
