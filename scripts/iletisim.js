function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Lütfen tüm alanları doldurunuz.');
    } else if (!validateEmail(email)) {
      alert('Geçerli bir e-posta adresi giriniz.');
    } else {
      var formData = {
        name: name,
        email: email,
        message: message
      };
  
      // Form verilerini işleme
      submitForm(formData);
    }
  }
  
  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function submitForm(formData) {
    // Form verilerini burada kullanabilirsiniz
    console.log(formData);
  
    // Başka bir sayfaya yönlendirme
    window.location.href = '/success.html';
  }
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  