# Dropdown Menu

A lightweight, reusable dropdown menu module for JavaScript.

### HTML Structure

Add the following HTML structure to your page. The dropdown menu items should be
hard-coded into your HTML:

```html
<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <ul class="dropdown-menu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</div>
```

### CSS

Include the CSS file provided by the package:

```html
<link
  rel="stylesheet"
  href="node_modules/kuhvehl-dropdown/styles/dropdown.css"
/>
```

### Example

Here’s a full example:

html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Example</title>
    <link rel="stylesheet" href="node_modules/kuhvehl-dropdown/styles/dropdown.css">
</head>
<body>
    <div class="dropdown">
        <button class="dropdown-toggle">Menu</button>
        <ul class="dropdown-menu">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
        </ul>
    </div>
    <script src="./node_modules/kuhvehl-dropdown/src/dropdown.js"></script>
    <script>
      dropdown();
    </script></body>
</html>

---
