const calculateBonus = (a,b) => {
    let bonus;
    const sum = a + b;
    sum > 50 ? (bonus = 50) : (bonus = sum);
    return bonus;
};

  //>50
  //<50
  //50
  //0
  //0.01
  //-1
  //6786896896895785

  test('>50', () => {
    expect(calculateBonus(1,50)).toEqual(50);
});
test('<50', () => {
    expect(calculateBonus(1,48)).toEqual(49);
});
test('0', () => {
    expect(calculateBonus(0,0)).toEqual(0);
});
test('0.01', () => {
    expect(calculateBonus(0,0.01)).toEqual(0.01);
});
test('-1', () => {
    expect(calculateBonus(-1)).toEqual(-1);
});
test('6786896896895785', () => {
    expect(calculateBonus(6786896896895785)).toEqual(6786896896895785);
});




