# Sentinal UI

A reusable UI component library with TypeScript and Tailwind CSS.

## Installation

```bash
npm install sentinal-ui
```

## Usage

```jsx
import React from "react";
import { InputBox } from "sentinal-ui";
import "sentinal-ui/dist/styles.css"; // Import the styles

// Inside your Formik form
<InputBox
  label="Email"
  name="email"
  placeholder="Enter your email"
  type="email"
/>;
```

## Components

### InputBox

A styled input box component that integrates with Formik.

#### Props

- `label`: The label for the input field
- `name`: The name of the input field (used by Formik)
- `placeholder`: The placeholder text
- `className`: Additional classes for the container (optional)
- `type`: Input type (default: "text")
- `labelColor`: Color class for the label (default: "text-white")
- `inputClasses`: Additional classes for the input element (optional)

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the library: `npm run build`
4. Watch for changes: `npm run build:watch`

## License

MIT
