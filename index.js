// code your solution here
// function saturdayFun () {
//     return 'This Saturday, I want to roller-skate!'
// }

// function mondayWork () {
//     return 'This Moday, I will go to the office.'
// }

function saturdayFun (activity= 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = function (activity= 'go to the office') {
    return `This Monday, I will ${activity}.`
}
let wrapAdjective = function (style=`*`) {
    return function (adjective= 'special') {
    return `You are ${style}${adjective}${style}!`
    }
}
