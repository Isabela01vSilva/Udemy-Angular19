const escola = "Cod3r"

console.log(escola.charAt(4))/* Localizar letra */
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))/* Dentro da tabela ask*/
console.log(escola.indexOf('3'))/* Retorna o que está dentro da palavra */

console.log(escola.substring(1)) /* A partir */
console.log(escola.substring(0, 3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")

console.log(escola.replace(3, 'e'))/* Alteração no meio da palavra */
console.log(escola.replace(/\w/g, 'ie'))/* Alterar a palavra inteira */

console.log('Ana, Maria, Clara, Pedro, João'.split(",")) /* Tranformou em um Array */
