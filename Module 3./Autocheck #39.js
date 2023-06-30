const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      let potionIndex = this.potions[i];
      if (potionName === potionIndex) {
        this.potions.splice(i, 1);
        break;
      }
    }
  },
};
