import { Injectable } from '@angular/core';

import { Player, Score, TOTAL_NEGATIVE, TOTAL_POSITIVE } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RoundScorerService {
  private _score: Score;

  constructor() { }

  isValid(isPositive: boolean): boolean {
    return isPositive ? this.total == TOTAL_POSITIVE : this.total == TOTAL_NEGATIVE;
  }

  setScore(player: Player, score: number) {
    this._score[player.name] = score;
  }

  get score(): Score {
    return this._score;
  }

  get total(): number {
    return Array.from(this._score.values()).reduce((cum, cur) => {return cum + cur}, 0);
  }
}
