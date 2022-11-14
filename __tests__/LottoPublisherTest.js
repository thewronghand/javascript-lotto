const LottoPublisher = require('../src/LottoPublisher');

describe('로또스토어 클래스 테스트', () => {
  const lottoPublisher = new LottoPublisher();
  test('당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,4,5,6,7');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,a,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 정수가 아닌 유리수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,3.014,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 음수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,-4,5,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 46 이상의 수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,4,50,6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호에 1 미만의 수가 포함되면 예외가 발생한다', () => {
    expect(() => {
      lottoPublisher.validateWinningNumbers('1,2,3,0,5,6');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateBonusNumber('보너스');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 ,로 구분된 여러 개의 숫자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateBonusNumber('1,2');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 소수점 이하를 포함한 숫자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateBonusNumber('3.14');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 음수를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateBonusNumber('-1');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 45보다 큰 숫자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateBonusNumber('46');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 1보다 작은 숫자를 입력하면 예외가 발생한다.', () => {
    expect(() => {
      lottoPublisher.validateBonusNumber('0');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 이미 당첨 번호로 설정된 숫자를 입력하면 예외가 발생한다.', () => {
    lottoPublisher.receiveUserInputWinningNumbers('1,2,3,4,5,6');
    expect(() => {
      lottoPublisher.validateBonusNumber('6');
    }).toThrow('[ERROR]');
  });

  test('당첨 번호를 입력하면 해당 값이 당첨 번호로 저장되고, getter로 이를 불러올 수 있다.', () => {
    lottoPublisher.receiveUserInputWinningNumbers('1,2,3,4,5,6');
    expect(lottoPublisher.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
