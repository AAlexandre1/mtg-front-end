import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type({ id: 1, name: "Artifact" })).toBeTruthy();
  });
});
