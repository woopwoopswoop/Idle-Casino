import { state, ads } from './state.js';
import { updateUI } from './ui.js';

let adInterval;

export function showAd() {
  document.getElementById('adContainer').style.display = 'block';
  document.getElementById('adPromptContainer').style.display = 'none';
  let progress = 0;

  adInterval = setInterval(() => {
    progress += 100;
    const percent = (progress / ads.duration) * 100;
    document.querySelector('.progress-fill').style.width = `${percent}%`;
    document.getElementById('adText').textContent = 
      ads.messages[Math.floor(Math.random() * ads.messages.length)];
    document.getElementById('closeAd').textContent = 
      `Closing disabled (${Math.ceil((ads.duration - progress)/1000)}s remaining)`;

    if (progress >= ads.duration) {
      clearInterval(adInterval);
      document.getElementById('closeAd').disabled = false;
      document.getElementById('closeAd').textContent = "Close Ad";
    }
  }, 100);
}

export function closeAd() {
  state.points += 100;
  state.clicksLeft = 10;
  document.getElementById('mainButton').classList.remove('broken');
  document.getElementById('adContainer').style.display = 'none';
  document.querySelector('.progress-fill').style.width = '0%';
  updateUI();
}
