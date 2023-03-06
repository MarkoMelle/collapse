document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-btn');
  const content = document.querySelector('.content');

  toggleButton.addEventListener('click', () => {
    const isCollapsed = content.clientHeight === 0;
    const elementHeight = content.scrollHeight;
    if (isCollapsed) {
      content.style.height = `${elementHeight}px`;
    } else {
      content.style.height = '0';
    }
  });
});
