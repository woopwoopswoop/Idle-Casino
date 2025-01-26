# SKINNER'S CASINO: VOLUNTARY DESCENT  
**For Non-Coders Using DeepSeek to Modify the Game**

---

## 🔍 WHAT IS THIS?
A browser-based satirical game about choice and addiction mechanics. Players:
- Click a button to earn points
- Buy auto-clickers to generate passive income
- Watch forced ads to continue playing 
- Unlock higher-risk upgrades

*The game intentionally mimics mobile game manipulation tactics as social commentary.*

---

## 🕹 HOW TO PLAY
1. Open `index.html` in a web browser
2. Click the green **"CLICK TO WIN"** button (10 uses before breaking)
3. Earn points to buy **AUTO-CLICKERS** from the shop
4. When broken, click the red repair button to watch an ad
5. Unlock the **Blackjack Table** after buying 5 auto-clickers

---

## 📁 FILE STRUCTURE
These files work together like puzzle pieces:

- `index.html` - Main game screen (text/buttons layout)
- `styles.css` - Colors, sizes, and visual styles
- `/game` folder - The brain of the game:
  - `state.js` - All numbers and rules (easy to edit)
  - `core.js` - Clicking and buying logic
  - `ads.js` - Ad system behavior
  - `ui.js` - Updates numbers on screen
  - `init.js` - Connects everything on startup

---

## 🛠 CUSTOMIZATION GUIDE
**Change these WITHOUT CODING** by editing text/numbers:

### 💲 CHANGE PRICES:
1. Open `game/state.js`
2. Modify:
```js
autoClickerCost: 10 // ← Change starting price
blackjackUnlocked requirements
