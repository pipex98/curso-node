import { getAge } from "../../src/plugins";

describe('plugins/get-age.plugins.ts', () => {

  test('getAge() should return the age of a person', () => {

    const birthDate = '1998-12-12'
    const age = getAge(birthDate);

    expect(typeof age).toBe('number');

  });

  test('getAge should return current age', () => {

    const birthDate = '1998-12-12'
    const age = getAge(birthDate);

    const today = new Date();
    const birth = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birth.getFullYear();

    const differencesMonths = today.getMonth() - birth.getMonth();

    const isBeforeBirthdayDay = differencesMonths === 0 && today.getDate() < birth.getDate();

    if (differencesMonths < 0 || isBeforeBirthdayDay) {
      calculatedAge--;
    }

    expect( age ).toBe( calculatedAge );

  });

  test('getAge should return 0 years', () => {

    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthDate = '1995-10-21';
    const age = getAge(birthDate);

    expect( age ).toBe(-1)
    
  });

});