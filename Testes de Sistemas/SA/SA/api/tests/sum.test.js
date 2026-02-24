test("Soma de vinte mais quatro é vinte e quatro" ,() => 
    { expect(20 + 4).toBe(24);
});



const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
});


const fruit01 = {
  flavor: 'grapefruit',
  ounces: 12,
};
const fruit02 = {
  flavor: 'grapefruit',
  ounces: 13,
};

describe('the La Croix cans on my desk', () => {
  test('have all the same properties', () => {
    expect(fruit01).toEqual(fruit02);
  });
  test('are not the exact same can', () => {
    expect(fruit01).not.toEqual(fruit02);
  });
});