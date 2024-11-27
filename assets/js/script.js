const textElement = document.getElementById("text");
const text = "مهندس برمجيات ومطور ويب فرونت اند";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 300); // التحكم بسرعة الكتابة (كل 100 ملي ثانية)
  } else {
    index = 0;
    textElement.textContent = "";
    setTimeout(typeWriter, 500); // إعادة التأثير بعد فترة قصيرة
  }
}

typeWriter();
