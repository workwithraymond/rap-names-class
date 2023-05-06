const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 30,
        'birthName': 'Raymond Rodriguez',
        'birthLocation': 'New York City, United States',
    },
     'chance the Rapper': {
        'age': 28,
        'birthName': 'Manual Bryant',
        'birthLocation': 'Florida, United States',
    },
    'dylan': {
        'age': 32,
        'birthName': 'Dylan',
        'birthLocation': 'Texas, United States',
    },
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api:rapperName', (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase()
   if(rappers[rappersName]) {
    response.json(rappers[rappersName])
   }
   else {
    response.json(rappers['dylan'])
   }
    
    
})



app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})