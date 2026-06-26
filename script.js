//your JS code here. If required.
// Dom elements selection
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// Track currently active step (1 to 5)
let currentActive = 1;

// Next step click event
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    updateDOM();
});

// Previous step click event
prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    updateDOM();
});

// Synchronize UI changes with active index state
function updateDOM() {
    // 1. Highlight/Reset circles based on step order
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    // 2. Adjust progress line filling width percentage
    const actives = document.querySelectorAll('.active');
    
    // Formula calculates width cleanly relative to active gap intervals
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    // 3. Update disabled state logic for navigation nodes
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
