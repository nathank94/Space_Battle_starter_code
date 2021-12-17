// DOM Queries
const startContainer = document.querySelector('#start-container');
const "bodyContainer" = document.querySelector('#body-container');
const createContainer = document.querySelector('#create-container')

// inputs
const fName = document.querySelector('#fname');
const chosenEle = document.querySelector('#chosen-element');

// battle prompt
const prompt = document.querySelector('#battle-prompt');

// player 1
const p1Name = document.querySelector('#p1-name');
const p1Ele = document.querySelector('#p1-element');

// player 2
const p2Name = document.querySelector('#p2-name')
const p2Ele = document.querySelector('#p2-element');

// battle
const battle = document.querySelector('#battle-button')

// Player Class
// JS trying to mimic OOP
// syntactical sugar
class Player {
	constructor(name, element) {
		this.name = name;
		this.element = element;
	}
}

const game = {
	start: () => {
		// console.log('We are starting a game!')
		startContainer.classList.add('hide');
		gameContainer.classList.remove('hide');
	},
	players: [],
	playerOneReady: false,
	createPlayer: function(currEle) {
		// console.log('Creating New Player');
		// console.log(this.playerOneReady);
		// checking for a truthy value - we'll need ! for this logic
		// if(this.playerOneReady)

		if (!this.playerOneReady) {
      p1Name.innerText = fName.value
			// console.log('false we are reaching', this.playerOneReady);
			this.players.push(new Player(fName.value, currEle));
			p1Ele.classList.remove('hide');
			prompt.innerText = 'Player 2: Enter name and element';
			// console.log(this.players);
			this.clearForm();
      this.playerOneReady = true
		} else {
      p2Name.innerText = fName.value
      this.players.push(new Player(fName.value, currEle));
			p2Ele.classList.remove('hide');
      // console.log(this.players)
      prompt.innerText = "Let's Battle!"
      battle.classList.remove('hide')
      createContainer.classList.add('hide')
    }
	},
	checkElement: function(event) {
		// form validation
		event.preventDefault();
		const currEle = chosenEle.value.toLowerCase();
		// console.log(currEle)
		// only have three options (fire, grass, water)
		// we saved value in currEle to be DRY
		if (currEle === 'water' || currEle === 'grass' || currEle === 'fire') {
			// console.log('you type correctly')
			chosenEle.style.backgroundColor = 'white';
			this.createPlayer(currEle);
		} else {
			// console.log('try again')
			chosenEle.style.backgroundColor = '#fd5e53';
		}
	},
	clearForm: function() {
		fName.value = '';
		chosenEle.value = '';
	},
  battle: function() {
    console.log('lets battle', this.players)
    const playerOne = this.players[0]
    const playerTwo = this.players[1]

    // Update element displays
    if(playerOne.element === 'fire') {
      p1Ele.src = `images/${playerOne.element}.jpeg`
    } else if(playerOne.element === 'grass') {
      p1Ele.src = `images/grass.png`
    } else if(playerOne.element === 'water') {
      p1Ele.src = `images/water.png`
    }

    if(playerTwo.element === 'fire') {
      p2Ele.src = `images/${playerTwo.element}.jpeg`
    } else if(playerTwo.element === 'grass') {
      p2Ele.src = `images/grass.png`
    } else if(playerTwo.element === 'water') {
      p2Ele.src = `images/water.png`
    }

    // Battle
    if(playerOne.element === 'fire' && playerTwo.element === 'grass') {
      prompt.innerText = `${playerOne.name} wins!`
    } else if (playerOne.element === 'grass' && playerTwo.element === 'water') {
      prompt.innerText = `${playerOne.name} wins!`
    } else if (playerOne.element === 'water' && playerTwo.element === 'fire') {
      prompt.innerText = `${playerOne.name} wins!`
    } else if(playerOne.element === playerTwo.element) {
      prompt.innerText = 'Tie! Both of them died!'
    } else {
      prompt.innerText = `${playerTwo.name} wins!`
    }
  
  }
};