import { Image, Text, View } from "react-native";

type prop = {
    type: string;
    brief: string;
    onPress: any;
};

const images: any = {
    card: require("../../assets/card.png"),
    crypto: require("../../assets/crypto.png"),
};

export const OptionList = ({ type, brief }: prop) => {
    return (
        <View
            style={{ paddingHorizontal: 5, paddingVertical: 30, width: "50%" }}
        >
            <View
                style={{
                    backgroundColor: "#F5F5F5",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 25,
                    borderRadius: 5,
                }}
            >
                <Image
                    source={images[type]}
                    style={{ width: 80, height: 80 }}
                />
                <Text
                    style={{
                        width: "80%",
                        textAlign: "center",
                        lineHeight: 20,
                        marginTop: 20,
                        color: "#1F1F1F",
                    }}
                >
                    {brief}
                </Text>
            </View>
        </View>
    );
};
