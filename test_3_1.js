const calculateBonus = (a,b) => {
    let bonus;
    const sum = a + b;
    // sum > 50 ? (bonus = 50) : (bonus =sum);
    if (sum >50) {
        bonus = 50
    } else {
      bonus = sum
    }
     return bonus;
};

  module.exports = calculateBonus;