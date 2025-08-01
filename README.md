# 🍕 &PizzaPass

A bold, modern React SPA to track the &Pizza Pass deal between Archie and Charles, calculating savings in real-time with a striking, high-contrast interface inspired by STFU Agency's bold design aesthetic.

## 🎯 Project Overview

**&Pizza Pass Deal**: 30 pizzas for 30 days, $39.99 total (July 21 - August 21, 2025)
- **Cost Split**: $20 each (Archie + Charles)
- **Average Pizza Cost**: $12 (without deal)
- **Rotation**: Archie started July 21, alternating with Charles daily
- **Current Status**: July 31 is Archie's day

## ✨ Features

### 🎯 Turn Rotation System
- Automatically determines whose turn it is based on current date
- Bold visual indicator of current person's turn
- Rotation pattern: Archie → Charles → repeat (alternating daily)
- Handles skipped days (price per pizza stays same)

### 📊 Pizza Tracking Dashboard
- Display total pizzas ordered to date
- Show current cost per pizza ($39.99 ÷ pizzas ordered)
- Calculate total savings vs regular pricing
- Progress indicator for the 30-day period

### 📋 Order History
- List of all pizza orders with dates
- Location-based person identification:
  - **Archie**: "Brookland, 666 Monroe Street NE, Washington, DC 20017"
  - **Charles**: "Reston, 1826 Library Street, Reston, VA 20190"
- Date-based turn validation (primary method)
- Visual distinction between each person's orders

### 🎨 Design Features
- **Theme**: BOLD and HIGH-CONTRAST with pure black background
- **Typography**: Chivo (headlines) + Tinos (body) with heavy weights
- **Colors**: Electric red, green, and yellow on pure black
- **Responsive**: Works on mobile/desktop
- **Animations**: Smooth transitions and hover effects
- **Bold Aesthetic**: Inspired by STFU Agency's striking design

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
- **Fonts**: Google Fonts (Chivo, Tinos)
- **Date Handling**: date-fns
- **Build Tool**: Vite
- **No External UI Libraries**: Pure React + SCSS implementation

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # App header with &PizzaPass logo
│   ├── TurnIndicator/  # Shows whose turn today
│   ├── StatsPanel/     # Cost calculations & progress
│   └── OrderHistory/   # Timeline of orders
├── styles/             # SCSS styles
│   ├── _variables.scss # Bold design system variables
│   ├── _mixins.scss    # Reusable style patterns
│   ├── _base.scss      # Reset & typography
│   └── main.scss       # Main styles
├── utils/              # Utility functions
│   ├── pizzaUtils.js   # Business logic & calculations
│   └── dataLoader.js   # Data loading & processing
├── data/               # Static data
│   └── pizza-data.json # Pizza order data
└── App.jsx            # Main app component
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

### Colors
- **Primary**: Bold red (#ff0000)
- **Secondary**: Electric green (#00ff00)
- **Accent**: Bright yellow (#ffff00)
- **Background**: Pure black (#000000)
- **Surface**: Very dark gray (#111111)

### Typography
- **Headlines**: Chivo (Bold, 600, 700, 900)
- **Body**: Tinos (Regular, 400, 700)

### Spacing
- Consistent spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
- Responsive breakpoints for mobile/desktop

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Success Criteria

- ✅ Accurately tracks pizza orders and costs
- ✅ Correctly rotates turns based on dates
- ✅ Provides clear savings visualization
- ✅ Looks bold and impactful
- ✅ Fun to use and show friends
- ✅ Responsive design works on mobile/desktop

## 🔮 Future Enhancements (V2)

- Enhanced manual import features (drag-drop JSON/CSV)
- Browser extension for one-click &Pizza account sync
- Email parsing automation for order confirmations
- Enhanced analytics and insights

---

**Built with ❤️ and 🍕 for Archie & Charles**
