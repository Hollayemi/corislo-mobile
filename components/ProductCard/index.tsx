import React from "react";
import { Image, Text, View } from "react-native";
import Rating from "../rating";

type prop = {
  image?: string;
  category?: boolean;
  name: string;
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
  price,
  oldPrice,
  rating,
  name,
  type,
  noMargin,
}: prop) {
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
        {name.length > 19 && !category ? `${name.substring(0, 20)}...` : name}
      </Text>
      {category ? null : (
        <>
          {price ? (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: "#1C2534",
                  fontSize: 12,
                  fontFamily: "Poppins_700Bold",
                }}
              >
                # {price}
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
                  # {oldPrice}
                </Text>
              )}
            </View>
          ) : null}
          {type === "flash" ? null : <Rating rate={rating!} small />}
        </>
      )}
    </View>
  );
}

export default ProductCard;
