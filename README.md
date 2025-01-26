``` README FOR SKINNER'S CASINO: VOLUNTARY DESCENT ```
FOR NON-CODERS USING DEEPSEEK TO MODIFY THE GAME

===
``` WHAT IS THIS? ```
A browser-based satirical game about choice and addiction mechanics. Players:

Click a button to earn points
Buy auto-clickers to generate passive income
Watch forced ads to continue playing
Unlock higher-risk upgrades
The game intentionally mimics mobile game manipulation tactics as social commentary.
===
``` HOW TO PLAY ```

Open ```index.html``` in a web browser
Click the green "CLICK TO WIN" button (10 uses before breaking)
Earn enough points to buy AUTO-CLICKERS from the shop
When broken, click the red repair button to watch an ad
Unlock the Blackjack Table after buying 5 auto-clickers
===
``` FILE STRUCTURE ```
These files work together like puzzle pieces:

```index.html``` - The main game screen (text/buttons layout)
```styles.css``` - Colors, sizes, and visual styles
```game/``` folder - The brain of the game:
```state.js``` - All numbers and rules (easy to edit)
```core.js``` - Clicking and buying logic
```ads.js``` - Ad system behavior
```ui.js``` - Updates numbers on screen
```init.js``` - Connects everything on startup
===
``` CUSTOMIZATION GUIDE ```
Change these WITHOUT CODING by editing text/numbers:

CHANGE PRICES:
Open ```game/state.js``` and modify:
autoClickerCost: 10 → Change starting price
blackjackUnlocked requirements
ADD FUNNY MESSAGES:
In ```game/state.js```, edit the ads.messages list:
["New message here", "Another joke"]
MODIFY COLORS:
Open ```styles.css``` and search for color codes:
#2ecc71 = green button
#e74c3c = red elements
ADJUST TIMERS:
In ```game/state.js```:
ads.duration = 22000 → Change ad duration (milliseconds)
===
