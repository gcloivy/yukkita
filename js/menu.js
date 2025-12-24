// AMBIL DATA REGISTRASI
const nama = localStorage.getItem("nama") || "Nama Pengguna";
const email = localStorage.getItem("email") || "-";
const usia = localStorage.getItem("usia") || "-";
const gender = localStorage.getItem("gender") || "-";

// TAMPILKAN NAMA
document.getElementById("usernameText").innerText = "Hi " + nama;

// ISI SLIDE DATA
document.getElementById("dataNama").innerText = nama;
document.getElementById("dataEmail").innerText = email;
document.getElementById("dataUsia").innerText = usia;
document.getElementById("dataGender").innerText = gender;

// TOGGLE SLIDE
function toggleProfile() {
    const profileSlide = document.getElementById("profileSlide");
    profileSlide.classList.toggle("show");
}

function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}