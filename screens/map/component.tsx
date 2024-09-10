import React from "react";
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-ratings";
import useSWR from "swr";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Loader from "../../components/loader";

interface BriefStoreOnMapProps {
    image: string;
    open?: boolean;
    branchId: string;
    storeView?: string;
}

interface StoreInfo {
    businessName?: string;
    feedback?: { averageRating?: number };
}

export const BriefStoreOnMap: React.FC<BriefStoreOnMapProps> = ({
    image,
    open,
    branchId,
    storeView,
}) => {
    const { data, isLoading } = useSWR<{ data: StoreInfo }>(
        `/branch/info?branchId=${branchId}`
    );
    const info = data?.data || {};

    if (isLoading) {
        return (
            <View style={{ padding: 10 }}>
                <Loader />
            </View>
        );
    }

    return (
        <View>
            {storeView && (
                <Image
                    source={{
                        uri: storeView,
                    }}
                    style={{
                        width: "100%",
                        height: 100,
                        borderRadius: 10,
                        marginBottom: 8,
                    }}
                    resizeMode="cover"
                />
            )}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    source={{
                        uri: image,
                    }}
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        borderWidth: 1,
                    }}
                />
                <View>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontWeight: "bold",
                            paddingHorizontal: 8,
                            color: "#000",
                            width: 160,
                        }}
                    >
                        {info.businessName}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 4,
                            marginLeft: 6,
                        }}
                    >
                        <Icon
                            name={open ? "clock" : "clock-outline"}
                            size={15}
                            color={open ? "green" : "red"}
                        />
                        <Text
                            style={{
                                marginLeft: 4,
                                fontSize: 12,
                                color: open ? "green" : "red",
                            }}
                        >
                            {open ? "Open now" : "Closed"}
                        </Text>
                        <Text
                            style={{
                                fontSize: 11,
                                color: "#000",
                                paddingHorizontal: 8,
                            }}
                        >
                            Mon - Sat, 09:00 - 18:00
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

interface BriefStoreWithFunctionsProps {
    image: string;
    info: StoreInfo;
    setStage: (stage: string) => void;
}

export const BriefStoreWithFunctions: React.FC<
    BriefStoreWithFunctionsProps
> = ({ image, info, setStage }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                    source={{ uri: image }}
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: 28,
                        borderWidth: 1,
                    }}
                />
                <View>
                    <Text
                        numberOfLines={1}
                        style={{
                            fontWeight: "bold",
                            paddingHorizontal: 8,
                            color: "#000",
                            width: 130,
                        }}
                    >
                        {info.businessName}
                    </Text>
                    {info.feedback?.averageRating && (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginLeft: 6,
                            }}
                        >
                            <Rating
                                type="star"
                                startingValue={info.feedback.averageRating}
                                readonly
                                imageSize={12}
                                fractions={1}
                            />
                            <Text
                                style={{
                                    fontSize: 13,
                                    fontWeight: "bold",
                                    paddingHorizontal: 8,
                                    color: "#000",
                                }}
                            >
                                {info.feedback.averageRating.toFixed(1)}/5
                            </Text>
                        </View>
                    )}
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "#003366",
                    }}
                    onPress={() => setStage("direction")}
                >
                    <Icon name="arrow-left" size={20} color="#003366" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 8,
                        borderWidth: 1,
                        borderColor: "#003366",
                    }}
                    onPress={() => setStage("store")}
                >
                    <Icon name="link" size={20} color="#003366" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "#003366",
                    }}
                >
                    <Icon name="share" size={20} color="#003366" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const StoreDetails1: React.FC = () => {
    const { data, isLoading } = useSWR<{ data: any }>(
        "/branch/info?branchId=655f40b1ada0620d29ca6260"
    );
    const info = data?.data || {};

    if (isLoading) {
        return (
            <View style={{ padding: 10 }}>
                <ActivityIndicator size="small" color="#0000ff" />
            </View>
        );
    }

    const SpaceBetween: React.FC<{ title: string; info: string }> = ({
        title,
        info,
    }) => (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
            }}
        >
            <Text style={{ fontSize: 12, color: "#A9A9A9", width: 80 }}>
                {title}
            </Text>
            <Text
                style={{
                    fontSize: 12,
                    color: "#696969",
                    textAlign: "right",
                    flex: 1,
                }}
            >
                {info}
            </Text>
        </View>
    );

    return (
        <View style={{ borderWidth: 1, borderRadius: 10 }}>
            <View style={{ borderBottomWidth: 1, padding: 10 }}>
                <BriefStoreOnMap
                    image="/images/misc/shop/1.png"
                    branchId="655f40b1ada0620d29ca6260"
                />
            </View>
            <View style={{ padding: 10 }}>
                <SpaceBetween
                    title="Phone Number:"
                    info="+234 (801) 234 5678"
                />
                <SpaceBetween
                    title="Address:"
                    info={info.address || "Not available"}
                />
                <SpaceBetween
                    title="Email Address:"
                    info="shoplocal@sample.xyz"
                />
            </View>
        </View>
    );
};
