
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // biar bisa animasi ulang (opsional)
        }
    });
}, {
    threshold: 0.2, // muncul saat 20% elemen terlihat
    rootMargin: "0px 0px -50px 0px" // trigger sedikit lebih awal
});

reveals.forEach(el => observer.observe(el));
