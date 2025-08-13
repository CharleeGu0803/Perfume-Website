// Define variables
let chosenSlideNumber = 1; // Current slide number
let offset = 0; // Slide offset
let barOffset = 0; // Navigation bar offset
let intervalID; // ID Timer ID
// Start the slide show
startSlide();
// Get all drawer buttons and add click event listeners to each button
const drawerBtns = Array.from(document.querySelectorAll(".drawer-btn"));
drawerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    clearInterval(intervalID); // Clear the timer
    startSlide(); // Restart the slide show
  })
})
//Get the slide area
const slideSection = document.querySelector("#slide-section");
//Clear the timer when the mouse enters the slide area
slideSection.addEventListener("mouseenter", () => {
  clearInterval(intervalID);
})
//Restart the slide show when the mouse leaves the slide area
slideSection.addEventListener("mouseleave", () => {
  startSlide();
})
//Switch to a specified slide number
function slideTo(slideNumber) {
  drawerboxToggle(slideNumber); // Toggle the drawer panel state
  drawerbtnToggle(slideNumber); // Toggle the drawer button state
  // Update the offset
  let previousSlideNumber = chosenSlideNumber;
  chosenSlideNumber = slideNumber;
  offset += (chosenSlideNumber - previousSlideNumber) * (-100); // Calculate the slide offset
  barOffset += (chosenSlideNumber - previousSlideNumber) * (100); // Calculate the navigation bar offset
  barSlide(barOffset); // Move the navigation bar
  // Get all slides and set the offset for each slide
  const slides = document.querySelectorAll(".card");
  Array.from(slides).forEach(slide => {
    slide.style.transform = `translateY(${offset}%)`;
  })
}
//Toggle the drawer box state
function drawerboxToggle(drawerboxNumber) {
  let prevDrawerboxNumber = chosenSlideNumber;
  const drawerboxes = document.querySelectorAll(".drawerbox");
  drawerboxes[prevDrawerboxNumber - 1].classList.toggle("active"); // Toggle the previous drawer panel's state
  drawerboxes[drawerboxNumber - 1].classList.toggle("active"); // Toggle the current drawer panel's state
}
//切换抽屉按钮状态 
//Toggle the drawer button state
function drawerbtnToggle(drawerBtnNumber) {
  let prevDrawerBtnNumber = chosenSlideNumber;
  const drawerBtns = document.querySelectorAll(".drawer-btn");
  drawerBtns[prevDrawerBtnNumber - 1].classList.toggle("active");
   // 切换前一个抽屉按钮的状态 
   //Toggle the previous drawer button's state
  drawerBtns[drawerBtnNumber - 1].classList.toggle("active"); 
  // 切换当前抽屉按钮的状态 
  //Toggle the current drawer button's state
}
// 移动导航条 
//Move the navigation bar
function barSlide(barOffset) {
  const bar = document.querySelector("#bar");
  bar.style.transform = `translateY(${barOffset}%)`;
}
// 启动幻灯片轮播 
//Start the slide show
function startSlide() {
  intervalID = setInterval(() => {
    slideTo(chosenSlideNumber % 4 + 1); //Switch to the next slide each time
  }, 3000); //Automatically switch slides every 3 seconds
}