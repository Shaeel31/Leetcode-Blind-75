// Approach 1


var minSteps = function (s, t) {
    if (s.length < t.length) return false;
 let sHashMap = {}
 let tHashMap = {}
 let steps = 0;

 for (let i = 0; i < s.length; i++) {
     if (!sHashMap[s[i]]) {
         sHashMap[s[i]] = 1
     }
     else {
         sHashMap[s[i]] = sHashMap[s[i]] + 1
     }
     if (!tHashMap[t[i]]) {
         tHashMap[t[i]] = 1
     }
     else {
         tHashMap[t[i]] = tHashMap[t[i]] + 1
     }
 }
 let keys = [...new Set(t.split(''))]
 for (let j = 0; j < keys.length; j++) {
     if (!sHashMap[keys[j]]) {
         steps += tHashMap[keys[j]]
         continue;
     }
     let diff = tHashMap[keys[j]] - sHashMap[keys[j]]
     if (diff > 0) {
         steps += diff;
     }
 }
 return steps ;
};

