import type React from "react";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

const AnimationFade = ({
	trigger,
	children,
}: { trigger: boolean; children: React.ReactNode }) => {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> - value for fadeAnim is not needed in the dependency array
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: trigger ? 1 : 0,
			duration: 1000,
			useNativeDriver: true,
		}).start();
	}, [trigger]);

	return (
		<Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
	);
};

export default AnimationFade;
