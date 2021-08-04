//test
// const game = {
//     ship1: 4,
//     ship2: 3,
//     attack(point){
//         if(point == this.ship1){
//             return `Ship 1 has been taken down`
//         }
//         if(point == this.ship2){
//             return `Ship 2 has been taken down`
//         }
//         else return `That was a miss`
//     }
// }

let userName = document.querySelector(".input-name");
let startBtn = document.querySelector(".startGame");
let screen = document.querySelector(".start");
let body = document.querySelector("body");
let attacks = document.createElement("h3");
const mainDiv = document.createElement("div");
let heading = document.createElement("h1");
let playground = document.createElement("div");
let judge = document.createElement("div")
let info = document.createElement("div");
let userInfo = document.createElement("h2");
let compInfo = document.createElement("h2");
const winning = [];
const compAttacks = [];
attacks.className = "attacksInfo";
let enemyScore = 0
let playerScore = 0

startBtn.addEventListener("click", () => {
  if (userName.value === "") {
    document.querySelector(".input-name").style.border = "2px solid red";
  }
  if (userName.value !== "") {
    screen.remove();
    gamePlayground();
  }
});
function gamePlayground() {
  modal(body);

  body.appendChild(mainDiv);
  mainDiv.appendChild(heading);
  mainDiv.appendChild(judge);
  mainDiv.appendChild(info);
  info.appendChild(userInfo);
  info.appendChild(compInfo);
  userInfo.textContent = "You";
  compInfo.textContent = "Enemy";
  info.classList.add("infoDiv");
  mainDiv.appendChild(playground);
  heading.textContent = "Welcome captain, " + userName.value;
  playground.classList.add("playground");
  heading.style.textAlign = "center";
  heading.style.marginTop = "20px";
  judge.classList.add("judge")
  judge.textContent = "WE ARE UNDER ATTACK!!" 


}
function player(div, diff) {
  const playerBoard = document.createElement("div");
  const boxes = Array.from({ length: 200 }, () =>
    document.createElement("div"),
  );

 
  div.appendChild(playerBoard);
  div.appendChild(attacks);
  for (i = 0; i < boxes.length; i++) {
    playerBoard.appendChild(boxes[i]);
    boxes[i].className = "playerBoxes";
  }
  playerBoard.className = "playerBoard";
  let shipsPos = [
    Math.ceil(Math.random() * 200),
    Math.ceil(Math.random() * 200),
    Math.ceil(Math.random() * 200),
    Math.ceil(Math.random() * 200),
  ];
  boxes.forEach((box) => {
    box.style.textAlign = "center";
  });

  for (i = shipsPos[0]; i <= shipsPos[0] + 4; i++) {
    boxes[i].id = "ship";
    boxes[i].style.backgroundColor = "grey";
  }
  for (i = shipsPos[1]; i <= shipsPos[1] + 3; i++) {
    boxes[i].id = "ship";

    boxes[i].style.backgroundColor = "grey";
  }
  for (i = shipsPos[2]; i <= shipsPos[2] + 4; i++) {
    boxes[i].id = "ship";

    boxes[i].style.color = "grey";
  }
  for (i = shipsPos[3]; i <= shipsPos[3] + 3; i++) {
    boxes[i].id = "ship";
    boxes[i].style.color = "grey";
  } 

  setInterval(function () {
    i = Math.ceil(Math.random() * 200);
      if (boxes[i].id == "ship") {
        compAttacks.push(boxes[i]);
        boxes[i].textContent = "X";
        boxes[i].style.backgroundColor = "red";
        judge.textContent = "Enemy shot our ship :("
        judge.style.color = "red"
        console.log(compAttacks);
      }
      if (boxes[i].id != "ship") {
        boxes[i].textContent = "X";
        judge.textContent = "Enemy shot in the ocean!"
        judge.style.color = "blue"
        
      }
     
  }, diff);
}

function computer(div) {
  const playerBoard = document.createElement("div");
  const boxes = Array.from({ length: 200 }, () =>
    document.createElement("div"),
  );
  div.appendChild(playerBoard);
  for (i = 0; i < boxes.length; i++) {
    playerBoard.appendChild(boxes[i]);
    boxes[i].className = "compBoxes";
  }
  playerBoard.className = "playerBoard";
  let shipsPos = [
    Math.ceil(Math.random() * 200),
    Math.ceil(Math.random() * 200),
    Math.ceil(Math.random() * 200),
    Math.ceil(Math.random() * 200),
  ];
  for (i = shipsPos[0]; i <= shipsPos[0] + 4; i++) {
    boxes[i].id = "red";
  }
  for (i = shipsPos[1]; i <= shipsPos[1] + 2; i++) {
    boxes[i].id = "red";
  }
  for (i = shipsPos[2]; i <= shipsPos[2] + 4; i++) {
    boxes[i].id = "red";
  }
  for (i = shipsPos[3]; i <= shipsPos[3] + 2; i++) {
    boxes[i].id = "red";
  }
  boxes.forEach((box) => {
    box.addEventListener(
      "click",
      () => {
        box.style.textAlign = "center";
        if (box.id != "red") {
          judge.textContent = "You took a shot in the waters!"; 
          box.style.backgroundColor = "#00CCFF";
        }
        if (box.id == "red") {
          box.style.backgroundColor = "red";
          judge.textContent = "You shot an enemy ship!";
          
          winning.push(box);
          console.log(winning);
          if (
            winning.includes(boxes[shipsPos[0]]) &&
            winning.includes(boxes[shipsPos[0] + 1]) &&
            winning.includes(boxes[shipsPos[0] + 2]) &&
            winning.includes(boxes[shipsPos[0] + 3])
          ) {
            boxes[shipsPos[0]].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[0] + 1].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[0] + 2].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[0] + 3].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[0]].textContent = "X";
            boxes[shipsPos[0] + 1].textContent = "X";
            boxes[shipsPos[0] + 2].textContent = "X";
            boxes[shipsPos[0] + 3].textContent = "X";
            judge.textContent = "You shot down enemy ship :)"; 
            judge.style.color = "green" 
            
          }
          if (
            winning.includes(boxes[shipsPos[1]]) &&
            winning.includes(boxes[shipsPos[1] + 1]) &&
            winning.includes(boxes[shipsPos[1] + 2])
          ) {
            boxes[shipsPos[1]].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[1] + 1].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[1] + 2].style.backgroundColor = "rgb(131, 27, 27)";

            boxes[shipsPos[1]].textContent = "X";
            boxes[shipsPos[1] + 1].textContent = "X";
            boxes[shipsPos[1] + 2].textContent = "X";
            judge.textContent = "You shot down enemy ship :)";
            judge.style.color = "green" 

          }
          if (
            winning.includes(boxes[shipsPos[2]]) &&
            winning.includes(boxes[shipsPos[2] + 1]) &&
            winning.includes(boxes[shipsPos[2] + 2]) &&
            winning.includes(boxes[shipsPos[2] + 3]) &&
            winning.includes(boxes[shipsPos[2] + 4])
          ) {
            boxes[shipsPos[2]].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[2] + 1].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[2] + 2].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[2] + 3].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[2] + 4].style.backgroundColor = "rgb(131, 27, 27)";

            boxes[shipsPos[2]].textContent = "X";
            boxes[shipsPos[2] + 1].textContent = "X";
            boxes[shipsPos[2] + 2].textContent = "X";
            boxes[shipsPos[2] + 3].textContent = "X";
            boxes[shipsPos[2] + 4].textContent = "X";            
            judge.textContent = "You shot down enemy ship :)";
            judge.style.color = "green" 

            
          }
          if (
            winning.includes(boxes[shipsPos[3]]) &&
            winning.includes(boxes[shipsPos[3] + 1]) &&
            winning.includes(boxes[shipsPos[3] + 2])
          ) {
            boxes[shipsPos[3]].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[3] + 1].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[3] + 2].style.backgroundColor = "rgb(131, 27, 27)";
            boxes[shipsPos[3]].textContent = "X";
            boxes[shipsPos[3] + 1].textContent = "X";
            boxes[shipsPos[3] + 2].textContent = "X";        
            judge.textContent = "You shot down enemy ship :)";
            judge.style.color = "green" 

          }
          if (
            winning.includes(boxes[shipsPos[0]]) &&
            winning.includes(boxes[shipsPos[0] + 1]) &&
            winning.includes(boxes[shipsPos[0] + 2]) &&
            winning.includes(boxes[shipsPos[0] + 3]) &&
            winning.includes(boxes[shipsPos[1]]) &&
            winning.includes(boxes[shipsPos[1] + 1]) &&
            winning.includes(boxes[shipsPos[1] + 2]) &&
            winning.includes(boxes[shipsPos[2]]) &&
            winning.includes(boxes[shipsPos[2] + 1]) &&
            winning.includes(boxes[shipsPos[2] + 2]) &&
            winning.includes(boxes[shipsPos[2] + 3]) &&
            winning.includes(boxes[shipsPos[3]]) &&
            winning.includes(boxes[shipsPos[3] + 1]) &&
            winning.includes(boxes[shipsPos[3] + 2]) &&
            winning.includes(boxes[shipsPos[2] + 3])
          ) {
            judge.textContent = "You Won";
            setTimeout(winningModal, 900)
            boxes.forEach((box) => {
              if (box.id !== "red") {
                box.style.backgroundColor = "#00CCFF";
              }
              if (box.id == "red") {
                box.style.backgroundColor = "rgb(131, 27, 27)";
                box.textContent = "X";
              }
            });
          }
        }
      },
      { once: true },
    );
  });
}

function winningModal(){
  let modalWrapper = document.createElement("div");
  let modal = document.createElement("div"); 
  let heading = document.createElement("h2");  
  let start = document.createElement("button");
  body.appendChild(modalWrapper);
  modalWrapper.appendChild(modal); 
  modal.appendChild(heading);  
  modal.appendChild(start);
 
  modalWrapper.classList.add("modal-wrapper");
  modal.classList.add("win-modal");
  heading.classList.add("modal-heading"); 
  start.classList.add("win-modal-start");  
  modalWrapper.style.display = "block";

  heading.textContent = "You WON!"; 

  start.textContent = "Play Again?";
  start.addEventListener("click", () => {
   location.reload() 
  });

}

function modal(div) {
  let modalWrapper = document.createElement("div");
  let modal = document.createElement("div");
  let logo = document.createElement('img')
  let heading = document.createElement("h2");
  let subHeading = document.createElement("p");
  let choose = document.createElement("select");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  let start = document.createElement("button");
  div.appendChild(modalWrapper);
  modalWrapper.appendChild(modal);
  modal.appendChild(logo)
  modal.appendChild(heading);
  modal.appendChild(subHeading);
  modal.appendChild(choose);
  choose.appendChild(option1);
  choose.appendChild(option2);
  choose.appendChild(option3);
  modal.appendChild(start);

  logo.src = "./assets/logo.png"
  modalWrapper.classList.add("modal-wrapper");
  modal.classList.add("modal");
  heading.classList.add("modal-heading");
  choose.classList.add("modal-choose");
  start.classList.add("modal-start");
  subHeading.classList.add("modal-subHeading");
  logo.classList.add("modal-logo")
  heading.textContent = "Welcome captain, " + userName.value;
  subHeading.textContent = "Choose difficulty";
  option1.textContent = "Easy";
  option2.textContent = "Mid";
  option3.textContent = "Hard";

  start.textContent = "Start";
  start.addEventListener("click", () => {
    if (choose.value == "Easy") {
      player(playground, 2500);
      computer(playground);
    }
    if (choose.value == "Mid") {
      player(playground, 1300);
      computer(playground);
    }
    if (choose.value == "Hard") {
      player(playground, 700);
      computer(playground);
    }
    modalWrapper.style.display = "none";
  });
  // modalWrapper.addEventListener('click', () => {
  //   modalWrapper.style.display = "none";
  //   player(playground, 2500);
  //   computer(playground);
  // })
}
