/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address: string) {
    return address.split('.').join('[.]');
};

console.log(defangIPaddr('1.1.1.1'));
