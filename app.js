let userAdjective1 = prompt("Adjective #1:");
let userName = prompt("Your Name:");
let userVerb1 = prompt("Verb #1:");
let userPlace1 = prompt("Place #1:");
let userAdjective2 = prompt("Adjective #1:");
let userColor1 = prompt("Color:");
let userAnimal1 = prompt("Animal:");
let userVerb2 = prompt("Verb #2:");
let userFood1 = prompt("Favorite Food:");
let userAdjective4 = prompt("Adjecive #4:");
let userNumber1 = prompt("Any Number 1-10:");
let userFeeling1 = prompt("Any feeling (emotions):");
let userObject1 = prompt("Any Object:");
let userAdjective5 = prompt("Adjective #5");
let userAnimal2 = prompt("Animal #2");
let userObject2 = prompt("Object #2");

let story = `
Once upon a time, there was a ${userAdjective1} princess named ${userName}.
Every day, ${userName} would ${userVerb1} in the ${userPlace1}, dreaming of ${userAdjective2} ${userColor1} ${userAnimal1}
One morning, while ${userVerb2} near the ${userPlace1},${userName} met a ${userAdjective2} ${userColor1} ${userAnimal1} who loved ${userFood1} more than anything else in the world.
The ${userAnimal1} spoke in a ${userAdjective4} voice and said, "Princess ${userName}, if you help me find the treasure, I will grant you ${userNumber1} wishes!"
Excited and ${userFeeling1}, ${userName} agreed. Together, they packed some ${userFood1} and started going to find the treasure, a ${userObject1}.
On their journey, they crossed the mountains, sailed across the seas, and even escaped a ${userAdjective5} ${userAnimal2} who guarded a cave full of ${userObject2}.
${userName} and the ${userAnimal1} continued their journey to find the treasure, eventually finding an old chest hidden in a cave.
They opened it expecting treasure, but it was completely filled with ${userFood1}.
Nothing magical. Nothing valuable. No treasure.Just ${userFood1}.
The ${userAnimal1} immediately started eating while Princess ${userName} tried to understand that this was the treasure. All Princess ${userName} wanted was her ${userNumber1} wishes.
Then the ${userAnimal1} said it, in that ${userAdjective4} voice, "Oh, I can't actually grant wishes, thanks for the ${userFood1} though!"
So Princess ${userName} and the ${userAdjective5} ${userColor1} ${userAnimal1} went back to the ${userPlace1}, enjoying their lifetime supply of ${userFood1}.

`;

document.getElementById("madlib-output").innerHTML = story;
