function sumSalary(salaries) {
  let total = 0;
  for (let i in salaries) {
    typeof salaries[i] === "number" &&
    Number.isFinite(salaries[i]) &&
    salaries[i] !== Number.isNaN(salaries[i])
      ? (total += salaries[i])
      : "";
  }
  return total;
}
