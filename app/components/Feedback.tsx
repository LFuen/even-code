import React, { useState, useEffect, useRef } from "react";
import { View, Animated, Image } from "react-native";
import { Portal, Modal, Button, Text } from "react-native-paper";
import { styles } from "../styles/globalStyles";

const Feedback = ({
	visible,
	isCorrect,
	onDismiss,
	slideIn,
	scaleAnim,
	randomPhrase,
}: {
	visible: boolean;
	isCorrect: boolean;
	onDismiss: () => void;
	slideIn: Animated.Value;
	scaleAnim: Animated.Value;
	randomPhrase: string;
}) => {
	const fadeIn = useRef(new Animated.Value(0)).current;
	const [showDismiss, setShowDismiss] = useState<boolean>(false);

	useEffect(() => {
		if (visible && isCorrect) {
			const delay = setTimeout(() => setShowDismiss(true), 1000);

			return clearTimeout(delay);
		}
		setShowDismiss(true);
	}, [visible, isCorrect]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		Animated.timing(fadeIn, {
			toValue: 1,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	}, [visible]);

	return (
		<Portal>
			<Modal
				visible={visible}
				onDismiss={onDismiss}
				contentContainerStyle={styles.modalContainer}
			>
				{isCorrect ? (
					<View>
						<Animated.View
							style={[
								styles.badgeContainer,
								{
									transform: [
										{
											translateY: slideIn.interpolate({
												inputRange: [0, 1],
												outputRange: [200, 0],
											}),
										},
										{ scale: scaleAnim },
									],
								},
							]}
						>
							<Image
								source={require("../../assets/images/badge.png")}
								style={styles.badge}
							/>
						</Animated.View>
						{showDismiss && (
							<Button
								mode="contained"
								onPress={onDismiss}
								style={styles.dismissButton}
							>
								Dismiss
							</Button>
						)}
					</View>
				) : (
					<View>
						<Animated.View style={[{ opacity: fadeIn }, styles.tryAgain]}>
							<Text style={styles.feedbackText}>{randomPhrase}</Text>
							<Text style={styles.hintText}>
								Hint: Think of how a forLoop works...
							</Text>
						</Animated.View>

						<Button
							mode="contained"
							onPress={onDismiss}
							style={styles.retryButton}
						>
							Try Again
						</Button>
					</View>
				)}
			</Modal>
		</Portal>
	);
};

export default Feedback;
