import {expect} from 'chai';
import {pokerJudge} from '../src';


describe('Complete Test suite for the pokerJudge function:', () => {
  it('Should return correct wining hand ( the second hand ) based on high card poker hand', () => {
    const winingHand = pokerJudge(['2H', '3D', '5S', '9C', 'KD'], ['2C', '3H', '4S', '8C', 'AH']);
    expect(winingHand).to.be.equal(2);
  });


  it('Should return correct wining hand ( the first hand ) based on high card poker hand', () => {
    const winingHand = pokerJudge(['2C', '3H', '4S', '8C', 'AH'], ['2H', '3D', '5S', '9C', 'KD']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand ( the second hand ) when both hands have the same highest high card, but second hand have a kicker', () => {
    const winingHand = pokerJudge(['2H', '3D', '5S', '9C', 'KD'], ['2C', '3H', '4S', '10C', 'KH']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return tie when the two hands are the same', () => {
    const winingHand = pokerJudge(['2H', '3D', '5S', '9C', 'KD'], ['2H', '3D', '5S', '9C', 'KD']);
    expect(winingHand).to.be.equal(0);
  });

  it('Should return correct wining hand ( the second hand ) when two hands have a pair and the value of the second hand pair is higher', () => {
    const winingHand = pokerJudge(['2H', '3D', '3S', '9C', 'KD'], ['2C', '3H', '6S', '8C', '6H']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand ( the second hand ) when two hands have a pair and the value of the first hand pair is higher', () => {
    const winingHand = pokerJudge(['2C', '3H', '6S', '8C', '6H'], ['2H', '3D', '3S', '9C', 'KD']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand when the second hand has a pair and the first does not', () => {
    const winingHand = pokerJudge(['2C', '3H', '5S', '8C', '6H'], ['2H', '3D', '3S', '9C', 'KD']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand when the first hand has a pair and the second does not', () => {
    const winingHand = pokerJudge(['2H', '3D', '3S', '9C', 'KD'], ['2C', '3H', '5S', '8C', '6H']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return the correct wining hand ( the first hand ) when two hands has a pair, but the first hand has a kicker', () => {
    const winingHand = pokerJudge(['2H', '3D', '3S', '9C', 'AD'], ['2H', '3D', '3S', '9C', 'KD']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return the correct wining hand ( the second hand ) when two hands has a pair, but the second hand has a kicker', () => {
    const winingHand = pokerJudge(['2H', '3D', '3S', '9C', 'KD'], ['2H', '3D', '3S', '9C', 'AD']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return a tie when two hands have a pair of the same value, and the other cards are of the same value', () => {
    const winingHand = pokerJudge(['2H', '3D', '3S', '9C', 'AD'], ['2D', '3D', '3S', '9H', 'AD']);
    expect(winingHand).to.be.equal(0);
  });

  it('Should return the correct wining hand ( the first hand ) when the first hand has a better two pair', () => {
    const winingHand = pokerJudge(['2H', '9D', '9S', '3C', '3D'], ['3C', '3H', '6S', '8C', '8H']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return the correct wining hand ( the second hand ) when the second hand has a better two pair', () => {
    const winingHand = pokerJudge(['3C', '3H', '6S', '8C', '8H'], ['2H', '9D', '9S', '3C', '3D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return the correct wining hand ( the second hand ) when the second hand has a two pair while the first hand does not', () => {
    const winingHand = pokerJudge(['3C', '1H', '6S', '8C', '8H'], ['2H', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return the correct wining hand ( the first hand ) when the first hand has a two pair while the second hand does not', () => {
    const winingHand = pokerJudge(['2H', '4D', '4S', '3C', '3D'], ['3C', '4H', '6S', '8C', '4H']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return the correct wining hand ( the second hand ) when the second hand has a two pair and the first hand has a two pair, but the second hand has a kicker', () => {
    const winingHand = pokerJudge(['2H', '4D', '4S', '3C', '3D'], ['5H', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return tie when two hands has the same values of two pairs, and the same value of the remaining card', () => {
    const winingHand = pokerJudge(['5D', '4D', '4S', '3C', '3D'], ['5H', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(0);
  });

  it('Should return correct wining hand ( the first hand) when the first hand has 3 of a kind while the second hand does not', () => {
    const winingHand = pokerJudge(['2D', '2D', '2S', '3C', '3D'], ['AH', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand when two hands has 3 of a kind, and the second hand value is higher', () => {
    const winingHand = pokerJudge(['2D', '2D', '2S', '5C', '5D'], ['3D', '3D', '3S', '2C', '2D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand when two hands has 3 of a kind with the same value and the second hand has a kicker', () => {
    const winingHand = pokerJudge(['2D', '2D', '2S', '6C', '7D'], ['2D', '2D', '2S', '8C', '7D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return tie, when two hands has three of a kind of the same value, with the remaining cards of the same value', () => {
    const winingHand = pokerJudge(['2D', '2D', '2S', '6C', '7D'], ['2D', '2D', '2S', '7C', '6D']);
    expect(winingHand).to.be.equal(0);
  });

  it('Should return correct wining hand ( the first hand ), when it has a Straight while the other hand does not', () => {
    const winingHand = pokerJudge(['2D', '3D', '4S', '5C', '6D'], ['10D', '10D', '10S', 'AC', 'AD']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand ( the first hand ), when it has a flush  while the other hand does not', () => {
    const winingHand = pokerJudge(['2D', '10D', '7D', '8D', '3D'], ['10D', '10D', '10S', 'AC', 'AD']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand ( the second hand ), when it has a flush  while the other hand does not', () => {
    const winingHand = pokerJudge(['10D', '10D', '10S', 'AC', 'AD'], ['2D', '10D', '7D', '8D', '3D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand ( the first hand ), when it has a full house  while the other hand does not', () => {
    const winingHand = pokerJudge(['3C', '3D', '3S', '2C', '2D'], ['7D', '8D', '8D', '8D', 'AD']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand ( the second hand ), when it has a full house  while the other hand does not', () => {
    const winingHand = pokerJudge(['7D', '8D', '8D', '8D', 'AD'], ['3C', '3D', '3S', '2C', '2D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand ( the first hand ), when both has a full house, but the other has a greater value', () => {
    const winingHand = pokerJudge(['4C', '4D', '4S', '2C', '2D'], ['3C', '3D', '3S', '2C', '2D']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand ( the second hand ), when both has a full house, but the other has a greater pair', () => {
    const winingHand = pokerJudge(['4C', '4D', '4S', '2C', '2D'], ['4C', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand ( the first hand ), when it has  a four of a kind, while the other hand does not', () => {
    const winingHand = pokerJudge(['4C', '4D', '4S', '4C', '2D'], ['4C', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(1);
  });


  it('Should return correct wining hand ( the first hand ), when it has  a straight flush, while the other hand does not', () => {
    const winingHand = pokerJudge(['2C', '3C', '4C', '5C', '6C'], ['4C', '4D', '4S', '3C', '3D']);
    expect(winingHand).to.be.equal(1);
  });

  it('Should return correct wining hand ( the second hand ), when it has  a straight flush, while the other hand does not', () => {
    const winingHand = pokerJudge(['4C', '4D', '4S', '3C', '3D'], ['2C', '3C', '4C', '5C', '6C']);
    expect(winingHand).to.be.equal(2);
  });

  it('Should return correct wining hand ( the first hand ),when both has straight flush but one with higher value', () => {
    const winingHand = pokerJudge(['3C', '4C', '5C', '6C', '7C'], ['2C', '3C', '4C', '5C', '6C']);
    expect(winingHand).to.be.equal(1);
  });




});
