function checkPassword() {
  const correctPassword = "0857";
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("gallery").style.display = "block";
  } else {
    error.textContent = "密碼錯誤，請購買寫真領取密碼卡。";
  }
}
