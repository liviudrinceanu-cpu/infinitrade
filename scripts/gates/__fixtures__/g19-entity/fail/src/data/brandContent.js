// Fixture for G19: identical to pass/ except the overview claims "peste 500
// de branduri" — a forbidden value per entityFacts.json.forbiddenValues
// (the index in this fixture has 2). This MUST fail G19.
export const brandContent = {
  grundfos: {
    overview: 'Grundfos furnizează pompe industriale în România din anul 2009, avem peste 500 de branduri în portofoliu.',
  },
};
export default brandContent;
