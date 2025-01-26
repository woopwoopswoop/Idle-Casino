import { state } from './state.js';
import { updateUI } from './ui.js';

// Main Click Functionality
export function handleClick() {
  if (state.clicksLeft <= 0) return;

  state.points += Math.random() < 0.3 ? 2 : 1;
  state.clicksLeft--;

  if (state.clicksLeft === 0) {
    document.getElementById('mainButton').classList.add('broken');
    document.getElementById('adPromptContainer').style.display = 'block';
  }

  updateUI();
}

// Auto-Clicker System
export function buyAutoClicker() {
  if (state.points >= state.autoClickerCost) {
    state.points -= state.autoClickerCost;
    state.autoClickers++;
    state.autoClickerCost = Math.floor(state.autoClickerCost * 3.5);

    setInterval(() => {
      state.points += Math.floor(Math.random() * 3) + 1;
      updateUI();
    }, 1000 + Math.random() * 4000);

    updateUI();
  }
}

