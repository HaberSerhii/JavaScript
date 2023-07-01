function f1() {
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
      const indexPotion = this.potions.indexOf(oldName);
      if (indexPotion !== -1) {
        this.potions.splice(indexPotion, 1, newName);
      }
    },
  };
  atTheOldToad.updatePotionName("Speed potion", "Great");
  document.querySelector(".output-1").innerHTML =
    atTheOldToad.potions.join(", ");
  console.log(atTheOldToad.potions);
}
document.querySelector(".btn-1").onclick = f1;
