import React, { useState } from "react";
import { View, TextInput, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { ReviewTab } from "./reviewTab";
import useSWR from "swr";
import { useUserData } from "../../hooks/useData";
import Rating from "../../components/rating";

interface ReviewProps {
    store: string;
    branch: string;
    searchParams?: {
        page?: number;
    };
}

export const ReviewStore: React.FC<ReviewProps> = ({
    store,
    branch,
    searchParams,
}) => {
    const { isOffline } = useUserData() as any;
    const dispatch = useDispatch();
    const { data, isLoading } = useSWR(
        `/store/feedback/${store}/${branch}?page=${searchParams?.page || 1}`
    );
    const summary = data && !isLoading ? data?.data[0] : {};
    const [page, setPage] = useState(1);
    const [review, setReview] = useState<string>("");
    const [star, setStar] = useState<number>(0);

    const feedbackPayload = {
        review,
        rate: star,
        store,
        branch,
    };

    return (
        <View>
            <View
                style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 15,
                    marginTop: 20,
                }}
            >
                <ReviewTab
                    // store={store}
                    // branch={branch}
                    page={page}
                    showingPage={setPage}
                    summary={summary}
                />
            </View>

            {!isOffline && (
                <View
                    style={{
                        backgroundColor: "white",
                        borderRadius: 10,
                        padding: 20,
                        marginTop: 20,
                    }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                        Rate this store
                    </Text>
                    <Text style={{ fontSize: 12, marginBottom: 10 }}>
                        Tell others what you think
                    </Text>

                    <Rating
                        rate={0}
                        // onFinishRating={(rating) => setStar(rating)}
                        size={30}
                        // style={{ paddingVertical: 10 }}
                    />

                    <TextInput
                        onChangeText={(text) => setReview(text)}
                        placeholder="Write your own review"
                        style={{
                            borderWidth: 1,
                            borderColor: "#e0e0e0",
                            borderRadius: 10,
                            height: 100,
                            padding: 10,
                            textAlignVertical: "top",
                        }}
                        multiline
                    />

                    <View style={{ alignItems: "flex-end", marginTop: 20 }}>
                        <Button
                            title="Send"
                            onPress={
                                () => {}
                                // shopFeedbackHandler(feedbackPayload, dispatch)
                            }
                            color="#6200ea"
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

interface ReviewComponentProp {
    productId: string;
}

export const Review = ({ productId }: ReviewComponentProp) => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useSWR(
        `/product/feedback/${productId}?page=${page || 1}`
    );
    const summary = data?.data[0];

    return (
        summary && (
            <ReviewTab summary={summary} page={page} showingPage={setPage} />
        )
    );
};

export default Review;
