let fs = require('fs');
module.exports = function(app){

    app.get('/api/:dog', function(req, res){
        let currentDog = req.params.dog;
        var folderPath = './public/images/';
        console.log(req.params.dog);
        switch (currentDog) {
            case 'allie':
                folderPath += 'allie/allie_slider';
            break;
            case 'crush':
                folderPath += 'crush/crush_slider';
            break;
            case 'dela':
                folderPath += 'dela/dela_slider';
                console.log(folderPath);
            break;
            case 'shimmer':
                folderPath += 'shimmer/shimmer_slider';
            break;
            case 'lulu':
                folderPath += 'lulu/lulu_slider';
            break;

        }
        makeJson(folderPath);
        function makeJson(path){
            var files = fs.readdirSync(path);
            var imgPath = "/public" + folderPath.slice(1) + '/';

           var finalPaths = files.map(img =>{
                return imgPath + img;
            });
            res.json(finalPaths);
        }
        
        
    });

    //other routes..
}