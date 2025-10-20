# Image Flow Gallery
A beautiful, interactive web application that displays images in a flowing strip with parallax background effects. Upload your images and watch them flow across the screen in an elegant, seamless animation.

## Features
- Dual-Layer Animation: Main images flow in one direction while background images flow in the opposite direction
- Interactive Upload: Drag and drop or click to upload multiple images
- Hover Effects: Pause animation on hover and reveal delete buttons
- Image Management: Delete individual images with a simple click
- Responsive Design: Works on various screen sizes
- Smooth Animations: CSS-powered seamless looping animations
- Modern UI: Glass-morphism design with gradient accents

## Technologies Used
- HTML5: Semantic structure
- CSS3: Advanced animations, flexbox, and modern styling
- JavaScript: File handling, DOM manipulation, and event handling
- FileReader API: Client-side image processing

## Installation & Setup
1. Download the files:
`index.html`
`styles.css`
`script.js`
2. Set up the project structure:
`your-project-folder/`

`├── index.html`

`├── styles.css`

`└── script.js`

3. Open the application:
- Simply open index.html in a modern web browser
- No server required - runs completely client-side

## How to Use
### Uploading Images
- Click Upload: Click the circular upload button in the bottom-right corner
- Drag & Drop: Drag image files directly onto the upload button
- Multiple Selection: Select multiple images at once using file dialog

### Interacting with Images
- Hover: Hover over images in the main strip to pause the animation
- Delete: Click the × button that appears on hover to remove images
- View: Watch your images flow seamlessly in both foreground and background

### Animation Controls
- The main strip flows from right to left
- The background strip flows from left to right (opposite direction)
- Animation automatically pauses when hovering over the main strip

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## File Structure
`image-flow-gallery/`

`├── index.html          # Main HTML file`

`├── styles.css          # All styling and animations`

`└── script.js           # JavaScript functionality`

## Key Features Explained
### Dual-Strip Animation
- Main Strip: High-quality images in center with hover effects
- Background Strip: Same images blurred and transparent in background
- Opposite Directions: Creates a dynamic parallax effect

### Image Handling
- Client-side processing (no server upload)
- Supports common image formats (JPEG, PNG, GIF, WebP)
- Maintains image quality while displaying

### Responsive Design
- Adapts to different screen sizes
- Maintains aspect ratios
- Optimized animations for performance

## Customization
### Changing Animation Speed
- Modify the animation duration in `styles.css`:
- For main strip

`animation: scroll-main 20s linear infinite;`
- For background strip
  
`animation: scroll-background 40s linear infinite reverse;`

### Styling Adjustments
- Change colors in the gradient (linear-gradient properties)
- Adjust blur effects (backdrop-filter and filter properties)
- Modify image sizes and spacing

## Performance Notes
- Images are processed client-side for privacy
- Smooth animations using CSS will-change property
- Efficient DOM updates with event delegation
- Memory management with proper image cleanup

## Troubleshooting
### Images not uploading?
- Ensure you're using supported image formats
- Check browser console for errors

### Animations stuttering?
- Try with fewer images
- Ensure browser hardware acceleration is enabled
  
### Delete button not working?
- Refresh the page and try again
- Check JavaScript console for errors

## License
This project is open source and available under the MIT License.

