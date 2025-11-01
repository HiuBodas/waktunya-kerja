// Akun perusahaan dummy
const dummyPerusahaan = {
  email: "admin@perusahaan.com",
  password: "12345"
};

// Ambil form login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload halaman

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === dummyPerusahaan.email && password === dummyPerusahaan.password) {
    // simpan status login di localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    
    // redirect ke dashboard perusahaan
    window.location.href = "dashboard_perusahaan.html";
  } else {
    alert("Email atau kata sandi salah!");
  }
});
