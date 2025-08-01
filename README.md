# 🍕 &PizzaPass

A **Teenage Mutant Ninja Turtles 80s/90s themed** React SPA to track the &Pizza Pass deal between Archie and Charles, featuring AI-generated sprites, sophisticated progress effects, and a dark brick wall aesthetic.

## 🎯 Project Overview

**&Pizza Pass Deal**: 30 pizzas for 30 days, $39.99 total (July 21 - August 21, 2025)
- **Cost Split**: $20 each (Archie + Charles)
- **Average Pizza Cost**: $12 (without deal)
- **Rotation**: Archie started July 21, alternating with Charles daily
- **Current Status**: July 31 is Archie's day

## ✨ Features

### 🎯 Turn Rotation System
- Automatically determines whose turn it is based on current date
- **TMNT-themed avatars**: 🐢 Archie (Turtle) vs 🥷 Charles (Ninja)
- Bold visual indicator with neon yellow glow for active person
- Rotation pattern: Archie → Charles → repeat (alternating daily)
- Handles skipped days (price per pizza stays same)

### 📊 Pizza Tracking Dashboard
- **AI-Generated TMNT Sprites**: Shredder's Helmet (Cost), Krang's Brain (Savings), Pizza Box (Orders), April's Camera (Progress)
- Display total pizzas ordered to date
- Show current cost per pizza ($39.99 ÷ pizzas ordered)
- Calculate total savings vs regular pricing
- **Sophisticated Progress Effects**: Multi-stage pizza slices with masks and gradients

### 📋 Order History
- List of all pizza orders with dates
- **Brick Wall Background**: Authentic TMNT sewer aesthetic
- Location-based person identification (zip codes hidden for privacy):
  - **Archie**: "Brookland, 666 Monroe Street NE, Washington, DC"
  - **Charles**: "Reston, 1826 Library Street, Reston, VA"
- Date-based turn validation (primary method)
- Visual distinction between each person's orders

### 🎨 Design Features
- **Theme**: **TMNT 80s/90s Cowabunga Pizza Power** with dark brick wall background
- **Typography**: Bungee, Staatliches, Orbitron, Rajdhani, Chivo, Tinos
- **Colors**: Turtle Green, Slime Lime, Neon Yellow, Comic Red, Pizza Orange
- **Responsive**: Works on mobile/desktop with conditional layouts
- **Animations**: Shimmer effects, hover glows, spin animations
- **AI-Generated Sprites**: All icons and decorative elements created with OpenAI GPT Image MCP

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pizza-pass
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React 18+ with Vite
- **Styling**: SCSS with CSS Modules
- **Fonts**: Google Fonts (Bungee, Staatliches, Orbitron, Rajdhani, Chivo, Tinos)
- **Date Handling**: date-fns
- **Build Tool**: Vite
- **AI Integration**: OpenAI GPT Image MCP for sprite generation
- **No External UI Libraries**: Pure React + SCSS implementation

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # App header with &PizzaPass logo
│   ├── PizzaCentral/   # Central layout with pizza and avatars
│   ├── StatsPanel/     # Cost calculations & progress with TMNT sprites
│   └── OrderHistory/   # Timeline of orders with brick wall background
├── styles/             # SCSS styles
│   ├── _variables.scss # TMNT design system variables
│   ├── _mixins.scss    # Reusable style patterns
│   ├── _base.scss      # Reset & typography
│   └── main.scss       # Main styles with brick wall background
├── utils/              # Utility functions
│   ├── pizzaUtils.js   # Business logic & calculations
│   └── dataLoader.js   # Data loading & processing
├── data/               # Static data
│   └── pizza-data.json # Pizza order data
└── App.jsx            # Main app component

public/
└── sprites/           # AI-generated TMNT sprites
    ├── pizza-slice-stage-*.png    # Progressive pizza slices
    ├── *-icon.png                 # TMNT-themed stats icons
    ├── brick-wall-background.png  # Main background
    └── *.png                      # Decorative elements
```

## 🎯 Business Logic

### Turn Rotation
- July 21 = Day 1 = Archie's turn
- July 22 = Day 2 = Charles's turn
- Pattern: Archie (odd days) vs Charles (even days)

### Cost Calculations
- **Cost per pizza** = $39.99 ÷ pizzas ordered
- **Total savings** = (regular cost × pizzas ordered) - $39.99
- **Regular pizza cost** = $12.00

### Person Identification
- **Primary method**: Date-based turn validation
- **Secondary method**: Location-based identification
- Archie: Brookland location
- Charles: Reston location

## 📊 Current Data

From `pizza-data.json`:
- **7 orders total** (July 22-31, 2025)
- **Archie's orders**: 6 pizzas
- **Charles's orders**: 1 pizza
- **Current cost per pizza**: $5.71
- **Total savings**: $44.01

## 🎨 Design System

### Colors (TMNT Theme)
- **Turtle Green**: #00a651
- **Slime Lime**: #39ff14
- **Neon Yellow**: #ffff00
- **Comic Red**: #ff0000
- **Pizza Orange**: #ff6b35
- **Background**: Pure black (#000000) with brick wall pattern
- **Surface**: Very dark gray (#111111)

### Typography
- **Hero**: Bungee (Bold, 900)
- **Primary**: Staatliches (Regular, 400)
- **Secondary**: Orbitron (Medium, 500)
- **Body**: Rajdhani (Regular, 400)

### Sprites & Icons
- **Stats Icons**: Shredder's Helmet, Krang's Brain, Pizza Box, April's Camera
- **Pizza Slices**: 5 progressive stages with melted cheese
- **Decorative**: Ninja stars, pizza cutters, turtle shell patterns
- **Background**: Brick wall texture for authentic TMNT aesthetic

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Success Criteria

- ✅ Accurately tracks pizza orders and costs
- ✅ Correctly rotates turns based on dates
- ✅ Provides clear savings visualization
- ✅ **TMNT 80s/90s aesthetic with AI-generated sprites**
- ✅ **Sophisticated progress effects with masks and gradients**
- ✅ **Brick wall background for authentic atmosphere**
- ✅ Responsive design works on mobile/desktop
- ✅ **Fun and nostalgic user experience**

## 🔮 Future Enhancements (V2)

- Enhanced manual import features (drag-drop JSON/CSV)
- Browser extension for one-click &Pizza account sync
- Email parsing automation for order confirmations
- Enhanced analytics and insights
- **More TMNT sprite variations and animations**

---

**Cowabunga'd with 🍕 by ad_underground**
