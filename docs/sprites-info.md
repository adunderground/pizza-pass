# 🎨 Sprite Generation Guide for &PizzaPass

## Overview
This document outlines all the sprites needed for the &PizzaPass app, with detailed descriptions for OpenAI GPT Image MCP generation. Each sprite has a specific purpose and usage in the app.

---

## 🍕 Priority 1: Giant Pizza Slices (5 Progressive Stages)

### **Pizza Slice Stage 1 (0-20% progress)**
- **Usage**: Replace current pizza emoji when 0-20% of challenge complete
- **Description**: "A large pizza slice with pepperoni, minimal melted cheese just starting to drip, TMNT 80s cartoon style, bold chunky lines, high contrast, comic book style, dark background"
- **Purpose**: Shows early progress in the challenge
- **File Name**: `pizza-slice-stage-1.png`

### **Pizza Slice Stage 2 (21-40% progress)**
- **Usage**: Replace current pizza emoji when 21-40% of challenge complete
- **Description**: "A large pizza slice with pepperoni, more melted cheese dripping down the sides, TMNT 80s cartoon style, bold chunky lines, high contrast, comic book style, dark background"
- **Purpose**: Shows quarter progress in the challenge
- **File Name**: `pizza-slice-stage-2.png`

### **Pizza Slice Stage 3 (41-60% progress)**
- **Usage**: Replace current pizza emoji when 41-60% of challenge complete
- **Description**: "A large pizza slice with pepperoni, substantial melted cheese dripping down the sides and pooling at the bottom, TMNT 80s cartoon style, bold chunky lines, high contrast, comic book style, dark background"
- **Purpose**: Shows half progress in the challenge
- **File Name**: `pizza-slice-stage-3.png`

### **Pizza Slice Stage 4 (61-80% progress)**
- **Usage**: Replace current pizza emoji when 61-80% of challenge complete
- **Description**: "A large pizza slice with pepperoni, heavy melted cheese dripping down the sides and forming a pool at the bottom, TMNT 80s cartoon style, bold chunky lines, high contrast, comic book style, dark background"
- **Purpose**: Shows near completion progress
- **File Name**: `pizza-slice-stage-4.png`

### **Pizza Slice Stage 5 (81-100% progress)**
- **Usage**: Replace current pizza emoji when 81-100% of challenge complete
- **Description**: "A large pizza slice with pepperoni, completely covered in melted cheese dripping everywhere, very messy and delicious looking, TMNT 80s cartoon style, bold chunky lines, high contrast, comic book style, dark background"
- **Purpose**: Shows final completion state
- **File Name**: `pizza-slice-stage-5.png`

---

## 🏗️ Priority 2: Background

### **Brick Wall Background**
- **Usage**: Replace the current black background of the entire app
- **Description**: "Dark gritty brick wall texture, TMNT sewer vibes, subtle but visible brick pattern, dark colors with hints of green and purple, 80s cartoon style, seamless tileable texture"
- **Purpose**: Main app background to replace current black
- **File Name**: `brick-wall-background.png`

---

## 💰 Priority 3: Stats Icons (Replace Emojis)

### **Cost Per Pizza Icon - SELECTED:**
**Shredder's Helmet** - "Shredder's iconic helmet, TMNT 80s cartoon style, bold chunky lines, green color scheme, comic book style, 32x32 pixel size"
- **Usage**: Replace 💵 emoji in "Cost Per Pizza" stat
- **Purpose**: Visual indicator for cost statistics
- **File Name**: `shredder-helmet-icon.png`

### **Total Savings Icon - SELECTED:**
**Krang's Brain** - "Krang's brain in jar, TMNT 80s cartoon style, bold chunky lines, orange color scheme, comic book style, 32x32 pixel size"
- **Usage**: Replace 💸 emoji in "Total Savings" stat
- **Purpose**: Visual indicator for savings statistics
- **File Name**: `krang-brain-icon.png`

### **Pizzas Ordered Icon - SELECTED:**
**Pizza Box** - "Classic pizza delivery box, TMNT 80s cartoon style, bold chunky lines, red color scheme, comic book style, 32x32 pixel size"
- **Usage**: Replace 🍕 emoji in "Pizzas Ordered" stat
- **Purpose**: Visual indicator for pizza count statistics
- **File Name**: `pizza-box-icon.png`

### **Pass Progress Icon - SELECTED:**
**April's Camera** - "April O'Neil's camera, TMNT 80s cartoon style, bold chunky lines, yellow color scheme, comic book style, 32x32 pixel size"
- **Usage**: Replace 📊 emoji in "Pass Progress" stat
- **Purpose**: Visual indicator for progress statistics
- **File Name**: `april-camera-icon.png`


## 🎨 Priority 5: Decorative Elements

### **Sewer Grate Border**
- **Usage**: Decorative border for order history cards
- **Description**: "A stylized sewer grate pattern border, TMNT 80s cartoon style, bold chunky lines, dark metal texture, comic book style, 16px height border"
- **Purpose**: Add TMNT aesthetic to order cards
- **File Name**: `sewer-grate-border.png`

### **Ninja Star Decoration**
- **Usage**: Decorative element for active states and highlights
- **Description**: "A stylized ninja star, TMNT 80s cartoon style, bold chunky lines, yellow color with glow effect, comic book style, 24x24 pixel size"
- **Purpose**: Highlight active elements and add TMNT flair
- **File Name**: `ninja-star-decoration.png`

### **Turtle Shell Pattern**
- **Usage**: Background texture for stats cards
- **Description**: "A subtle turtle shell pattern texture, TMNT 80s cartoon style, bold chunky lines, green color scheme, comic book style, seamless tileable texture"
- **Purpose**: Add TMNT aesthetic to stat cards
- **File Name**: `turtle-shell-pattern.png`

### **Pizza Cutter Icon**
- **Usage**: Decorative element for section dividers
- **Description**: "A stylized pizza cutter, TMNT 80s cartoon style, bold chunky lines, silver color with green handle, comic book style, 48x48 pixel size"
- **Purpose**: Section divider and decorative element
- **File Name**: `pizza-cutter-icon.png`

---

## 📱 Priority 6: Mobile-Specific

### **Mobile Stats Icons (Smaller versions)**
- **Usage**: Smaller versions of stats icons for mobile layout
- **Description**: "Smaller versions of all stats icons (dollar bill, money bag, pizza counter, progress chart), TMNT 80s cartoon style, bold chunky lines, comic book style, 24x24 pixel size"
- **Purpose**: Mobile-optimized stat indicators
- **File Names**: 
  - `mobile-dollar-bill-icon.png`
  - `mobile-money-bag-icon.png`
  - `mobile-pizza-counter-icon.png`
  - `mobile-progress-chart-icon.png`

---

## 🎨 Style Guidelines for All Sprites

### **Color Palette**
- **Turtle Green**: #00a651
- **Pizza Orange**: #ff6b35
- **Neon Yellow**: #ffff00
- **Sewer Purple**: #663399
- **Comic Red**: #ff0000
- **Electric Blue**: #00ffff
- **Slime Lime**: #00ff00

### **Art Style Requirements**
- **Style**: Bold, chunky, hand-drawn, comic-like, high contrast, rough-lined
- **Quality**: Low quality as per cursor rules
- **Background**: Transparent or dark to match app theme
- **Consistency**: All sprites should have the same TMNT 80s cartoon aesthetic
- **Line Weight**: Thick, bold lines typical of 80s cartoons
- **Shading**: Simple, flat colors with minimal shading
- **Details**: Exaggerated, expressive features

### **Technical Specifications**
- **Format**: PNG with transparent background
- **Resolution**: As specified for each sprite (32x32, 24x24, 48x48, etc.)
- **Color Mode**: RGB
- **Compression**: Optimized for web use

---

## 🚀 Implementation Priority

### **Phase 1: Core Visual Progression**
1. Pizza Slices (5 stages) - Core visual progression
2. Brick Wall Background - Main app background

### **Phase 2: Functional Elements**
3. Stats Icons (4 icons) - Replace all emojis in stats
4. Progress Elements (2 elements) - Visual progress indicators

### **Phase 3: Aesthetic Enhancement**
5. Decorative Elements (4 elements) - TMNT aesthetic enhancement
6. Mobile Icons (4 smaller versions) - Mobile optimization

---

## 📝 Notes

- **Turn Indicator Badge**: Removed as requested - no sprite needed
- **Avatar Sprites**: Archie (🐢) and Charles (🥷) avatars remain as emojis
- **Favicon**: Use Pizza Slice Stage 3 (41-60% progress) as favicon - "A large pizza slice with pepperoni, substantial melted cheese dripping down the sides and pooling at the bottom, TMNT 80s cartoon style, bold chunky lines, high contrast, comic book style, dark background, 32x32 pixel size for favicon"
- **All sprites should maintain the "Cowabunga Pizza Power" TMNT aesthetic**
- **Each sprite has a specific, purposeful use in the app**
- **Sprites will enhance the TMNT aesthetic while maintaining functionality**
- **Stats Icons**: Choose one option from each category (Cost, Savings, Ordered, Progress) based on preference

---

## 🎯 Total Sprite Count: 17 Sprites

- 5 Pizza Slice Stages
- 1 Background
- 4 Stats Icons
- 2 Progress Elements
- 4 Decorative Elements
- 4 Mobile Icons (smaller versions)

**Total Cost Estimate**: 17 sprites × $0.10 per sprite = $1.70 