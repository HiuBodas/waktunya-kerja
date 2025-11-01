// ===========================
// TOGGLE SIDEBAR (Desktop & Mobile)
// ===========================
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  sidebar.classList.toggle('hidden'); // desktop
  sidebar.classList.toggle('active'); // mobile
  overlay.classList.toggle('show');
}

function closeMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  sidebar.classList.add('hidden');
  sidebar.classList.remove('active');
  overlay.classList.remove('show');
}

// Sembunyikan sidebar saat halaman load (desktop)
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('hidden');

  // Mulai marquee lowongan
  initJobMarquee();
});


// ===========================
// MARQUEE LOWONGAN (VERTIKAL)
// ===========================
function initJobMarquee() {
  const container = document.querySelector('.job-marquee-container');
  if (!container) return;

  const items = Array.from(container.children);
  let index = 0;
  const itemHeight = items[0].offsetHeight; // tinggi tiap item
  const totalItems = items.length;

  // Posisi awal
  items.forEach((item, i) => {
    item.style.top = `${i * itemHeight}px`;
    item.classList.add('job-item'); // pastikan class job-item ada
  });

  setInterval(() => {
    index++;
    items.forEach((item, i) => {
      // Geser semua item ke atas
      let newTop = ((i - index) * itemHeight);
      // jika sudah lewat atas, pindahkan ke bawah
      if (newTop < -itemHeight) {
        newTop = (totalItems - 1) * itemHeight + (newTop + itemHeight);
      }
      item.style.top = `${newTop}px`;
    });

    // Reset index agar tidak membengkak terus
    if (index >= totalItems) index = 0;
  }, 3000); // 3 detik per scroll
}
