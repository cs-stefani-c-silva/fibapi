const fibRule = require('./fib')

const getFib = (request, h) => {
    let n = Number(request.params.pos)
    const num = fibRule.fib(n)    
    return { position: n, value: num }
}

module.exports = {
    getFib
}