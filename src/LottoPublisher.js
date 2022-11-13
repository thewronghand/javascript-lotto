const {
  isValidLottoNumbers,
  isValidLottoBonusNumber
} = require('../../backup/src/new/util/utils');

class LottoPublisher {
  #winningNumbers = [];
  #bonusNumber;

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  receiveUserInputWinningNumbers(input) {
    const numbers = input.split(',').map(Number);
    this.validateWinningNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  receiveUserInputBonusNumber(input) {
    const number = Number(input);
    this.validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  validateWinningNumbers(numbers) {
    isValidLottoNumbers(numbers);
  }

  validateBonusNumber(number) {
    isValidLottoBonusNumber(number, this.#winningNumbers);
  }

  checkMatchedLottoNumbersRank(numbers) {
    const match = numbers.filter((x) =>
      this.#winningNumbers.includes(x)
    ).length;
    const rank = 8 - match;
    if (match === 6) {
      return rank - 1;
    }
    if (match === 5 && numbers.includes(this.#bonusNumber)) {
      return rank - 1;
    }
    return rank;
  }
}

module.exports = LottoPublisher;
