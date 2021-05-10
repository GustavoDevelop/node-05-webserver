const http = require('http');


http.createServer((req, res) =>{

    console.log(req);

    
    res.writeHead(200, {'Content-type': 'application/json'});
    const user = {
        id: 123,
        name: 'Fernando'
    }
    res.write(JSON.stringify(user));
    
    /*res.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv');
    res.writeHead(200, {'Content-type': 'application/csv'});
    
    res.write('id,name\n');
    res.write('123,Fernando\n');
    res.write('456,Marta\n');
    */

    res.end();
}).listen(3000);



