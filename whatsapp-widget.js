(function() {
    // Create the widget element (button)
    const widget = document.createElement('div');
    widget.style.width = '120px';
    widget.style.height = '120px';
    widget.style.backgroundColor = '#25d366';  // WhatsApp color
    widget.style.color = 'white';
    widget.style.display = 'flex';
    widget.style.justifyContent = 'center';
    widget.style.alignItems = 'center';
    widget.style.borderRadius = '50%';  // Circular shape
    widget.style.cursor = 'pointer';
    widget.style.fontSize = '14px';
    widget.style.fontFamily = 'Arial, sans-serif';
    widget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    widget.style.transition = 'transform 0.2s ease-in-out';
    widget.innerText = 'WhatsApp Web';

    // Hover effect
    widget.addEventListener('mouseover', function() {
        widget.style.transform = 'scale(1.1)';  // Slightly enlarge on hover
    });
    widget.addEventListener('mouseout', function() {
        widget.style.transform = 'scale(1)';  // Return to normal size
    });

    // Open WhatsApp Web in a new tab when the widget is clicked
    widget.addEventListener('click', function() {
        window.open('https://web.whatsapp.com', '_blank');
    });

    // Append the widget to the body
    document.body.appendChild(widget);

    // Styling for positioning (fixed to bottom-right of the screen)
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.right = '20px';
    widget.style.zIndex = '1000';  // Make sure it's above other elements
})();