# Pizza Pass Tracker - Teenage Mutant Ninja Turtles 80s/90s Design System

## Visual Identity & Theme

### Core Aesthetic
**"Cowabunga Pizza Power"** - Bold, gritty, chunky, stylized, vibrant, angular, exaggerated, expressive, hand-drawn, comic-like, saturated, retro, edgy, rough-lined, high-contrast design inspired by the original late 80s-90s Teenage Mutant Ninja Turtles cartoon.

### Image Generation Prompts for OpenAI GPT-Image MCP

#### Hero/Background Elements
```
"Bold, gritty, chunky pizza slice icon in late 80s TMNT cartoon style, vibrant neon green and orange colors, angular comic book shading, rough black outlines, high contrast saturated colors, hand-drawn expressive style, retro animation aesthetic"

"Stylized sewer tunnel pizza background, TMNT 80s cartoon style, chunky angular architecture, vibrant purple and green neon lighting, rough-lined comic book art, high-contrast shadows, edgy urban underground vibe"

"Retro 80s pizza box stack illustration, bold comic book style, exaggerated perspective, vibrant red and yellow colors, thick black outlines, hand-drawn chunky lettering, saturated retro animation look"
```

#### UI Icons & Elements
```
"Chunky angular arrow icons, TMNT 80s cartoon style, bold neon green color, thick black outlines, comic book shading, hand-drawn expressive look, high contrast design"

"Stylized dollar sign money icon, late 80s TMNT style, vibrant yellow-green color, rough-lined comic art, angular chunky design, bold black outlines, retro animation aesthetic"

"Bold calendar day icon, TMNT cartoon style, vibrant orange and purple colors, chunky angular design, thick outlines, hand-drawn comic book look, high contrast saturated style"
```

#### Character/Avatar Elements
```
"Stylized pizza chef silhouette, late 80s TMNT cartoon style, chunky angular design, vibrant neon colors, bold black outlines, comic book shading, hand-drawn expressive style, retro animation look"

"Bold geometric pizza slice portrait frame, TMNT 80s style, angular chunky border, vibrant green and orange colors, thick rough outlines, comic book aesthetic, high contrast design"
```

## Color Palette

### Primary Colors
```scss
// TMNT Core Colors
--turtle-green: #00a651;      // Classic turtle shell green
--pizza-orange: #ff6b35;      // Hot pizza orange
--sewer-purple: #663399;      // Underground purple
--neon-yellow: #ffff00;       // 80s neon yellow

// Supporting Colors
--comic-red: #dc143c;         // Bold comic red
--electric-blue: #00bfff;     // Electric 80s blue
--slime-lime: #32cd32;        // Bright lime green
--pizza-gold: #ffd700;        // Cheesy gold
```

### Background Colors
```scss
// Dark Underground Theme
--bg-sewer: #1a1a2e;          // Deep sewer dark
--bg-tunnel: #16213e;         // Tunnel blue-black  
--bg-shadow: #0f0f23;         // Deep shadow
--bg-grime: #2d2d44;          // Gritty surface

// Accent Backgrounds
--bg-card: #2a2a3e;           // Card background
--bg-highlight: #3d3d5c;      // Hover states
```

### Text Colors
```scss
--text-hero: #ffffff;         // Bold white text
--text-secondary: #ccccdd;    // Slightly dimmed
--text-accent: #00ff00;       // Neon green accent
--text-warning: #ff4500;      // Alert orange
--text-success: #32cd32;      // Success lime
```

## Typography System

### Font Combinations
```scss
// Primary: Bold, chunky headlines
--font-hero: 'Bungee', 'Impact', sans-serif;        // Ultra bold, compressed
--font-primary: 'Staatliches', 'Chivo', sans-serif; // Bold, angular
--font-secondary: 'Orbitron', 'Tinos', monospace;   // Tech/retro feel
--font-body: 'Rajdhani', sans-serif;                // Clean, slightly futuristic
```

### Text Styles
```scss
// Hero Text - COWABUNGA style
.hero-text {
  font-family: var(--font-hero);
  font-size: clamp(2rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 
    3px 3px 0px var(--comic-red),
    6px 6px 0px rgba(0,0,0,0.8);
  color: var(--turtle-green);
  -webkit-text-stroke: 2px var(--bg-sewer);
}

// Comic Book Style Headers
.comic-header {
  font-family: var(--font-primary);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 0px rgba(0,0,0,0.8);
  color: var(--text-hero);
}

// Retro Tech Numbers
.retro-number {
  font-family: var(--font-secondary);
  font-weight: 700;
  color: var(--neon-yellow);
  text-shadow: 0 0 10px var(--neon-yellow);
}
```

## UI Component Styles

### Card Components
```scss
.tmnt-card {
  background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-highlight) 100%);
  border: 3px solid var(--turtle-green);
  border-radius: 12px;
  box-shadow: 
    0 0 20px rgba(0, 166, 81, 0.3),
    inset 0 1px 0 rgba(255,255,255,0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background: linear-gradient(45deg, var(--turtle-green), var(--pizza-orange), var(--sewer-purple));
    border-radius: 14px;
    z-index: -1;
    opacity: 0.8;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 8px 25px rgba(0, 166, 81, 0.4),
      inset 0 1px 0 rgba(255,255,255,0.2);
  }
}
```

### Button Styles
```scss
.turtle-power-btn {
  background: linear-gradient(135deg, var(--turtle-green) 0%, var(--slime-lime) 100%);
  border: 3px solid var(--comic-red);
  border-radius: 8px;
  color: var(--text-hero);
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 12px 24px;
  text-shadow: 2px 2px 0px rgba(0,0,0,0.8);
  box-shadow: 
    0 4px 0px var(--bg-sewer),
    0 6px 12px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: all 0.1s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 0px var(--bg-sewer),
      0 8px 16px rgba(0,0,0,0.5);
  }
  
  &:active {
    transform: translateY(2px);
    box-shadow: 
      0 2px 0px var(--bg-sewer),
      0 4px 8px rgba(0,0,0,0.3);
  }
}
```

### Turn Indicator Styles
```scss
.whos-turn-indicator {
  background: radial-gradient(circle, var(--sewer-purple) 0%, var(--bg-sewer) 70%);
  border: 4px solid var(--neon-yellow);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 
    0 0 30px var(--neon-yellow),
    inset 0 0 20px rgba(255,255,0,0.1);
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(var(--turtle-green), var(--pizza-orange), var(--electric-blue), var(--turtle-green));
    padding: 2px;
    z-index: -1;
    animation: spin 4s linear infinite;
  }
  
  .turn-text {
    font-family: var(--font-hero);
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--neon-yellow);
    text-shadow: 
      0 0 10px var(--neon-yellow),
      2px 2px 0px var(--bg-sewer);
    text-align: center;
    text-transform: uppercase;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### Stats Panel
```scss
.pizza-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  
  .stat-card {
    @extend .tmnt-card;
    padding: 24px;
    text-align: center;
    
    .stat-label {
      font-family: var(--font-primary);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    
    .stat-value {
      font-family: var(--font-secondary);
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--pizza-gold);
      text-shadow: 
        0 0 15px var(--pizza-gold),
        2px 2px 0px var(--bg-sewer);
      margin-bottom: 4px;
    }
    
    .stat-subtext {
      font-size: 0.8rem;
      color: var(--text-accent);
      font-weight: 500;
    }
  }
}
```

## Animation System

### Comic Book Style Animations
```scss
// Pop-in animation for cards
@keyframes comic-pop {
  0% {
    transform: scale(0.3) rotate(-10deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotate(2deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

// Neon glow pulse
@keyframes neon-pulse {
  0%, 100% {
    text-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor;
  }
  50% {
    text-shadow: 
      0 0 10px currentColor,
      0 0 20px currentColor,
      0 0 30px currentColor;
  }
}

// Money counter animation
@keyframes money-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
```

## Layout System

### Responsive Grid
```scss
.pizza-app-layout {
  min-height: 100vh;
  background: 
    radial-gradient(circle at 20% 80%, var(--sewer-purple) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--turtle-green) 0%, transparent 50%),
    linear-gradient(135deg, var(--bg-sewer) 0%, var(--bg-tunnel) 100%);
  padding: 20px;
  
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    gap: 30px;
    min-height: calc(100vh - 40px);
  }
}
```

## Image Asset Specifications

### Icon Requirements
- **Style**: Bold, chunky, angular, comic book outlines
- **Colors**: High contrast with thick black borders
- **Size**: SVG format, scalable from 16px to 128px
- **Theme**: Pizza, money, calendar, arrows, turtle shell patterns

### Background Elements
- **Textures**: Gritty sewer walls, comic book dot patterns
- **Gradients**: Neon-style radial gradients
- **Patterns**: Angular geometric shapes, shell-like textures

### Interactive Elements
- **Hover States**: Glowing neon effects, scale transforms
- **Active States**: Comic book "KAPOW" style feedback
- **Loading States**: Spinning turtle shell, pizza slice rotation

This design system captures the radical, bodacious energy of 80s/90s TMNT while being perfect for a pizza tracking app. The bold colors, chunky typography, and comic book styling will make your Pizza Pass tracker absolutely tubular! 🐢🍕