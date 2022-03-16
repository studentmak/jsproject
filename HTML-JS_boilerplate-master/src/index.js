import './style.css';
import './done-sort.js'
import { drawEmptyDoneTaskSectionMessage, drawEmptyOpenTaskSectionMessage } from './function js/drawWelcomeMessage';
import { addTaskToLocaleStorage } from './function js/localeStorage/loacaleStorage';
import { findlasttaskid } from './function js/lastTask-id';
import { drawTaskFromLocalStorage } from './function js/localeStorage/drawLocaleStorage';
import { drawTask } from './function js/drawTask/drawTask';


drawEmptyOpenTaskSectionMessage ()
drawEmptyDoneTaskSectionMessage ()


const newTaskButton = document.querySelector('.ADD')

findlasttaskid()
let lastTaskid = findlasttaskid() +1; 


newTaskButton.onclick = function () {

  addTaskToLocaleStorage ({
    id: lastTaskid,
    title: document.querySelector('.newTaskname').value,
    creationDate: new Date(),
    completeDate: null
  })
  
  drawTask ({
    id: lastTaskid,
    title: document.querySelector('.newTaskname').value,
    creationDate: new Date(),
    completeDate: null
  })
  lastTaskid ++
}

drawTaskFromLocalStorage()

const searchTask = document.querySelector('.search-wrapper .search')
searchTask.addEventListener("input", function(){
  console.log (searchTask.value)
})




