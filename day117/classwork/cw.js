let getQuote = function(quotes, hero) {
  let index = -1;
  for (let i = 0; i < hero.length; i++) {
    let char = hero[i];
    if (char >= '0' && char <= '9') {
      index = Number(char);
      break;
    }
  }

  if (hero.startsWith('R')) return `Robin: ${quotes[index]}`;
  else if (hero.startsWith('J')) return `Joker: ${quotes[index]}`;
  else if (hero.startsWith('B')) return `Batman: ${quotes[index]}`;
}