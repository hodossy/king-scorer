# King Scorer
Scorer app for the game King

## Rules
This is the Hungarian variation of the game [King](https://en.wikipedia.org/wiki/King_(card_game)).

### Deck
One must put away the lowest 4 cards of each suit, thus only 6, 7, 8, ..., King, Ace cards remain for each suit.

###
In each round, the dealer hands out 9 cards to each player and chooses a hand to be played. Then he or she can play a card, and others must follow it with a card of the same suit. With no matching card in hand, any card can be played. The highest valued card wins the trick, and the winner can play the next card. Once all tricks are played, the next player becomes the dealer.

### Hands
There are 6 negative and 3 positive hands from which the dealer can choose. A hand can only be chosen once by any player, thus altogether 36 hands are played in a game.

#### Negative hands
In each negative hand, a total of 36 negative points are distributed.

  1. King - Whoever wins the trick containing the King of Hearts will get 36 negative points. No tricks can be started with a heart unless the player holds no other suit. The dealer cannot start his first trick with any card that is last of its suit.
  2. No Last 2 - Each of the last two trick worth 18 negative points.
  3. No Hearts - Each heart worth 4 negative points. No tricks can be started with a heart unless the player holds no other suit.
  4. No Queens - Each Queen worth 9 negative points.
  5. No Jacks - Each Jack worth 9 negative points.
  6. No Tricks - Each trick worth 4 negative points.

#### Positive hands
In each positive hande, a total of 108 points are distributed. Each trick worth 9 points for the dealer and 3 points for everybody else. Tricks won by other players than the dealer are counted together.

  1. Suit - A trump suit is chosen by the dealer.
  2. San - No trump suit is chosen.
  3. Miser - The value of the cards are reversed, thus 6 becomes the highest valued card, while Ace becomes the lowest. The dealer can play this game with or without a trump suit.

### Scoring
Each player's negative points are subtracted from the total of the positive points. Since there are 3\*108-6\*36 = 27 more positive points that negative, 27 must be subtracted from each player's score. Then the total score of the players should be 0. The player with the highest score wins.
