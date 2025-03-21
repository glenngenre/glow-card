import React, { ReactNode, ElementType } from "react";
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
declare const GlowEffect: React.FC<GlowEffectProps>;
export default GlowEffect;
