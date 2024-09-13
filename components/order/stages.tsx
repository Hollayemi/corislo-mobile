import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Assuming you are using this for icons
import { nextSteps, orderStatusMessages } from "./data";
import { formatDate, formatDateToMonthShort } from "../../utils/format";

interface OrderStagesProps {
    at: number;
    orderSlug?: string;
    delivery: string;
}

interface StageProps {
    stage: string;
    isLast?: boolean;
    date?: string;
    details?: boolean;
}

export const OrderStages = ({ status, details, currStatus }: any) => {
    const Stage: React.FC<StageProps> = ({ stage, isLast, date, details }) => {
        const pickIcon: any = {
            1: { icon: "currency-usd", name: "Paid" },
            2: { icon: "box", name: "Packaged" },
            3: { icon: "truck-delivery", name: "Pickable" },

            4: { icon: "package-variant", name: "Received" },
            5: { icon: "star", name: "Review" },
        };
        const styleContentContainer = isLast
            ? {
                  borderLeftWidth: 0,
                  borderLeftColor: details ? "#000" : "#eee",
              }
            : {};
        const { title, note } =
            orderStatusMessages[stage.replaceAll(" ", "_").toLowerCase()] || {};

        const state = {
            1: styles.completed,
            2: styles.current,
            3: styles.upcoming,
        };

        return (
            <View style={styles.stageContainer}>
                <View style={styles.stepContainer}>
                    <View style={styles.stageWrapper}>
                        <View style={styles.iconWrapper}>
                            <View
                                style={[
                                    styles.iconCircle,
                                    !details
                                        ? isLast
                                            ? state[2]
                                            : state[1]
                                        : state[3],
                                ]}
                            >
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 50,
                                        backgroundColor: "white",
                                    }}
                                ></View>
                            </View>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        ...styles.contentContainer,
                        ...styleContentContainer,
                    }}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "flex-end" }}
                    >
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.date}>
                            {date
                                ? formatDateToMonthShort(date, true, {
                                      month: "long",
                                      year: "numeric",
                                  })
                                : "- - - "}
                        </Text>
                    </View>
                    <Text style={styles.note}>{!details ? note : "- - -"}</Text>
                </View>
            </View>
        );
    };

    const curr = currStatus?.replaceAll(" ", "_").toLowerCase();
    return (
        <View style={{ marginTop: 10 }}>
            {status.map((each: any, i: any) => (
                <Stage
                    stage={each.state}
                    date={each.date || each.data}
                    isLast={details ? false : i === status.length - 1}
                    key={i}
                />
            ))}
            {details &&
                nextSteps[curr]?.map((each: any, i: any) => (
                    <Stage
                        stage={each}
                        key={i}
                        isLast={i === nextSteps[curr]?.length - 1}
                        details
                    />
                ))}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    stageContainer: {
        flexDirection: "row",
        paddingHorizontal: "5%",
    },
    stepContainer: {
        flexDirection: "column",
        alignItems: "center",
        zIndex: 50,
    },
    stageWrapper: {
        flexDirection: "column",
        alignItems: "center",
        // flex: 1,
    },

    bar: {
        height: 8,
        width: 2,
        borderLeftWidth: 2,
        borderLeftColor: "#ddd",
    },
    iconWrapper: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    iconCircle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    iconLabel: {
        position: "absolute",
        top: 45,
        fontSize: 12,
        textAlign: "center",
        width: 60,
    },
    completed: {
        backgroundColor: "#2A347E",
    },
    current: {
        backgroundColor: "#FDB415",
    },
    upcoming: {
        backgroundColor: "#eee",
    },

    // content
    contentContainer: {
        paddingHorizontal: 10,
        paddingLeft: 20,
        borderLeftWidth: 3,
        marginLeft: -11,
        borderLeftColor: "#eee",
        borderStyle: "dashed",
        // marginTop: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
    },
    date: {
        fontWeight: "400",
        lineHeight: 23,
        marginLeft: 8,
    },
    note: {
        fontWeight: "400",
        lineHeight: 23,
        marginTop: 6,
        color: "#7E7E7E",
        paddingBottom: 30,
    },
});
