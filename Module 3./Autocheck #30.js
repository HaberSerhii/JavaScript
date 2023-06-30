function makeTask(data) {
  const completed = false;
  const category = data.category || "General";
  const priority = data.priority || "Normal";
  const { text } = data;

  const newData = {
    category,
    priority,
    text,
    completed,
  };

  return newData;
}

console.log(makeTask({}));
console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);
console.log(makeTask({ category: "Finance", text: "Take interest" }));
console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
console.log(makeTask({ text: "Buy bread" }));

// Пояснення
