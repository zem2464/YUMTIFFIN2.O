
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')
const dbName='db3';
// Connect to database
client.connect()
    .then(() => {console.log('Connected Successfully');
    
    // create a database
    // create a collection
    // const dbo=client.db(dbName).createCollection('stud');
    // dbo.then(()=>
    // {
    //   console.log("collection created succesfully");
    // })
    // .catch(error=>console.log('Failed to create', error))
    const dbob=client.db(dbName);
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];
    dbob.collection('stud').insertMany(myobj,(err,res)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(res);
            client.close();
        }
        
    })
 
    })
    .catch(error => console.log('Failed to connect', error))

 
