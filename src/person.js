const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 21;
const isSenior = (age) => age >= 65;
// export default isSenior; 
export {isAdult, canDrink, isSenior as default};