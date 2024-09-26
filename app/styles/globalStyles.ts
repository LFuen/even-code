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
    feedbackText: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 20,
        marginBottom: 30,
        backgroundColor: "white",
        textAlign: "center",
        color: "black",
    },
    hintText: {
        fontSize: 16,
        color: '#666',
        fontStyle: 'italic',
        marginBottom: 20,
        textAlign: 'center',
    },
    tryAgain: {
        bottom: 20,
        marginHorizontal: 20,
        justifyContent: "center",
        zIndex: 100,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 20,
        flexDirection: "column",
        alignItems: "center",
        color: "white",        
    },
    retryButton: {
        backgroundColor: "#3396ff",
        alignSelf: "center",
        color: "white",
    },
    modalContainer: {
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        shadowColor: "#000000",
        shadowOpacity: 1,
    }
    });