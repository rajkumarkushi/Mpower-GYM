const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");

//to view the menubar
menuBtn.addEventListener("click",(e)=>{

    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line":"ri-menu-line")
})

navLinks.addEventListener("click",(e)=>{
 navLinks.classList.remove('open');
 menuBtnIcon.setAttribute("class","ri-menu-line");
 });


 const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

   //header container

   ScrollReveal().reveal(".header-image img", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(
    ".header-content h4, .header-content .section-header",
    {
      ...scrollRevealOption,
      delay: 500,
  })

  ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // about container
ScrollReveal().reveal(".about-image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".about-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about-content .section-description", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about-card", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 500,
  });

  //price container
  ScrollReveal().reveal(".price-card", {
    ...scrollRevealOption,
    interval: 500,
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 20,
  });


  
  
