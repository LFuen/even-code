import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        justifyContent: "center",
        width: wp("95%"),
        height: hp("15%"),
        backgroundColor: "none",
    },
    title: {
        marginTop: 20,
        fontSize: 32,
        fontWeight: "bold",
    },
    questionContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#f9f9f9",
        borderRadius: 18,
        marginTop: 30,
        shadowColor: "#000000",
        shadowOffset: { 
            width: -4,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    question: {
        marginTop: 40,
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
    },
    codeBlock: {
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
    },
    code: {
        paddingTop: 20,
        fontSize: 16,
        justifyContent: "center",
    },
    input: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
    },
    feedbackText: {
        fontSize: 24,
        
        fontWeight: 'bold',
    },
    radioGroupContainer: {
        flexDirection: "column",
        alignSelf: "stretch",
        alignItems: "flex-start",
        marginTop: 20,
    },
    radioContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    radioButton: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    radioText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
    submitContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#3396ff",
        marginVertical: 20,
        alignSelf: "center",
    },
    badgeContainer: {
        position: "absolute",
        bottom: 60,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 70,
        shadowColor: "#000000",
        shadowOffset: { 
            width: -4,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    badge: {
        width: 100, 
        height: 100,
        resizeMode: "contain",
    },
    dismissButton: {
        backgroundColor: "#3396ff",
        alignSelf: "center",
    },
    tryAgain: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
    },
    retryButton: {
        backgroundColor: "#3396ff",
        alignSelf: "center",
    },
    modalContainer: {
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        shadowColor: "#000000",
        shadowOpacity: 1,
    }
    });