<?php
session_start();

// Kullanıcı adı ve şifreyi kontrol etmek için örnek veriler
$validUsername = 'admin';
$validPassword = 'password';

// Form gönderildiğinde
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Kullanıcı adı ve şifre doğruysa
  if ($username === $validUsername && $password === $validPassword) {
    $_SESSION['username'] = $username;
    header('Location: dashboard.php');
    exit();
  } else {
    $error = 'Geçersiz kullanıcı adı veya şifre.';
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Login Formu</title>
</head>
<body>
  <h1>Giriş Yap</h1>

  <?php if (isset($error)) { ?>
    <p><?php echo $error; ?></p>
  <?php } ?>

  <form method="post" action="login.php">
    <div>
      <label for="username">Kullanıcı Adı:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div>
      <label for="password">Şifre:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div>
      <button type="submit">Giriş Yap</button>
    </div>
  </form>
</body>
</html>
