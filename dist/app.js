"use strict";
const add = (a, b = 1) => {
    return a + b;
};
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5));
const hobby = ['soccer', 'tennis'];
const activeHobbies = ['baseboll'];
activeHobbies.push(...hobby);
console.log(activeHobbies);
//# sourceMappingURL=app.js.map