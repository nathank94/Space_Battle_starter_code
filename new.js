//Space Ships
class SpaceShip {
    constructor(sName, hull, firepower, accuracy) {
      this.sName = sName;
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
  }
  
  const myShip = new SpaceShip("USS Schwarzenegger", 20, 5, 0.7);
  
  const alienS = new SpaceShip("Minion", 0, 0, 0);
  
  // Elements
  const attackBtnEl = document.getElementById("attackBtn");
  const bulletEl = document.getElementById("bullet");
  const pNameEl = document.getElementById("pName");
  const pHullEl = document.getElementById("pHull");
  const pFPowerEl = document.getElementById("pFPower");
  const pAccuracyEl = document.getElementById("pAccuracy");
  const aliensBlockEl = document.getElementById("aliens-block");
  const headerEl = document.getElementsByTagName("header")[0];
  const aliensEl = document.querySelectorAll("#aliens-block img");
  const gameOverEl = document.getElementById("gameOver");
  const pEl = document.getElementsByTagName("p");
  const footerEl = document.getElementsByTagName("footer")[0];
  const choiceBtnEl = document.getElementById("choiceBtn");
  const choiceMenuEl = document.getElementById("choiceMenu");
  const retreatEl = document.getElementById("retreat");
  const stayEl = document.getElementById("stay");
  const helpBtnEl = document.getElementById("helpBtn");
  const helpMsgEl = document.getElementById("helpMsg");
  
  const youWinEl = document.getElementById("youWin");
  const lastMessageEl = document.getElementById("lastMessage");
  
  // Global Variables
  let turn = 0;
  let aliensCounter = 6;
  let aliensBlockMaxWidth = 400;
  const initialHull = myShip.hull;
  let player = "";


  //Logic
const randomValue = function (min, max) {
    return Math.random() * (max - min) + min;
  };
  
  const promptFunc = function () {
    player = prompt("Enter Your Name: ");
    while (player === "" || player === null) {
      player = prompt("Now or later alligator! ");
    }
    headerEl.textContent = "Let's Start!";
    turn = 1;
  };