// var filesystem = require("fs");
$(document).ready(function () {
    //foundation
    // $(document).foundation();
    //slick
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: false,
        zindex: 1
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        // variableWidth: true,
        // adaptiveHeight: false,
        zindex: 100
    });

    var _getAllFilesFromFolder = function (dir) {

        var filesystem = require("fs");
        var results = [];

        filesystem.readdirSync(dir).forEach(function (file) {

            file = dir + '/' + file;
            var stat = filesystem.statSync(file);

            if (stat && stat.isDirectory()) {
                results = results.concat(_getAllFilesFromFolder(file))
            } else results.push(file);

        });

        return results;

    };
    function getPath(){
        _getAllFilesFromFolder("/public/public/images/allie/")
        console.log(results);
    };
    getPath();
    
    
    
});