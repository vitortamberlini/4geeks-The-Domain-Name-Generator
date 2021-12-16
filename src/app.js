/* eslint-disable */

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let possible_dns = [];

  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        possible_dns.push(`${p}${a}${n}.com`);
      });
    });
  });

  document.getElementById("possible-dns").innerText = possible_dns.join("\n");
};
