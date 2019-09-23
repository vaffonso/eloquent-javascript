const flattening = (nestedArrays) => {


    const flattenedArray = nestedArrays.reduce(
        (accu, cur) => accu.concat(cur)
        , []);

    return flattenedArray;

}

module.exports = flattening;