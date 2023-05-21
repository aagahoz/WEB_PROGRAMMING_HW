// Gönderilen form verilerini al
var formData = JSON.parse(localStorage.getItem('formData'));

// Form verilerini sayfada görüntüle
if (formData) {
  document.getElementById('senderName').textContent = formData.name;
  document.getElementById('senderEmail').textContent = formData.email;
  document.getElementById('messageContent').textContent = formData.message;
}

// Ana sayfaya yönlendirme
function goToHomePage() {
  window.location.href = '/';
}
