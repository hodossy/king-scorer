export enum Suit {
  DIAMONDS,
  CLOVERS,
  HEARTS,
  SPADES
}

export enum Rank {
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
  ACE
}

export interface Card {
  suit: Suit,
  rank: Rank
}
