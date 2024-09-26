import React, { useState, useRef } from "react";
import { View, Text, Image, Animated } from "react-native";
import Question from "./components/Question";
import Feedback from "./components/Feedback";
import { styles } from "./styles/globalStyles";
import { PaperProvider, Portal } from "react-native-paper";
import ConfettiCannon from "react-native-confetti-cannon";

const App = () => {
	const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const [answer, setAnswer] = useState<string>(""); // Track answer
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const confettiRef = useRef<any>(null); // confetti control
	const slideIn = useRef(new Animated.Value(0)).current; // Slide-in for badge
	const scaleAnim = useRef(new Animated.Value(0)).current; // Pop-up for badge
	const correctAnswer = "11";

	// Handle answer submission
	const handleAnswerSubmit = (submittedAnswer: string) => {
		setAnswer(submittedAnswer);
		if (submittedAnswer === correctAnswer) {
            setIsCorrect(true);
			setShowFeedback(true);
			animateBadge(); // Trigger badge when correct
			confettiRef.current?.start(); // Trigger confetti

		} else {
            setIsCorrect(false);
			setShowFeedback(true);
            console.log("The answer is:", answer);
		}
	};

	const animateBadge = () => {
		Animated.sequence([
			Animated.timing(slideIn, {
				toValue: 1,
				duration: 500,
				useNativeDriver: true,
			}),
			Animated.spring(scaleAnim, {
				toValue: 1,
				friction: 4,
				tension: 100,
				useNativeDriver: true,
			}),
		]).start();
	};

	// Reset state
	const handleDismiss = () => {
		setShowFeedback(false);
		setAnswer("");
	};

	return (
		<PaperProvider>
			<View style={styles.container}>
				<Text style={styles.title}>Do You Even</Text>
				<Image
					style={styles.image}
					source={require("../assets/images/code.png")}
					resizeMode="center"
				/>
				<Question onSubmit={handleAnswerSubmit} resetAnswer={answer === ""} />
				<Portal>

					<Feedback
						visible={showFeedback}
                        isCorrect={isCorrect}
						onDismiss={handleDismiss}
						slideIn={slideIn}
						scaleAnim={scaleAnim}
					/>
				</Portal>

				{isCorrect && showFeedback && (
					<Portal>
						<ConfettiCannon
							ref={confettiRef}
							count={200}
							fadeOut
							autoStart={true}
							origin={{ x: 0, y: 0 }}
						/>
					</Portal>
				)}
			</View>
		</PaperProvider>
	);
};

export default App;
