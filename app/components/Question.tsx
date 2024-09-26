import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import { styles } from "../styles/globalStyles";

const Question = ({
	onSubmit,
	resetAnswer,
}: {
	onSubmit: (answer: string) => void;
	resetAnswer: boolean;
}) => {
	const [answer, setAnswer] = useState<string>("");


	useEffect(() => {
		if (resetAnswer) {
			setAnswer("");
		}
	}, [resetAnswer]);

	const handleSubmit = (currentAnswer: string) => {
		onSubmit(currentAnswer);
	};

	return (
		<View style={styles.questionContainer}>
			<View style={styles.codeBlock}>
				<Text style={styles.question}>What is the output of this code?</Text>
				<Text style={styles.code}>let a=10;</Text>
				<Text style={styles.code}>let b=a++;</Text>
				<Text style={styles.code}>console.log(b);</Text>
			</View>

			<View style={styles.radioGroupContainer}>
				<RadioButton.Group
					onValueChange={(value) => {
						setAnswer(value);
					}}
					value={answer}
				>
					<View style={styles.radioContainer}>
						<RadioButton value="10" color="#3396ff" />
						<Text style={styles.radioText}>10</Text>
					</View>
					<View style={styles.radioContainer}>
						<RadioButton value="11" color="#3396ff" />
						<Text style={styles.radioText}>11</Text>
					</View>
					<View style={styles.radioContainer}>
						<RadioButton value="undefined" color="#3396ff" />
						<Text style={styles.radioText}>undefined</Text>
					</View>
					<View style={styles.radioContainer}>
						<RadioButton value="NaN" color="#3396ff" />
						<Text style={styles.radioText}>NaN (not the bread)</Text>
					</View>
				</RadioButton.Group>
			</View>

			<View style={styles.submitContainer}>
				<Button
					mode="contained"
					onPress={() => handleSubmit(answer)}
					style={styles.button}
				>
					Submit
				</Button>
			</View>
		</View>
	);
};

export default Question;
