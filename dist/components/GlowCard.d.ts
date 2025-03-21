import React, { ReactNode } from "react";
import "../styles/GlowCard.css";
export interface GlowCardProps {
	/**
	 * Card content
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
	 * Optional custom width
	 */
	width?: string | number;
	/**
	 * Optional custom background color
	 */
	backgroundColor?: string;
	/**
	 * Optional custom border gradient colors
	 */
	gradientColors?: string[];
	/**
	 * Optional animation duration in seconds
	 */
	animationDuration?: number;
}
declare const GlowCard: React.FC<GlowCardProps>;
export default GlowCard;
