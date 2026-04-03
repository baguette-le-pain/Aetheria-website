document.addEventListener('DOMContentLoaded', () => {
  console.log("Lume/Aetheria Core UI Loaded.");

  // Minimalist "Terminal" fade-in for descriptions
  const descriptions = document.querySelectorAll('.desc');
  descriptions.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
      el.style.opacity = '0.6';
    }, 200 * index);
  });
});
