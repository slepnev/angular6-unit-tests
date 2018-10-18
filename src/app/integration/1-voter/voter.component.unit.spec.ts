import { VoterComponent } from './voter.component';
import { async } from '@angular/core/testing';

describe('VoterComponent unit', () => {
  let component;

  beforeEach(async(() => {
    component = new VoterComponent();
  }));

  it('should increase total votes when I click the upvoter', function () {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });
});
