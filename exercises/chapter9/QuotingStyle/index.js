exports.replaceQuoteMarks = text => {
  const regex = /(^|\W)'|'(\W|$)/g;
  return text.replace(regex, '$1"$2');
};
