// Fixture for G8 --strict (F0-07, used to prove runStrict()/F1-03 behaviour):
// the bare word "distribuitor" with NO forbidden qualifier next to it. Normal
// (non-strict) G8 must NOT flag this; --strict mode MUST flag it.
export const brandContent = {
  acme: {
    overview: 'Căutăm un distribuitor de piese de schimb pentru zona de sud a țării.',
  },
};

export default brandContent;
