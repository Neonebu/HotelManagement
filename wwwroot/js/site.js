// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
(function () {

    var img = document.getElementById('leftPanel').firstChild;
    img.onload = function () {
        if (img.height > img.width) {
            img.height = '100%';
            img.width = 'auto';
        }
    };

}());