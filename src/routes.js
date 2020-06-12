const fibHandler = require('./handler/fib')

module.exports = [
     {
        method: 'GET',
        path: '/fib/{pos}',
        handler: fibHandler.fib
    }
]