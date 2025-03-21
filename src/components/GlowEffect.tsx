import React, { ReactNode, ElementType, useState, useEffect, useRef, useCallback } from "react";
import "../styles/GlowEffect.css";

export interface GlowEffectProps {
	/**
	 * Element to apply the glow effect to
	 */
	children?: ReactNode;
	/**
	 * Optional custom className
	 */
	className?: string;
	/**
	 * Optional custom styles
	 */
	style?: React.CSSProperties;
	/**
	 * Optional custom border gradient colors
	 */
	gradientColors?: string[];
	/**
	 * Optional animation duration in seconds
	 */
	animationDuration?: number;
	/**
	 * Optional tag name for the wrapper element (default: div)
	 */
	as?: ElementType;
}

interface CustomStyle extends React.CSSProperties {
	[key: `--${string}`]: string;
}

const GlowEffect: React.FC<GlowEffectProps> = ({
	children,
	className = "",
	style,
	gradientColors,
	animationDuration = 3,
	as: Component = "div",
}) => {
	const [angle, setAngle] = useState(0);

	useEffect(() => {
		const animateGradient = () => {
			setAngle((prevAngle) => (prevAngle + 1) % 360);
		};

		const interval = setInterval(animateGradient, (animationDuration * 1000) / 360);

		return () => clearInterval(interval);
	}, [animationDuration]);

	// Create custom CSS variables for the gradient
	const customCSSVars: CustomStyle = {};

	if (gradientColors && gradientColors.length > 0) {
		const colors = gradientColors.length === 1 ? [...gradientColors, ...gradientColors] : [...gradientColors];

		// Ensure the gradients loop properly by adding the first color at the end if not already there
		if (colors[0] !== colors[colors.length - 1] && colors.length > 1) {
			colors.push(colors[0]);
		}

		customCSSVars["--gradient"] = `conic-gradient(from ${angle}deg, ${colors.join(", ")})`;
	} else {
		// Default gradient if none provided
		customCSSVars["--gradient"] = `conic-gradient(from ${angle}deg, #ff4545, #00ff99)`;
	}

	const glowStyles: React.CSSProperties = {
		position: "relative",
		...style,
	};

	const pseudoElementBeforeStyles: React.CSSProperties = {
		content: '""',
		position: "absolute",
		height: "100%",
		width: "100%",
		top: "50%",
		left: "50%",
		transform: `translate(-50%, -50%)`,
		zIndex: -1,
		padding: "3px",
		borderRadius: "inherit",
		filter: "blur(1.5rem)",
		opacity: 0.5,
		backgroundImage: customCSSVars["--gradient"],
	};

	const pseudoElementAfterStyles: React.CSSProperties = {
		content: '""',
		position: "absolute",
		height: "100%",
		width: "100%",
		top: "50%",
		left: "50%",
		transform: `translate(-50%, -50%)`,
		zIndex: -1,
		padding: "3px",
		borderRadius: "inherit",
		backgroundImage: customCSSVars["--gradient"],
	};

	return (
		<Component className={`glow-effect-js ${className}`} style={glowStyles}>
			<div style={pseudoElementBeforeStyles}></div>
			<div style={pseudoElementAfterStyles}></div>
			{children}
		</Component>
	);
};

export default GlowEffect;
