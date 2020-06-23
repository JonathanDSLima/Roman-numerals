const assert = require("chai").assert;
const [romanNumeralsConvert] = require("../src/main");

describe("Testes para o algoritmo de conversão", () => {
  it("Esperado que os valores sejam equivalentes", () => {
    assert.strictEqual(romanNumeralsConvert(4), "IV");
  });
  it("Esperado que os valores sejam distintos", () => {
    assert.notEqual(romanNumeralsConvert(5), "IV");
  });
  it("Esperado retornar verdadeiro para o tipo do retorno", () => {
    assert.isString(romanNumeralsConvert(5), true);
  });
  it("Esperado que retorne VI", () => {
    assert.isString(romanNumeralsConvert(6), "VI");
  });
  it("Esperado que os valores sejam equivalentes", () => {
    assert.strictEqual(romanNumeralsConvert(899), "DCCCXCIX");
  });
});
