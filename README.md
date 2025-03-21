# Glow Effect

A customizable glowing effect component for React with animated gradient borders.

## Installation

```bash
npm install glow-effect
```

## Usage

```jsx
import React from 'react';
import { GlowEffect } from 'glow-effect';

// Basic usage
function Example() {
  return (
    <GlowEffect>
      <h1>Hello World</h1>
      <p>This is a component with glowing effect</p>
    </GlowEffect>
  );
}

// With customization
function CustomExample() {
  return (
    <GlowEffect 
      gradientColors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA69E', '#FF6B6B']}
      animationDuration={5}
      className="my-custom-class"
      style={{ width: '400px', backgroundColor: '#2a2e3d', padding: '3rem' }}
    >
      <h1>Custom Glow Effect</h1>
      <p>This component has custom styling</p>
    </GlowEffect>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Component content |
| className | string | '' | Additional CSS class |
| style | CSSProperties | - | Additional inline styles |
| gradientColors | string[] | - | Custom gradient colors for the border |
| animationDuration | number | 3 | Animation duration in seconds |
| as | ElementType | 'div' | Custom element type for the wrapper |

## Tailwind CSS Integration

This component works seamlessly with Tailwind CSS. You can use Tailwind classes with the `className` prop:

```jsx
import { GlowEffect } from 'glow-effect';

function TailwindExample() {
  return (
    <GlowEffect className="text-center p-8 shadow-xl w-[300px]">
      <h1 className="text-3xl font-bold text-white mb-4">Tailwind Styled</h1>
      <p className="text-gray-300">Using Tailwind classes with GlowEffect</p>
    </GlowEffect>
  );
}
```

## License

MIT