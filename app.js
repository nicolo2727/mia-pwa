document.getElementById('btn-click').addEventListener('click', () => {
  document.getElementById('msg').textContent = 'Complimenti! Lo script funziona!';
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js');
  });
}
