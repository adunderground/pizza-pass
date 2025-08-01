# Pizza Pass Tracker - Technical Specifications

## Tech Stack

### Frontend
- **Framework**: React 18+ with Vite
- **Styling**: SCSS with CSS Modules
- **Fonts**: Google Fonts (Chivo, Tinos)
- **Date Handling**: date-fns (lightweight, reliable)
- **Animations**: framer-motion (optional, for enhanced UX)
- **Build Tool**: Vite
- **UI Libraries**: Use React-bits https://reactbits.dev/ – use context mcp for documentation

### Data Layer
- **Data Source**: Static JSON file (`pizza-data.json`)
- **State Management**: React useState/useContext (no external state library needed)
- **Data Structure**: Array of pizza order objects

## Application Architecture

### Component Structure
```
App
├── Header (Title)
├── TurnIndicator (Whose turn today)
├── StatsPanel (Cost per pizza, savings, progress)
├── OrderHistory (Timeline of orders)
└── Footer
```

### Key Components

#### `TurnIndicator`
- Calculate whose turn based on current date
- Visual highlight of current person
- Handle date logic and rotation 

#### `StatsPanel`
- Real-time cost calculations
- Savings vs regular pricing
- Progress toward 30 pizzas
- Animated counters for fun factor

#### `OrderHistory`
- Parse pizza-data.json
- Identify person by location logic
- Timeline or card-based layout

### Data Models

#### Pizza Order Object
```javascript
{
  order_date: string,        // "July 29, 2025"
  order_number: string,      // "37010840865505285"
  location: string,          // Full address
  pizza_name: string,        // "THE FARMERS OTHER DAUGHTER"
  ingredients: string,       // Comma-separated list
  // Derived fields
  person: 'Archie' | 'Charles',  // Based on date/location
  dayNumber: number,         // Day of promotion (1-30)
  parsedDate: Date          // Parsed from order_date
}
```

#### App State
```javascript
{
  orders: PizzaOrder[],
  currentTurn: string,
  totalSavings: number,
  currentCostPerPizza: number,
  daysRemaining: number
}
```

## Styling Architecture

### SCSS Structure
```
styles/
├── _variables.scss    // Colors, fonts, spacing
├── _mixins.scss      // Reusable style patterns
├── _base.scss        // Reset, typography
├── components/       // Component-specific styles
└── main.scss         // Main import file
```
