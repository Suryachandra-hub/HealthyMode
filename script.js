function selectGoal(goal) {
  let message = "";

  switch (goal) {
    case 'weightLoss':
      message = "Start with low-carb meals, morning walks, and drink more water.";
      break;
    case 'diabetes':
      message = "Avoid sugar, add whole grains, and monitor blood sugar daily.";
      break;
    case 'bp':
      message = "Reduce salt, exercise regularly, and check BP every week.";
      break;
    case 'fitness':
      message = "Add protein-rich foods, do strength training, and stay hydrated.";
      break;
  }

  document.getElementById('output').innerText = message;
}