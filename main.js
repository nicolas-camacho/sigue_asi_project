const inquirer = require('inquirer')

let bigArray = []

let posQuestion = [{
  type: 'input',
  name: 'sPos',
  message: "Insert next positions",
}]

let fQuestion = [{
  type: 'list',
  choices: ['Show big Array', 'Insert next', 'Delete last'],
  message: "Select an option",
  name: 'option'
}]


const init = () => {
  inquirer.prompt(fQuestion).then(answers => {
    if(answers['option'] === 'Show big Array') {
      console.log(bigArray);
      init()
    }else if(answers['option'] === 'Delete last'){
      bigArray.pop()
      init()
    }else{
      insertSpos()
    }
  })
}


const insertSpos = () => {
  let sPos = []
  inquirer.prompt(posQuestion).then(answers => {
    sPos = answers['sPos']
    console.log(sPos);
    if(bigArray.includes(sPos)){
      console.log('Ya existe <3!!');
      console.log(`Posicicion ${bigArray.indexOf(sPos) + 1}`);
      init()
    }else{
      bigArray.push(sPos)
      init()
    }
  })
}

init()


