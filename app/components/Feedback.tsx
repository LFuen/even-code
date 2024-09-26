import React from "react";
import { View, Animated, Image } from "react-native";
import { Portal, Modal, Button, Text } from "react-native-paper";
import { styles } from "../styles/globalStyles";

const Feedback = ({
	visible,
	isCorrect,
	onDismiss,
	slideIn,
	scaleAnim,
}: {
	visible: boolean;
	isCorrect: boolean;
	onDismiss: () => void;
	slideIn: Animated.Value;
	scaleAnim: Animated.Value;
}) => {
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

						<Button
							mode="contained"
							onPress={onDismiss}
							style={styles.dismissButton}
						>
							Dismiss
						</Button>
					</View>
				) : (
					<View style={styles.tryAgain}>
						<Text style={styles.feedbackText}>
							One more time, you got this!
						</Text>
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
