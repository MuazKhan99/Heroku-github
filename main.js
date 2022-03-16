const express = require('express');
const app = express();
const PORT = process.env.PORT || 5446 
app.use(express.static('client'));

// omitted express.json method to show differences

app.use(express.json());



app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
})