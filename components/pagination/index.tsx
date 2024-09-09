import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from "react-native";

interface paginationProps {
    currentPage: number;
    setCurrentPage: any;
    totalItems: number;
    itemsPerPage: number;
}

const MyPagination: React.FC<paginationProps> = ({
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalItems,
}) => {
    // Generate sample data
    const data = Array.from({ length: totalItems }, (_, index) => ({
        id: index + 1,
        name: `Item ${index + 1}`,
    }));

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Calculate the data for the current page
    const currentData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNum: number) => {
        setCurrentPage(pageNum);
    };

    // Generate page numbers
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <TouchableOpacity
                    key={i}
                    style={[
                        styles.pageNumber,
                        currentPage === i && styles.activePageNumber,
                    ]}
                    onPress={() => handlePageChange(i)}
                >
                    <Text style={styles.pageNumberText}>{i}</Text>
                </TouchableOpacity>
            );
        }
        return pageNumbers;
    };

    return (
        <View style={styles.container}>
            {/* Pagination Controls */}
            <View style={styles.paginationContainer}>
                {renderPageNumbers()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    itemContainer: {
        padding: 20,
        backgroundColor: "#f9f9f9",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    itemText: {
        fontSize: 16,
    },
    paginationContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    pageNumber: {
        padding: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    activePageNumber: {
        backgroundColor: "#007bff",
        borderColor: "#007bff",
    },
    pageNumberText: {
        color: "#fff",
    },
});

export default MyPagination;
