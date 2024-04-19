import { Player } from './player';

describe('Player', () => {
  it('should create an instance', () => {
    expect(new Player({id: 1, username: "Taylor"})).toBeTruthy();
  });
});
