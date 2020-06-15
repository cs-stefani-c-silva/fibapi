const fibHandler = require('./handler/fibHandler')

module.exports = [
     {
        method: 'GET',
        path: '/fib/{pos}',
        handler: fibHandler.getFib
    }
]