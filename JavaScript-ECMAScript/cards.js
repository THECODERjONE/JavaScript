
card_numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
card_suit = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getCardString(number, suit) {
  return `${number} of ${suit}`;
}

function getCardNumberPosition(number) {
  return card_numbers.indexOf(number)
}

function getCardSuitPosition(suit) {
  return card_suit.indexOf(suit);
}

function getPreviousCard(number, suit) {
  selected_card_number_position = getCardNumberPosition(number);
  selected_card_suit_position = getCardSuitPosition(suit);

  previous_card_number_position = ((selected_card_number_position - 1) < 0) ? (card_numbers.length - 1) : (selected_card_number_position - 1);

  previous_card_suit_position = selected_card_suit_position;
  if (!selected_card_number_position) {
    previous_card_suit_position = ((selected_card_suit_position - 1) < 0) ? (card_suit.length - 1) : (selected_card_suit_position - 1);
  }

  return getCardString(card_numbers[previous_card_number_position], card_suit[previous_card_suit_position]);
}

function getNextCard(number, suit) {

  selected_card_number_position = getCardNumberPosition(number);
  selected_card_suit_position = getCardSuitPosition(suit);

  next_card_number_position = (selected_card_number_position + 1) % card_numbers.length;

  next_card_suit_position = selected_card_suit_position;
  if (selected_card_number_position === card_number.length - 1) {
    next_card_suit_position = (selected_card_suit_position + 1) % card_suit.length;
  }

  return getCardString(card_numbers[next_card_number_position], card_suit[next_card_suit_position]);
}

selected_card_number = card_numbers[getRandomNumber(0, card_numbers.length)];
selected_card_suit = card_suit[getRandomNumber(0, card_suit.length)];

selected_card_string = getCardString(selected_card_number, selected_card_suit);
previous_card_string = getPreviousCard(selected_card_number, selected_card_suit);
next_card_string = getNextCard(selected_card_number, selected_card_suit);

console.log(`Previous -> ${previous_card_string}`);
console.log(`Selected -> ${selected_card_string}`);
console.log(`Next     -> ${next_card_string}`);