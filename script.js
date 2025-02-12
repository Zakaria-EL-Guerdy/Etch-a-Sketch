const container = document.querySelector('.container');

function getUserInput() {
  let userInput = Number(prompt('enter the number of squares per side for the new grid'));

  if (userInput > 70) {
    alert('enter a number less than 70');
    getUserInput();
  } else {
    return userInput;
  }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  let userInput = getUserInput();
  let nbSquares = userInput ** 2;

  container.replaceChildren();

  for (let i = 0; i < nbSquares; i++) {
    const div = document.createElement('div');
    div.classList.add("child-div");
    div.addEventListener('mousemove', () => {
      div.style.backgroundColor = "red";
    })
    div.style.width = (320 / userInput) + "px";
    div.style.height = (329 / userInput) + "px";
    container.appendChild(div);
  }
})
