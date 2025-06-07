# Activity-JavaScript-Fundamentals-React-NextJS-Components

## Part A: JavaScript Fundamentals

Demonstrates core JavaScript concepts through interactive examples:

### Key Concepts Covered:
1. **Variables and Data Types**
   - Declaration and usage of variables
   - String interpolation with template literals

2. **Functions**
   - Function declaration and invocation
   - Parameter passing

3. **Arrays**
   - Array manipulation (push/pop)
   - Iteration with forEach
   - Dynamic DOM updates

4. **Objects**
   - Object properties and methods
   - Property access and modification

5. **DOM Manipulation**
   - Element selection
   - Content updating
   - Dynamic element creation

6. **Event Handling**
   - Click event listeners
   - Callback functions

### How to Run:
1. Open `parta  javascript fundamentals/ybanez.html` in a browser
2. Interact with the page to see JavaScript in action

## Part B: Next.js Components

This project includes three reusable React components built with Next.js:

1. WelcomeCard
A component that displays a welcome message.

**Props:**
- `name` (string): The name to display in the welcome message

**Usage:**
```jsx
<WelcomeCard name="John" />
```

**Features:**
- Customizable welcome message
- Styled card with border and background

### 2. StudentInfo
A form component for collecting student information.

**Fields:**
- Name (required)
- Email (required)
- Course
- Year (1-5)

**Features:**
- Form validation
- Submission handler that shows an alert with collected data
- Responsive styling

**Usage:**
```jsx
<StudentInfo />
```

### 3. Counter
A simple counter component with increment/decrement functionality.

**Features:**
- State management using React hooks
- Buttons to increment and decrement the count
- Visual display of current count

**Usage:```jsx
<Counter />
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. The components can be imported and used in any Next.js page.
