const http = require('http');

const fs = require('fs')

function page(page,res) {
    fs.readFile(page, (err,data) => {
        if(err){
            res.writeHead(404);
            res.write('Error : page not found');
        }else{
            res.write(data);
        }
    })
    res.end();
}

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    if(url === '/about'){
        page('./about.html', res);
    } else if(url ==='/contact'){
        page('./contact.html', res)
    }else{
        page('./index.html', res)
    }

    res.writeHead(200,{
        'Content-Type' : 'text/html'
    })
})

.listen(3000, ()=>{
    console.log('Server is listening on port 3000')
})