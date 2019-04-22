//shuffle a deck of cards
cardDeck = [ 
  'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12',
  'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12',
  'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12',
  'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12'
];

let shuffledDeck = shuffleDeck(cardDeck);
console.log(shuffledDeck);

function shuffleDeck(array) {
  for(let oldPos = array.length - 1; oldPos > 0; oldPos--) {
    const newPos = Math.floor(Math.random() * (oldPos+1));
    [array[oldPos], array[newPos]] = [array[newPos],array[oldPos]];
  }
  return array;
}
