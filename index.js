const http = require('http');


http.createServer((req, res) =>{
    console.log(req);

    res.write('русский язык, romanización russki yazyk, pronunciación [ˈruskʲɪj jɪˈzɨk');
    res.end();
}).listen(3000);



