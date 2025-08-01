# Pizza Pass Tracker - Requirements Document

## Project Overview
A fun, bold React SPA to track the &Pizza Pass deal between Archie and Charles, calculating savings in real-time with a funky, modern interface.

## Context & Business Logic
- **&Pizza Pass Deal**: 30 pizzas for 30 days, $39.99 total (July 21 - August 21, 2025)
- **Cost Split**: $20 each (Archie + Charles)
- **Average Pizza Cost**: $12 (without deal)
- **Rotation**: Archie started July 21, alternating with Charles daily
- **Current Status**: July 31 is Archie's day

## Core Features (V1)

### 1. Pizza Tracking Dashboard
- Display total pizzas ordered to date
- Show current cost per pizza ($39.99 ÷ pizzas ordered)
- Calculate total savings vs regular pricing
- Progress indicator for the 30-day period

### 2. Turn Rotation System
- Automatically determine whose turn it is based on current date
- Visual indicator of current person's turn
- Rotation pattern: Archie → Charles → repeat (alternating daily)
- Handle skipped days (price per pizza stays same)
- July 21 = Day 1 (Archie), July 22 = Day 2 (Charles), etc.

### 3. Order History
- List of all pizza orders with dates
- Location-based person identification:
  - **Archie**: "Brookland, 666 Monroe Street NE, Washington, DC 20017"
  - **Charles**: "Reston, 1826 Library Street, Reston, VA 20190"
- Date-based turn validation (primary method)
- Visual distinction between each person's orders

### 4. Data Management
- Use `pizza-data.json` for order history
- Track: order_date, order_number, location, pizza_name, ingredients
- Data format matches &Pizza receipt structure:
  ```json
  {
    "order_date": "July 29, 2025",
    "order_number": "37010840865505285", 
    "location": "Brookland, 666 Monroe Street NE, Washington, DC 20017",
    "pizza_name": "THE FARMERS OTHER DAUGHTER",
    "ingredients": "Traditional, Parm Romano Sauce, Fresh Mozzarella, Bacon, Garlic Butter, Hot Honey, Egg, Spinach, Additional Toppings, Chicken"
  }
  ```

## Design Requirements

### Visual Style
- **Theme**: BOLD and Modern
- **Background**: Dark theme
- **Typography**: 
  - Primary/Headlines: Chivo (Google Fonts)
  - Secondary: Tinos (Google Fonts)
- **Layout**: Flexbox-based responsive design
- **Aesthetic**: Fun, funky, cool - something you'd want to show off to friends

### UI Components
- Dashboard with key metrics
- Turn indicator (prominent display)
- Progress bar for 30-day period
- Order history timeline/list
- Savings calculator display

## Success Criteria
- ✅ Accurately tracks pizza orders and costs
- ✅ Correctly rotates turns based on dates
- ✅ Provides clear savings visualization
- ✅ Looks awesome and modern
- ✅ Fun to use and show friends
- ✅ Responsive design works on mobile/desktop

## Future Considerations (V2)
- Enhanced manual import features (drag-drop JSON/CSV)
- Browser extension for one-click &Pizza account sync
- Email parsing automation for order confirmations
- Enhanced analytics and insights