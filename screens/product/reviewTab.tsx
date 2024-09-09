import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import Coment from "./Coment";
import Rating from "../../components/rating";
import MyPagination from "../../components/pagination";
import OptionsMenu from "../../components/option-menu";

interface RatingDisplayLengthProps {
    rate: number;
    percentage: number;
    freq: number;
}

const RatingDisplayLength: React.FC<RatingDisplayLengthProps> = ({
    rate,
    percentage,
    freq,
}) => {
    const getColor = (color: number): string => {
        if (color >= 85) return "green";
        if (color >= 70) return "teal";
        if (color >= 50 && color < 70) return "blue";
        if (color > 30 && color < 50) return "gray";
        return "red";
    };

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 12,
            }}
        >
            <Text>{rate}</Text>
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 10,
                    backgroundColor: "#f0f0f0",
                    height: 4,
                }}
            >
                <View
                    style={{
                        backgroundColor: getColor(percentage),
                        width: `${percentage}%`,
                        height: "100%",
                    }}
                />
            </View>
            <Text>{freq} Ratings</Text>
        </View>
    );
};

const calcPercentage = (total: number, occurrences: number): number => {
    return total === 0 ? 0 : (occurrences / total) * 100;
};

interface ReviewTabProps {
    summary: any;
    page: number;
    showingPage: any;
}

export const ReviewTab: React.FC<ReviewTabProps> = ({
    summary,
    page,
    showingPage,
}) => {
    const [option, setOption] = useState<string>("March 2023 - October 2023");

    const { reviews, average, sum, ...others } = summary;

    return reviews?.length ? (
        <ScrollView>
            <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        Product Review ({sum})
                    </Text>
                    <OptionsMenu
                        others={{ placeholder: "Select Date Range" }}
                        options={[
                            "January 2021 - December 2021",
                            "March 2022 - October 2022",
                            "March 2023 - October 2023",
                        ]}
                        setSelectedValue={setOption}
                        selectedValue={option}
                    />
                </View>
               
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 10,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text>Average Rating</Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 10,
                            }}
                        >
                            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
                                {average.toFixed(1) || 4.7}
                            </Text>
                            <Rating rate={average || 0} size={15} />
                        </View>
                        <Text>Average rating this year</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {[5, 4, 3, 2, 1].map((rate) => (
                            <RatingDisplayLength
                                key={rate}
                                rate={rate}
                                percentage={calcPercentage(sum, summary[rate])}
                                freq={summary[rate]}
                            />
                        ))}
                    </View>
                </View>

                {summary.reviews.map((item: any, i: number) => (
                    <Coment
                        id={i}
                        rating={item.rate}
                        comment={item.message}
                        date={item.date}
                        user={item.username}
                        image={item.picture || "/images/misc/no-profile.png"}
                    />
                ))}

                <MyPagination
                    setCurrentPage={showingPage}
                    currentPage={page}
                    totalItems={sum || 0}
                    itemsPerPage={7}
                />
            </View>
        </ScrollView>
    ) : (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: 200,
            }}
        >
            <Text>No Reviews Yet</Text>
        </View>
    );
};
