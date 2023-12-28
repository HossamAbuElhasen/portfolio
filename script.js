const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist= document.querySelector(".navlist")

menu.onclick=()  =>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active')
}  


// فتح السيره الذاتيه
function openCV() {
    window.open('cv.html', '_blank');
}


// ارسال رساله الى الجيميل
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // تكوين عنوان البريد الإلكتروني
    var subject = encodeURIComponent("Message from " + name);

    // تكوين جسم البريد الإلكتروني
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    // إنشاء الرابط لفتح التطبيق البريدي
    var mailtoLink = "mailto:toteehossam@gmail.com?subject=" + subject + "&body=" + body;

    // فتح نافذة بريد جديدة
    window.location.href = mailtoLink;
}


