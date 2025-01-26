import { state } from './state.js';

export function updateUI() {
  // Update Numbers
  document.getElementById('points').textContent = Math.floor(state.points);
  document.getElementById('clicksLeft').textContent = state.clicksLeft;
  document.getElementById('autoClickers').textContent = state.autoClickers;
  
  // Update Point Generation Display
  document.getElementById('pps').textContent = 
    `${state.autoClickers * 1}-${state.autoClickers * 3}`;

  // Update Button States
  document.getElementById('buyAutoClicker').textContent = 
    `Cost: ${state.autoClickerCost}`;
  document.getElementById('buyAutoClicker').disabled = 
    state.points < state.autoClickerCost;
  document.getElementById('buyBlackjack').disabled = 
    !(state.autoClickers >= 5 && state.points >= 500);
}

