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


// اكواد ختصة للمدونة 
// تفعيل القائمة المحمولة
document.getElementById('mobile-menu').addEventListener('click', function() {
  var navMenu = document.getElementById('nav-menu');
  // تبديل العرض للقائمة
  if (navMenu.style.display === "block") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "block";
  }
});

// زر تحميل المزيد لإضافة مقالات جديدة
document.getElementById('load-more').addEventListener('click', function() {
  var postsContainer = document.getElementById('posts-container');
  var newPost = document.createElement('article');
  newPost.classList.add('post');
  newPost.innerHTML = `
    <h2 class="post-title">عنوان مقالة جديدة</h2>
    <p class="post-meta">بتاريخ: ${new Date().toISOString().split('T')[0]}</p>
    <p class="post-excerpt">
      هذه مقالة جديدة تمت إضافتها عبر زر تحميل المزيد باستخدام JavaScript.
    </p>
    <a href="#" class="read-more">اقرأ المزيد</a>
  `;
  postsContainer.appendChild(newPost);
});

// زر العودة للأعلى
var backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
