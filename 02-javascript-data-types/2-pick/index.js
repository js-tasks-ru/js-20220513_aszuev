/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    let fruitsArr = [];
  
    for (const [key, value] of Object.entries(fields)) {
        const fruitKey = fields[key];
        const fruitValue = parseInt(obj[value]);
        fruitsArr.push([fruitKey,fruitValue]);
    }

    fruitsArr = Object.fromEntries(fruitsArr)
    return fruitsArr
};
