const answerInput = document.getElementById("answer");
const enterBtn = document.getElementById("enterBtn");
const hint = document.getElementById("hint");

const CORRECT = "basira baddie";

function normalize(str){
  return (str || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function go(){
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = "letter.html", 420);
}

function check(){
  const typed = normalize(answerInput.value);
  if(!typed){ hint.textContent = "Type the nickname."; return; }
  if(typed === CORRECT){ hint.textContent = "Welcome."; go(); return; }
  hint.textContent = "Not quite. Try again.";
}

enterBtn.addEventListener("click", check);
answerInput.addEventListener("keydown", (e) => { if(e.key === "Enter") check(); });
