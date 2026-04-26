let questions = [

/* Python */
{q:"What does 'is' operator check in Python?",o:["Value","Reference","Type","None"],a:1},
{q:"Shallow copy affects?",o:["Original object","New object only","Both","None"],a:0},
{q:"Generator uses?",o:["return","yield","break","pass"],a:1},
{q:"Time complexity of dict lookup?",o:["O(n)","O(log n)","O(1)","O(n2)"],a:2},
{q:"Mutable data type?",o:["tuple","string","list","int"],a:2},
{q:"Deep copy creates?",o:["Reference","New object","Pointer","None"],a:1},
{q:"Lambda function is?",o:["Named","Anonymous","Loop","Class"],a:1},
{q:"Python uses which memory model?",o:["Manual","Automatic","Hybrid","None"],a:1},

/* C */
{q:"Dangling pointer is?",o:["Valid pointer","Freed memory pointer","Null pointer","Constant"],a:1},
{q:"malloc() vs calloc() difference?",o:["Init memory","No difference","Type","Speed"],a:0},
{q:"Double free leads to?",o:["Safe","Crash","Optimization","None"],a:1},
{q:"Stack memory stores?",o:["Dynamic","Static","Function calls","Files"],a:2},
{q:"Heap memory is?",o:["Static","Dynamic","Temporary","None"],a:1},
{q:"Pointer arithmetic depends on?",o:["Size of type","Value","Index","None"],a:0},
{q:"NULL pointer means?",o:["0 address","Garbage","Random","None"],a:0},
{q:"sizeof operator returns?",o:["Bytes","Bits","Index","None"],a:0},

/* HTML */
{q:"Semantic HTML improves?",o:["Speed","SEO","Design","None"],a:1},
{q:"meta viewport used for?",o:["SEO","Responsive","Script","None"],a:1},
{q:"Block element example?",o:["span","a","div","img"],a:2},
{q:"Inline element example?",o:["div","p","span","section"],a:2},
{q:"DOM stands for?",o:["Document Object Model","Data Model","Display Model","None"],a:0},
{q:"id vs class?",o:["Unique vs multiple","Same","None","Both"],a:0},
{q:"<canvas> used for?",o:["Graphics","Text","Links","None"],a:0},
{q:"<section> is?",o:["Semantic","Inline","Script","None"],a:0},

/* CSS */
{q:"Flexbox is?",o:["1D layout","2D layout","None","Grid"],a:0},
{q:"Grid is?",o:["1D","2D","None","Flex"],a:1},
{q:"z-index works on?",o:["Positioned elements","All","None","Text"],a:0},
{q:"Specificity highest?",o:["class","id","tag","inline"],a:3},
{q:"display:none vs visibility:hidden?",o:["Both same","Space removed","Visible","None"],a:1},
{q:"position sticky works when?",o:["Scroll","Hover","Click","None"],a:0},
{q:"rem unit based on?",o:["Root","Parent","Body","None"],a:0},
{q:"overflow hidden means?",o:["Clip content","Scroll","Expand","None"],a:0},

/* JavaScript */
{q:"Closure is?",o:["Scope + function","Loop","Event","None"],a:0},
{q:"=== vs == ?",o:["Strict vs loose","Same","None","Type"],a:0},
{q:"Event bubbling means?",o:["Upward flow","Down","Stop","None"],a:0},
{q:"Promise handles?",o:["Sync","Async","Loop","None"],a:1},
{q:"Hoisting moves?",o:["Variables","Functions","Both","None"],a:2},
{q:"call/apply/bind used for?",o:["Context","Loop","DOM","None"],a:0},
{q:"setTimeout is?",o:["Sync","Async","Loop","None"],a:1},
{q:"NaN type is?",o:["Number","String","Boolean","None"],a:0},

/* Java */
{q:"JVM is?",o:["Virtual Machine","Compiler","Editor","None"],a:0},
{q:"JDK includes?",o:["JRE","JVM","Both","None"],a:2},
{q:"Overloading vs overriding?",o:["Compile vs runtime","Same","None","Both"],a:0},
{q:"Garbage collection does?",o:["Memory free","Compile","Run","None"],a:0},
{q:"Interface supports?",o:["Multiple inheritance","Single","None","Both"],a:0},
{q:"Thread is?",o:["Process","Lightweight process","None","Loop"],a:1},
{q:"Exception handling uses?",o:["try-catch","if","loop","None"],a:0},
{q:"Final keyword means?",o:["Constant","Loop","Class","None"],a:0}

];

let index = 0;
let score = 0;
let time = 15;
let timer;

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");
const timerEl = document.getElementById("timer");

function loadQuestion(){
  clearInterval(timer);
  time = 15;
  startTimer();

  let q = questions[index];
  qEl.innerText = q.q;
  optEl.innerHTML = "";

  q.o.forEach((opt,i)=>{
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = ()=>checkAnswer(i);
    optEl.appendChild(btn);
  });
}

function checkAnswer(i){
  if(i === questions[index].a) score++;
  nextQuestion();
}

function nextQuestion(){
  index++;
  if(index < questions.length){
    loadQuestion();
  } else {
    showResult();
  }
}

document.getElementById("nextBtn").onclick = nextQuestion;

function startTimer(){
  timer = setInterval(()=>{
    time--;
    timerEl.innerText = "Time: " + time;
    if(time === 0) nextQuestion();
  },1000);
}

function showResult(){
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("score").innerText = score + "/" + questions.length;
}

loadQuestion();