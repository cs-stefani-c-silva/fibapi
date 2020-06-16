const fibHandler = require('./handler/fibHandler')

module.exports = [
     {
        method: 'GET',
        path: '/fib/{pos}',
        options: {
            handler: fibHandler.getFib,
            description: `Get number from Fibonacci's sequence`,
            notes: `Return the value in Fibonacci's sequence`,
            tags: ['api'],
            /*validate: {
                params: Joi.object({
                    id: Joi.number()
                    .required()
                    .description('the number position')
                })
            }*/
        }
    }
]