const antFacts = [
  "Ants can lift objects 50 times their own body weight.",
  "Ants use their antennae not only for touch but also for their sense of smell.",
  "Maricopa Harvester Ants are found in the southwestern United States and are known for their potent venomous sting.",
  "Some ant species can live up to 30 years.",
  "Ants have two sets of jaws - one for chewing and one for carrying items.",
  "The queen ant can lay thousands of eggs per day.",
  "Ants go through complete metamorphosis, including egg, larva, pupa, and adult stages.",
  "Ants have been farming for millions of years. Leafcutter ants, for example, cultivate fungus for food.",
  "Certain ant species can swim and even form living rafts to navigate floodwaters.",
  "Some species have venom that can cause allergic reactions in susceptible individuals.",
  "Army Ants don't build permanent nests, instead, they create temporary bivouacs using their own bodies to form living structures.",
  "The Bullet Ant is known for having the most painful insect sting.",
  "Ants have two stomachs - one for themselves and one for food storage.",
  "There are over 12,000 species of ants known to science.",
  "Ants communicate with each other using pheromones, Pheromones are chemical substances released by ants.",
];

let previousFact = "";

function getRandomAntFact() {
    const factElement = document.getElementById("fact");

    let randomFact;
    do {
        randomFact = antFacts[Math.floor(Math.random() * antFacts.length)];
    } while (randomFact === previousFact);

    factElement.textContent = randomFact;

    previousFact = randomFact;
}
