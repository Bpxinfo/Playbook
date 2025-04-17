# UI Component Guide

## Close Button (X)

### Description
A white circular close button with shadow, used primarily in modal windows and overlays. The button features a solid white background with a medium shadow for depth, rounded edges, and a dark X icon for optimal visibility and contrast.

### Styling
```jsx
// Close Button Component Example
<button
  onClick={onClose}
  className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
  aria-label="Close"
>
  <FiX size={24} className="text-gray-700" />
</button>
```

### CSS Classes
```css
.close-button {
  background-color: white;
  padding: 0.75rem;  /* 12px */
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s ease;
}

.close-button:hover {
  background-color: #f3f4f6; /* gray-100 */
}

.close-button-icon {
  width: 24px;
  height: 24px;
  color: #374151; /* gray-700 */
}
```

### Usage
```jsx
import { FiX } from 'react-icons/fi';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <button
        onClick={onClose}
        className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Close"
      >
        <FiX size={24} className="text-gray-700" />
      </button>
      {/* Modal content */}
    </div>
  );
};
```

### Tailwind Classes Breakdown
| Class | Purpose |
|-------|----------|
| bg-white | White background color |
| p-3 | Padding of 0.75rem (12px) |
| rounded-full | Fully rounded corners |
| shadow-md | Medium-sized shadow |
| hover:bg-gray-100 | Light gray background on hover |
| transition-colors | Smooth transition for color changes |

### Accessibility
- Include `aria-label="Close"` for screen readers
- Ensure the button is keyboard focusable
- Maintain minimum touch target size of 44x44 pixels for mobile devices
- Provide visual feedback on hover/focus states
- Ensure sufficient contrast between the white background and dark icon

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| onClick | function | required | Handler for close action |
| className | string | - | Additional CSS classes |
| size | number | 24 | Icon size in pixels |
| color | string | 'gray-700' | Icon color |

### Best Practices
1. Position consistently (top-left corner for cards)
2. Maintain shadow depth per code
3. Keep the white background clean and consistent
4. Provide subtle hover state feedback
5. Ensure the shadow doesn't interfere with nearby elements
6. Keep touch target size adequate for mobile use 