# PARCO User Analytics Dashboard

A modern React-based dashboard that visualizes daily PARCO user analytics data. This application provides an interactive interface for viewing and analyzing user activity patterns through customizable charts.

## Features

- **Interactive Data Visualization**: Dynamic stacked bar charts showing daily user activity patterns
- **Dual View Modes**:
  - Total View: Aggregated daily user counts
  - Types View: Breakdown by user action categories (Urgent, Likely, Unlikely, Not Actionable)
- **Responsive Design**: Fluid layout that adapts to different screen sizes
- **Custom Theme**: Professionally designed Material-UI theme with custom typography variants
- **Performance Optimized**: Implements React's useMemo for efficient data processing
- **Type-Safe**: Comprehensive TypeScript implementation with strict type checking

## Technology Stack

- React 18.3.1
- TypeScript 5.6.2
- Material-UI 6.1.7
- MUI X-Charts 7.22.2
- Vite 5.4.10
- ESLint 9.13.0
- Emotion for styled components

## Installation

1. Clone the repository:

```bash
git clone
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build with TypeScript compilation
- `npm run lint` - Runs ESLint for code quality checks
- `npm run preview` - Previews the production build locally

## Project Structure

```
src/
├── components/
│   ├── ChartComponent.tsx    # Chart visualization component
│   ├── CustomToggleButtonGroup.tsx  # Custom toggle button styling
│   ├── DailyUserGraph.tsx    # Main graph container component
│   └── GraphHeader.tsx       # Header with title and view toggles
├── data/
│   └── mockData.ts          # Mock data and data types
├── styles/
│   └── mui-overrides.css    # Material-UI component style overrides
├── theme/
│   ├── theme.ts            # Theme configuration
│   └── types.ts            # Theme type declarations
├── App.tsx                 # Root application component
└── main.tsx               # Application entry point
```

## Component Architecture

### DailyUserGraph

Main container component that:

- Manages view state (total/types)
- Processes and memoizes data
- Handles date calculations
- Orchestrates child components

### ChartComponent

Visualization component using MUI X-Charts:

- Configurable view modes
- Dynamic data processing
- Custom styling and grid configuration
- Responsive layout

### GraphHeader

Header component featuring:

- Title display
- Custom styled toggle buttons
- View mode switching

## Code Quality

- Strict TypeScript configuration with comprehensive type checking
- ESLint configuration with recommended rules and React-specific plugins
- Consistent code formatting and organization
- Memoized computations for performance optimization

## Development Notes

- The project uses a custom Material-UI theme with extended typography variants
- Chart colors and styles are consistently maintained through theme variables
- Data processing is optimized using React's useMemo hook
- Component styles use Material-UI's sx prop for consistent theming

## Requirements

- Node.js >= 18.0.0
- npm >= 9.0.0
