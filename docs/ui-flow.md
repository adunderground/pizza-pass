# &PizzaPass - UI Flow Documentation

## Page Layout Overview

The &PizzaPass application follows a single-page application (SPA) design with a vertical layout optimized for both desktop and mobile viewing. The interface is designed with the new TMNT 80s/90s aesthetic, featuring bold colors, comic book styling, and retro typography.

## Header Section

### Logo & Branding
- **Position**: Top of page, full width
- **Content**: "&PizzaPass" logo with TMNT-style typography
- **Styling**: Bold, chunky lettering with neon effects
- **Background**: Dark sewer theme with gradient overlays
- **Height**: Approximately 80-100px

### Navigation/Status
- **Turn Indicator**: Prominent display showing whose turn it is today
- **Day Counter**: Shows current day (e.g., "Day 11 of 30")
- **Visual Style**: Circular or card-based design with minimal borders

## Main Content Area

### Turn Indicator Section
**Position**: Immediately below header
**Purpose**: Primary focus area showing current turn status

**Components**:
- **Current Turn Display**: Large, prominent showing "Archie" or "Charles"
- **Avatar/Icon**: Emoji-based character representation (🐢 for Archie, 🍕 for Charles)
- **Location Info**: "Brookland, DC" or "Reston, VA"
- **Status Badge**: "ACTIVE" or similar status indicator
- **Day Progress**: Visual indicator of pass progress

**Styling**:
- Comic book card design with minimal borders
- Angular, chunky styling
- TMNT color palette (turtle green, pizza orange)
- Glowing effects and animations

### Stats Dashboard Section
**Position**: Below turn indicator
**Purpose**: Key metrics and financial tracking

**Components**:
- **Pizzas Ordered**: Counter showing total pizzas to date
- **Cost Per Pizza**: Real-time calculation ($39.99 ÷ pizzas ordered)
- **Total Savings**: Amount saved vs regular pricing
- **Pass Progress**: Visual progress bar (e.g., 11/30 days)

**Layout**:
- Grid-based card layout (2x2 or 3x2 depending on screen size)
- Each stat in its own TMNT-styled card with minimal borders
- Animated counters for visual appeal
- Neon glow effects on important numbers

### Order History Section
**Position**: Below stats dashboard
**Purpose**: Timeline of all pizza orders

**Components**:
- **Section Header**: "Order History" with TMNT styling
- **Filter Options**: Buttons to filter by person or date
- **Order Cards**: Individual cards for each order

**Order Card Structure**:
- **Person Avatar**: Emoji-based icon (🐢 for Archie, 🍕 for Charles)
- **Order Date**: Formatted date display
- **Pizza Name**: Name of the pizza ordered
- **Location**: Store location
- **Status**: Visual indicator if it was the correct person's turn
- **Ingredients**: Collapsible list of toppings

**Styling**:
- Comic book timeline design
- Color-coded by person (green for Archie, orange for Charles)
- Minimal borders with neon effects
- Hover animations and interactions

## Footer Section

### Branding & Links
- **Position**: Bottom of page
- **Content**: "&PizzaPass" branding with TMNT styling
- **Height**: Approximately 60-80px

## Responsive Design Considerations

### Desktop Layout (>768px)
- **Header**: Full width with large logo
- **Main Content**: 2-3 column grid for stats
- **Order History**: Timeline layout with side-by-side cards
- **Spacing**: Generous padding and margins

### Mobile Layout (<768px)
- **Header**: Compact logo and turn indicator
- **Main Content**: Single column layout
- **Stats**: Stacked cards with full width
- **Order History**: Vertical timeline
- **Touch Targets**: Minimum 44px for interactive elements

## Color Scheme & Theming

### Primary Colors
- **Turtle Green** (#00a651): Primary actions, Archie's color
- **Pizza Orange** (#ff6b35): Secondary actions, Charles's color
- **Sewer Purple** (#663399): Background gradients
- **Neon Yellow** (#ffff00): Highlights and accents

### Background Theme
- **Primary**: Dark sewer theme (#1a1a2e)
- **Secondary**: Tunnel blue-black (#16213e)
- **Cards**: Gritty surface (#2d2d44)
- **Highlights**: Hover states (#3d3d5c)

## Animation & Interaction Flow

### Page Load Sequence
1. **Background Animation**: Sewer gradient animation
2. **Header Fade-in**: Logo and branding appear
3. **Turn Indicator Pop**: Current turn displays with comic book animation
4. **Stats Counter Animation**: Numbers count up to current values
5. **Order History Timeline**: Cards appear in chronological order

### Interactive Elements
- **Turn Indicator**: Glowing neon effect on hover
- **Stat Cards**: Scale and glow on hover
- **Order Cards**: Comic book "KAPOW" effect on click
- **Filter Buttons**: TMNT-style button animations
- **Progress Bars**: Animated fills with neon effects

## Typography Hierarchy

### Hero Text (Logo)
- **Font**: Bungee
- **Size**: 3-4rem
- **Weight**: 900
- **Effects**: Text shadow, neon glow

### Section Headers
- **Font**: Staatliches
- **Size**: 1.5-2rem
- **Weight**: 800
- **Effects**: Comic book text shadow

### Body Text
- **Font**: Rajdhani
- **Size**: 1rem
- **Weight**: 400-600
- **Effects**: Clean, readable

### Numbers & Stats
- **Font**: Orbitron
- **Size**: 2-3rem
- **Weight**: 700
- **Effects**: Neon glow, text shadow

## User Flow & Navigation

### Primary User Journey
1. **Land on Page**: Immediate visual impact with TMNT styling
2. **See Current Turn**: Prominent display of whose turn it is
3. **Check Stats**: Review cost savings and progress
4. **Browse History**: View past orders and patterns
5. **Interact**: Click cards for details, use filters

### Secondary Interactions
- **Filter Orders**: By person, date, or location
- **Expand Details**: Click order cards for ingredient details
- **Share Progress**: Social sharing of savings/pizza count
- **Export Data**: Download order history (future feature)

## Accessibility Considerations

### Visual Accessibility
- **High Contrast**: Bold colors ensure readability
- **Large Text**: Minimum 16px for body text
- **Clear Hierarchy**: Distinct typography levels
- **Color Independence**: Information not conveyed by color alone

### Interactive Accessibility
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Focus Indicators**: Clear focus states for all buttons/links
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Touch Targets**: Minimum 44px for mobile interactions

## Performance Considerations

### Loading Strategy
- **Critical CSS**: Inline essential styles for above-the-fold content
- **Lazy Loading**: Order history cards load as needed
- **Image Optimization**: Compressed TMNT-style graphics
- **Animation Performance**: CSS transforms and opacity for smooth animations

### Data Management
- **Static Data**: pizza-data.json loaded once
- **Real-time Calculations**: Client-side computation for stats
- **Caching Strategy**: Local storage for user preferences
- **Offline Support**: Basic functionality without network

This UI flow creates an engaging, retro-styled pizza tracking experience that's both functional and visually appealing, perfectly capturing the TMNT 80s/90s aesthetic while maintaining excellent usability and accessibility. 