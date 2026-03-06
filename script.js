let tasks=[]
let studyTasks=[]
let exerciseTasks=[]

function startAI(){

let type=prompt("What timetable do you want? \n1 = Study \n2 = Exercise")

if(type==1){

generateStudy()

}

else{

generateExercise()

}

}

function generateStudy(){

let level=prompt("Are you in school, college or graduation?")
let subjects=prompt("Enter subjects separated by comma")
let hours=prompt("How many hours daily study?")

let subjectList=subjects.split(",")

studyTasks=[]

for(let i=0;i<subjectList.length;i++){

studyTasks.push({

name:subjectList[i].trim()+" Study Session",

time:(9+i)+":00",

duration:60

})

}

renderStudy()

}

function generateExercise(){

let wake=prompt("What time do you wake up?")
let free=prompt("When are you free for workout?")
let time=prompt("How many minutes workout?")

exerciseTasks=[

{ name:"Warmup", time:free, duration:10 },

{ name:"Strength Training", time:free, duration:time-10 }

]

renderExercise()

}

function renderStudy(){

let list=document.getElementById("studyList")

list.innerHTML=""

studyTasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}

function renderExercise(){

let list=document.getElementById("exerciseList")

list.innerHTML=""

exerciseTasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}

function showTab(tab){

document.getElementById("studyContent").style.display="none"
document.getElementById("exerciseContent").style.display="none"

if(tab=="study"){

document.getElementById("studyContent").style.display="block"

}

else{

document.getElementById("exerciseContent").style.display="block"

}

}

function addManual(){

let name=document.getElementById("taskName").value
let date=document.getElementById("taskDate").value
let time=document.getElementById("taskTime").value
let duration=document.getElementById("taskDuration").value

tasks.push({name,date,time,duration})

renderManual()

}

function renderManual(){

let list=document.getElementById("taskList")

list.innerHTML=""

tasks.forEach(t=>{

let li=document.createElement("li")

li.innerHTML=`
<b>${t.name}</b><br>
📅 ${t.date}<br>
⏰ ${t.time}<br>
⏳ ${t.duration} min
`

list.appendChild(li)

})

}
