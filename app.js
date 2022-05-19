const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = 4000;

app.get('/', (request, response) => {
    response.send('Hello express');
})

app.get('/movies/:genre/:year', (request, response) => {
    console.log(request.params.genre);
    console.log(request.params.year);
    
    response.send('Movie Route');
})



app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT);
});
