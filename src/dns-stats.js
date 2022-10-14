const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr;
  let dnsMap = new Map();
  domains.forEach((dns) => {
    let dnsArray = dns.split(".").reverse();    

    for (let i = 1; i < dnsArray.length+1; i++) {
      let partDns = '.' + dnsArray.slice(0, i).join('.');
      let value = dnsMap.get(partDns);
      if (value === undefined) {
        dnsMap.set(partDns, 1);
      } else { 
        dnsMap.set(partDns, value + 1);
      }      
    }    
  });

  return Object.fromEntries(dnsMap);
}

console.log(getDNSStats(['epam.com', 'info.epam.com']));

module.exports = {
  getDNSStats,
};
