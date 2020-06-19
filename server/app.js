const express = require('express');
const graphqlHTTP = require('express-graphql');//acts as a middleware
const schema= require('./schema/schema');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

//allow cors
app.use(cors());


mongoose.connect('mongodb+srv://graphql:test123@firstgraphql-shjrp.mongodb.net/FirstGraphQl', {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
    if(!err){console.log('MongoDb Connection Succeeded.')}
    else{
        console.log('Nhi connect hua bhsdk kyon ki : ' + err);
    }
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () =>{
    console.log('now listening to port 4000');
})