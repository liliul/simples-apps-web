function letraPorLetra(text, letras = []) {
  const normalizeTEXT = text.toLowerCase();
  const normalizeLETRAS = letras.toLowerCase();

  for (result of normalizeTEXT) {
    console.log(result);
    if (result[normalizeLETRAS]) {
      console.log("sim");
    }
  }
}

console.log(letraPorLetra("teste", "set"));
