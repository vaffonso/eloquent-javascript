// exports.skipSpace = function(string) {
//   const first = string.search(/\S|/);
//   if (first == -1) return '';
//   const noSpace = string.slice(first);
//   const re = /#(.+)?\n/;
//   const comment = re.exec(noSpace);
//   if (comment) {
//     return noSpace.slice(comment.index);
//   }
//   return noSpace;
// };

exports.skipSpace = function(string) {
  const skippable = string.match(/^(\s|#.*)*/);
  return string.slice(skippable[0].length);
};
