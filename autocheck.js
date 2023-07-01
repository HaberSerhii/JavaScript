function f1() {
  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],

    getPotions() {
      return this.potions;
    },

    addPotion(newPotion) {
      for (const potion of this.potions) {
        if (potion.name === newPotion.name) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      this.potions.push(newPotion);
    },

    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        if (potionName === this.potions[i].name) {
          return this.potions.splice(i, 1);
        }
      }
      return `Potion ${potionName} is not in inventory!`;
    },

    updatePotionName(oldName, newName) {
      for (const potion of this.potions) {
        if (potion.name === oldName) {
          return (potion.name = newName);
        }
      }
      return `Potion ${oldName} is not in inventory!`;
    },
  };
  console.log(atTheOldToad.updatePotionName("Stone skin", "Haber Serhii"));
  console.log(atTheOldToad.getPotions());
  console.log(atTheOldToad.addPotion(`New potion`));
  const potions = atTheOldToad.getPotions();
  const potionNames = potions.map((potion) => potion.name).join(", ");
  document.querySelector(".output-1").innerHTML = potionNames;
}
document.querySelector(".btn-1").onclick = f1;
