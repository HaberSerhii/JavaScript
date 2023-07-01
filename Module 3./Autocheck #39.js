function f1() {
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
        let potionIndex = this.potions[i];
        if (potionName === potionIndex) {
          const namePotion = this.potions.splice(i, 1);
          return `This "${potionName}" succesfull remove`;
        }
        return `Potion "${potionName}" can't find`;
      }
    },
  };
  document.querySelector(".output-1").innerHTML =
    atTheOldToad.removePotion("Speed potion");
  console.log(atTheOldToad.removePotion("Speed potion"));
  console.log(atTheOldToad.potions);
}
document.querySelector(".btn-1").onclick = f1;
