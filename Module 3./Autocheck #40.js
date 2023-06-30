const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    const indexPotion = this.potions.indexOf(oldName);
    if (indexPotion !== -1) {
      this.potions.splice(indexPotion, 1, newName);
    }
  },
};
