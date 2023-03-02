let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const board = document.querySelector("#game-board");

// Handle touch start event
board.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

// Handle touch move event
board.addEventListener("touchmove", (e) => {
  touchEndX = e.touches[0].clientX;
  touchEndY = e.touches[0].clientY;
});

// Handle touch end event
board.addEventListener("touchend", () => {
  let deltaX = touchEndX - touchStartX;
  let deltaY = touchEndY - touchStartY;

  // Determine if swipe was horizontal or vertical
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    if (deltaX > 0) {
      // Swipe right
      const event = new KeyboardEvent("keydown", {
        key: "ArrowRight",
        code: "ArrowRight",
        bubbles: true,
      });
      document.dispatchEvent(event);
    } else if (deltaX < 0) {
      // Swipe left
      const event = new KeyboardEvent("keydown", {
        key: "ArrowLeft",
        code: "ArrowLeft",
        bubbles: true,
      });
      document.dispatchEvent(event);
    }
  } else {
    // Vertical swipe
    if (deltaY > 0) {
      // Swipe down
      const event = new KeyboardEvent("keydown", {
        key: "ArrowDown",
        code: "ArrowDown",
        bubbles: true,
      });
      document.dispatchEvent(event);
    } else if (deltaY < 0) {
      // Swipe up
      const event = new KeyboardEvent("keydown", {
        key: "ArrowUp",
        code: "ArrowUp",
        bubbles: true,
      });
      document.dispatchEvent(event);
    }
  }
});
