# which-value Utility

A small utility for selecting between two optional string values.
It prioritizes a primary value if provided, and falls back to a secondary default if the primary is empty or undefined.

This utility is especially useful when reusing components that have default attribute values. It allows you to override specific attributes without modifying or duplicating the component, helping you avoid redundancy and maintain cleaner, more scalable code.

## Features:

### Conditional Fallback Logic
Selects a primary string value if available, otherwise falls back to a default.

### Attribute-Level Reusability
Useful for props like className, id, aria-label, placeholder, etc.—any string-based attribute.

### Component Reusability
Enables creating flexible components without redefining or duplicating them just to change attribute values.

### Developer-Friendly
Improves code readability—especially for junior developers—by clearly expressing fallback behavior.

### Clean Output Handling
Prevents unintended values like undefined or empty strings from leaking into the DOM.

### Lightweight and Dependency-Free
Written in pure TypeScript/JavaScript with no external dependencies.

### Fully Typed with TypeScript
Offers strong type safety to catch errors early in development.

### Easy to Test
Simple logic makes it highly testable and predictable in behavior.

---

## Version

1.0.0

---

## Creator

[PGMJR](https://github.com/PGMJR) — Created on 2025-07-22

---

## Installation

Copy the `whichValue` function to your project utils folder.

---

## Usage

```ts
import whichValue from './which-value';
const {props} = passProps;
const className = whichValue(props.className, 'default-class');
const id = whichValue(props.id, 'default-id');
const ariaLabel = whichValue(props['aria-label'], 'default-label');
```
