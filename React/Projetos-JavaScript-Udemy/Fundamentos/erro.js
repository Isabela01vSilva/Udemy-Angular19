function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.mensagem,
        date: new Date
    }
}
function imprimirNomeGritando(obj) {
    try{
      console.log(obj.name.toUpperCase() + '!!!')  
    } catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
    
}
const obj = { nome: 'Luiza' }
imprimirNomeGritando(obj)