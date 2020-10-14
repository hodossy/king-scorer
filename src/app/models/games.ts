import { Player } from './player';
import { Score } from './score';

export enum NegativeGame {
  KING = 'King',
  NO_LAST_TWO ='No Last 2',
  NO_QUEENS ='No Queens',
  NO_JACKS ='No Jacks',
  NO_HEARTS ='No Hearts',
  NO_TRICKS ='No Tricks'
}

export enum PositiveGame {
  SUIT = 'Suit',
  SAN = 'San',
  MISER = 'Miser'
}

export interface Round {
  type: NegativeGame | PositiveGame,
  dealer: Player,
  score: Score
}

export interface Game {
  players: Array<Player>[4],
  rounds: Array<Round>[36]
}
