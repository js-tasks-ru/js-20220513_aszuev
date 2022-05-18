/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

    const arrNew = [...arr];

    function caseInsensitiveComparator(valueA, valueB) {
        const valueALowerCase = valueA.toLowerCase();
        const valueBLowerCase = valueB.toLowerCase();
         
        if (valueALowerCase < valueBLowerCase) {
            return -1;
        } else if (valueALowerCase > valueBLowerCase) {
            return 1;
        } else {
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        }
    };  
      
    function caseInsensitiveComparatorSort(valueALowerCase, valueBLowerCase) {
        return valueALowerCase.toLowerCase().localeCompare(valueBLowerCase.toLowerCase());
    } 
      
    if (param == 'asc') {
        const arrAsc = arrNew.sort(caseInsensitiveComparator);
        const arrAscNew =  arrAsc.sort(caseInsensitiveComparatorSort);
        return arrAscNew;
    } else if (param == 'desc') {
        const arrDesk = arrNew.sort(caseInsensitiveComparator);
        const arrDeskNew =  arrDesk.sort(caseInsensitiveComparatorSort).reverse();
        return arrDeskNew;
    }
}
