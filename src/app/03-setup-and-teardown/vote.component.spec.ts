import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  afterEach(() => {
    //  set down
  });

  it('should increment totalVotes when upvoted', () => {
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});
