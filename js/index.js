let btnUser = document.getElementById("btn-user");
let vUser = document.getElementById("v-user");
let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let active = 0;

function loadArtists() {
  fetch("assests/data/artists.json").then(res => res.json()).then(data => {
      let artistsList = document.getElementById("artists");
      let artistsHtml = "";
      for (let artist of data) {
        artistsHtml += `
          <li>
            <div>
              <div>
                <a href="">
                  <img src="${artist.image}" alt="">
                  <i class="fa-solid fa-play"></i>
                </a>    
              </div>
              <a href="">${artist.name}</a>
            </div>
          </li>
        `;
      }
      artistsList.innerHTML = artistsHtml;
    })
}

function loadCategorys() {
  fetch("assests/data/categorys.json").then(res => res.json()).then(data => {
      let categorysList = document.getElementById("categorys");
      let categorysHtml = "";
      for (let category of data) {
        categorysHtml += `
          <li>
            <div>
              <div>
                <a href="">
                  <img src="${category.image}" alt="">
                  <i class="fa-solid fa-play"></i>
                </a>    
              </div>
              <a href="">${category.name}</a>
            </div>
          </li>
        `;
      }
      categorysList.innerHTML = categorysHtml;
    })
}

/* Click and show */
function clickShow(e) {
  e.style.display = "block";
}
function clickEnd(e) {
  e.style.display = "none"
}
function clickFull(btnE, e) {
  let userClicked = false;
  let userClicking = false;
  btnE.onclick = function () {
    if (userClicked) {
      e.style.display = "none";
      userClicked = false;
    } else {
      e.style.display = "block";
      userClicked = true;
    }
  };
  // Xử lý sự kiện mouseup khi người dùng kết thúc click
  document.addEventListener("mouseup", function () {
    userClicking = false;
  });
  // Sự kiện mousedown khi người dùng bắt đầu click
  btnUser.addEventListener("mousedown", function () {
    userClicking = true;
  });
  document.addEventListener("click", function (event) {
    if (event.target === vUser || event.target === btnUser)
      return;
    else {
      vUser.style.display = "none";
      userClicked = false;
    }
  });
}
/* Slider */
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
window.onload = function () {
  loadArtists();
  loadCategorys();
  /* Click user */
  clickFull(btnUser, vUser);
  /* Slider animation */
  loadShow();
  next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
  };
  prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  };
  //AutoSlide
  let autoSlideInterval = 5000;
  function autoSlideShow() {
    active = (active + 1) % items.length;
    loadShow();
  }
  let autoSlideTimer = setInterval(autoSlideShow, autoSlideInterval);
  // // Tạm dừng chuyển slide tự động khi chuột di chuyển qua slider
  // slider.addEventListener("mouseover", () => {
  //   clearInterval(autoSlideTimer);
  // });
  
  // // Tiếp tục chuyển slide tự động khi chuột rời khỏi slider
  // slider.addEventListener("mouseout", () => {
  //   autoSlideTimer = setInterval(autoSlideShow, autoSlideInterval);
  // });
};
let register=document.querySelector('.js-register')
let modal=document.querySelector('.js-modal')
let modal1=document.querySelector('.js-modal1')
let login=document.querySelector('.js-login')
let exit=document.querySelector('.exit')
let exit1=document.querySelector('.exit1')
function showLog(){
  modal.classList.add('open')
}
register.addEventListener('click',showLog)
function hideLog(){
  modal.classList.remove('open')
}
exit.addEventListener('click',hideLog)
function showLog1(){
  modal1.classList.add('open')
}
function hideLog1(){
  modal1.classList.remove('open')
}
login.addEventListener('click',showLog1)
exit1.addEventListener('click',hideLog1)







