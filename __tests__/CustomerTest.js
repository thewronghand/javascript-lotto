const Customer = require('../src/Customer');
const Lotto = require('../src/Lotto');

describe('커스터머 클래스 테스트', () => {
  test('setNewLotto 메서드를 이용해 #lottos 필드에 새 로또를 추가할 수 있다', () => {
    const customer = new Customer();
    const lotto1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([7, 8, 9, 10, 11, 12]);
    customer.setNewLotto(lotto1);
    customer.setNewLotto(lotto2);
    expect(customer.list()).toEqual([lotto1, lotto2]);
  });
});
