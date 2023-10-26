document.addEventListener('DOMContentLoaded', function () {
  const receivedData = document.getElementById('receivedData');
  const urlParams = new URLSearchParams(window.location.search);
  const data = urlParams.get('data');
  receivedData.textContent = `Data received: ${decodeURIComponent(data)}`;
});