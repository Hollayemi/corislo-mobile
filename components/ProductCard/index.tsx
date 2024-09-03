import React from "react";
import { Image, Text, View } from "react-native";
import Rating from "../rating";

type prop = {
  image?: string;
  category?: boolean;
  prodName: string;
  price?: string | number;
  oldPrice?: string | number;
  rating?: number;
  off?: string;
  type?: string;
  noMargin?: boolean;
};

function ProductCard({
  category,
  off,
  prodPrice,
  oldPrice,
  rating,
  prodName,
  type,
  noMargin,
}: any) {
  return (
    <View
      style={{
        marginVertical: 20,
        position: "relative",
        // flexBasis: category ? "23%" : "30%",
        maxWidth: category ? 80 : "auto",
        minWidth: category ? 80 : 100,
        minHeight: 100,
        marginHorizontal: noMargin ? 0 : 10,

        alignItems: category ? "center" : "flex-start",
      }}
    >
      {type === "flash" ? (
        <Text
          style={{
            color: "#ff4141",
            fontSize: 8,
            fontWeight: "500",
            lineHeight: 22,
            backgroundColor: "#fff",
            paddingHorizontal: 5,
            //   paddingVertical: 1,
            position: "absolute",
            top: 1,
            right: 1,
            borderRadius: 4,
          }}
        >
          {off}%
        </Text>
      ) : null}
      <Image
        source={require("../../assets/productImage.png")}
        style={{
          minWidth: category ? "auto" : 100,
          minHeight: category ? "auto" : 100,
          // minHeight: 100,
          objectFit: "fill",
          borderRadius: category ? 30 : 0,
          width: category ? 60 : "100%",
          height: category ? 60 : "auto",
          zIndex: -1,
        }}
      />
      <Text
        style={{
          color: "#595959",
          fontSize: 10,
          fontFamily: "Poppins_500Medium",
          // flexWrap: "wrap",
          marginTop: 10,
          textAlign: category ? "center" : "auto",
        }}
        numberOfLines={category ? 2 : 1}
      >
        {prodName}
        {/* {prodName.length > 19 && !category ? `${prodName.substring(0, 20)}...` : prodName} */}
      </Text>
      {category ? null : (
        <>
          {prodPrice ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#1C2534",
                  fontSize: 12,
                  fontFamily: "Poppins_700Bold",
                }}
              >
                # {prodPrice}
              </Text>
              {type === "flash" ? null : (
                <Text
                  style={{
                    color: "#1C2534",
                    fontSize: 9,
                    fontFamily: "Poppins_500Medium",
                    textDecorationLine: "line-through",
                    marginLeft: 5,
                  }}
                >
                  # {prodPrice}
                </Text>
              )}
            </View>
          ) : null}
          {type === "flash" ? null : <Rating rate={4} small />}
        </>
      )}
    </View>
  );
}

export default ProductCard;
