const karzina = cartObj();

let obshiyNarx = 0;
let zakaz = "Sizning buyurtmangiz: ";

for (let tovar in karzina) {
  zakaz += `${tovar} ${karzina[tovar].info}, `;
  obshiyNarx += karzina[tovar].price;
}

const dastavkaNarxi = 9000;
obshiyNarx  += dastavkaNarxi;

zakaz += `
Dastavka xizmati bilan bo'lgan narx ${obshiyNarx } so'm.`;
zakaz += ` ||   Dastavka narxi (${dastavkaNarxi} so'm).`;

console.log(zakaz);



