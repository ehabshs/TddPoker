export function pokerJudge(hand1, hand2) {

  const pokerHand1 = transformHandToPokerHand(sortHandAsc(hand1.slice()));
  const pokerHand2 = transformHandToPokerHand(sortHandAsc(hand2.slice()));

  return getWiningPokerHand(pokerHand1, pokerHand2);

}


function transformHandToPokerHand(hand) {

  const pokerHand = createDefaultPokerHand(hand);

  for (let i = 0, l = hand.length; i < l - 1; i++) {

    if (cardToSuit(hand[i]) !== cardToSuit(hand[i + 1])) {
      pokerHand.flush = 0;
    }

    if (cardToValue(hand[i + 1]) - cardToValue(hand[i]) > 1) {
      pokerHand.straight = 0;
    }

    if (i < l - 3) {
      if (cardToValue(hand[i]) === cardToValue(hand[i + 1]) && cardToValue(hand[i + 1]) === cardToValue(hand[i + 2]) && cardToValue(hand[i + 1]) === cardToValue(hand[i + 3])) {
        pokerHand.fourOfKind = cardToValue(hand[i]) * 4;
      }
    }


    if (i < l - 2) {
      if (cardToValue(hand[i]) === cardToValue(hand[i + 1]) && cardToValue(hand[i + 1]) === cardToValue(hand[i + 2])) {
        pokerHand.threeOfKind = cardToValue(hand[i]) * 3;
        pokerHand.threeOfKindStartIndex = i;
      }
    }

    if (!pokerHand.pair && cardToValue(hand[i]) === cardToValue(hand[i + 1])) {
      pokerHand.pair = cardToValue(hand[i]) * 2;
      pokerHand.pairStartIndex = i;
    } else if (pokerHand.pair && cardToValue(hand[i]) === cardToValue(hand[i + 1])) {
      pokerHand.twoPair = cardToValue(hand[i]) * 2;
    }

  }

  if ((pokerHand.pairStartIndex === 0 && pokerHand.threeOfKindStartIndex === 2) || (pokerHand.pairStartIndex === 3 && pokerHand.threeOfKindStartIndex === 0)) {
    pokerHand.fullHouse = pokerHand.threeOfKind;
  }

  if (pokerHand.flush && pokerHand.straight) {
    pokerHand.straightFlush = cardToValue(hand[hand.length - 1]);
  }

  return pokerHand;

}

function getWiningPokerHand(pokerHand1, pokerHand2) {


  const pokerSituations = ['straightFlush', 'fourOfKind', 'fullHouse', 'flush', 'straight', 'threeOfKind', 'twoPair', 'pair'];

  for (let i = 0, l = pokerSituations.length; i < l; i++) {

    const situation = pokerSituations[i];

    if (pokerHand1[situation] > pokerHand2[situation]) {
      return 1;
    }

    if (pokerHand2[situation] > pokerHand1[situation]) {
      return 2;
    }
  }

  for (let l = pokerHand1.highCard.length - 1, i = 0; l >= i; l--) {

    if (cardToValue(pokerHand1.highCard[l]) > cardToValue(pokerHand2.highCard[l])) {
      return 1;
    }

    if (cardToValue(pokerHand2.highCard[l]) > cardToValue(pokerHand1.highCard[l])) {
      return 2;
    }

  }

  return 0;

}


function sortHandAsc(hand) {
  hand.sort((a, b) => {
    return cardToValue(a) - cardToValue(b);
  });

  return hand;
}


function cardToSuit(card) {

  return card.slice(-1);

}


function cardToValue(card) {

  const cardValues = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    1: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  };

  return cardValues[card[0]];
}



function createDefaultPokerHand(hand) {

  return {
    highCard: hand,
    pair: 0,
    pairStartIndex: -1,
    twoPair: 0,
    threeOfKind: 0,
    threeOfKindStartIndex: -1,
    straight: 1,
    flush: 1,
    fullHouse: 0,
    fourOfKind: 0,
    straightFlush: 0
  };
}

