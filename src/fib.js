// 1 2 3 5 8 13 21

exports.fib = function fib(n) {
  if(n <= 1) return 1
  return fib(n -1) + fib(n -2)
}

// GET fib/{position}
// { position: number, value: number }

// GET fib/6
// { position: 6, value: 13 }

// hapi + joi + hapi-swagger + hapi-swagger-ui
// app = supertest(server.listener)
// app.get('/fib/6'):Promise<Response>