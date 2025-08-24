 // === TIME AND DATE FUNCTIONALITY === //
function updateTimeAndDate() {
  const timeEl = document.querySelector('.time');
  const dateEl = document.querySelector('.date');

  const now = new Date();

  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const date = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

  timeEl.textContent = time;
  dateEl.textContent = date;
}

// প্রতি সেকেন্ডে সময় ও তারিখ আপডেট হবে
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate(); // পেজ লোডেই কল

// === TAB SWITCHING FUNCTIONALITY === //
const tabs = document.querySelectorAll('.tab_bar > div');
const contents = document.querySelectorAll('.main_container > div');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // সব content hide করো
    contents.forEach(content => {
      content.style.display = 'none';
    });

    // ক্লিক করা ট্যাবের content দেখাও
    contents[index].style.display = 'block';

    // active tab হাইলাইট
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// প্রথম content দেখাও
contents.forEach((content, i) => {
  content.style.display = i === 0 ? 'block' : 'none';
});

// this is acordion 

// === Modal FUNCTIONALITY === //
const addBtn = document.getElementById('addScheduleBtn');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  addBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });
 
  // count down timer
  const btn = document.getElementById("startBtn");
    const timerDisplay = document.getElementById("timer");

    btn.addEventListener("click", () => {
      let time = 30 ; // 30 মিনিট = 1800 সেকেন্ড
      btn.disabled = true;

      const countdown = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerDisplay.textContent = "Duration: " +
          String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

        time--;

        if (time < 0) {
          clearInterval(countdown);
          timerDisplay.innerHTML = "<h4 class='danger' >Session Complete!</h4>";
          btn.disabled = false;
        }
      }, 1000);
    });