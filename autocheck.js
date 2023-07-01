function f1() {
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
  console.log(atTheOldToad.potions[0]);
  document.querySelector(".output-1").innerHTML = atTheOldToad.potions[1];
}
document.querySelector(".btn-1").onclick = f1;
