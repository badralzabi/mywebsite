const thumb = document.querySelector(".scrollbar-thumb");
const percentageDisplay = document.querySelector(".scrollbar-percentage");
const navbarHeight = document.querySelector(".navbar").offsetHeight; // ارتفاع الناف بار

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // تحريك الشريط
  const thumbPosition = (scrollTop / scrollHeight) * (window.innerHeight - 50);
  thumb.style.top = `${thumbPosition}px`;

  // تحريك النسبة المئوية مع الشريط وبدء حسابها بعد الـ Navbar
  percentageDisplay.style.top = `${thumbPosition + navbarHeight}px`;
  percentageDisplay.textContent = `${Math.round(scrollPercentage)}%`;
});
