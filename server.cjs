const express = require('express')
const app = 
app.get('/',function(request,response) {
    // const data={
            // "status" : "Welcome ;"
    // }
    // response.json(data)
response.json({
    "status" : "welcome "
})
})

app.listen(8000)



app.post('/add-entry', function)




Db.collection('ExpenseData')
.find()
.forEach(entry => entries.push(entry))
.then(function(){
    response.status(200).json(entries)
}).catch(function(){
    response.status(500).json({
        "status" : "could not fetch documents"
    })
    
})