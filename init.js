import { handleClick, buyAutoClicker } from './game/core.js';
import { showAd, closeAd } from './game/ads.js';
import { updateUI } from './game/ui.js';
import { state } from './game/state.js';

// Set Up Event Listeners
document.getElementById('mainButton').addEventListener('click', handleClick);
document.getElementById('buyAutoClicker').addEventListener('click', buyAutoClicker);
document.getElementById('adPromptButton').addEventListener('click', showAd);
document.getElementById('closeAd').addEventListener('click', closeAd);

// Random Ad Prompts
setInterval(() => {
  if (state.clicksLeft > 0 && Math.random() < 0.1) {
    document.getElementById('adPrompt').style.display = 'block';
    setTimeout(() => {
      document.getElementById('adPrompt').style.display = 'none';
    }, 3000);
  }
}, 10000);

// Initial UI Update
updateUI();
