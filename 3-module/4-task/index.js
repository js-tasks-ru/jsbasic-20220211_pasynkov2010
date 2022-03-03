function showSalary(users, age) {
  let str = ''
  users
    .filter(user => user.age <= age)
    .forEach(({ name, balance }, index, array) => {
      if (index !== array.length - 1) {
        str += name + ', ' + balance + '\n';
      } else {
        str += name + ', ' + balance;
      }
    })
  return str;
}
