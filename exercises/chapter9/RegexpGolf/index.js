// Fill in the regular expressions

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source === '...') return;
  for (const str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (const str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}

module.exports = () => {
  verify(/ca(r|t)+?/, ['my car', 'bad cats'], ['camper', 'high art']);

  verify(/pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop']);

  verify(
    /ferr(et|y|ari)$/,
    ['ferret', 'ferry', 'ferrari'],
    ['ferrum', 'transfer A']
  );

  verify(
    /ious\b/,
    ['how delicious', 'spacious room'],
    ['ruinous', 'consciousness']
  );

  verify(/\s[.|,|;|:]{1}/, ['bad punctuation .'], ['escape the period']);

  verify(/\w{7}/, ['hottentottententen'], ['no', 'hotten totten tenten']);

  verify(
    /\b[^\We]+\b/i,
    ['red platypus', 'wobbling nest'],
    ['earth bed', 'learning ape', 'BEET']
  );
};
