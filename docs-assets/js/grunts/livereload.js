var grunt;

var insertLivereload = function() {
    var liveReload = (grunt.option('lr') === true || false);

    var livereloadSnippet = "<script>document.write(\'<script src=\"http://\'\n" +
     "+ (location.host || \'localhost\').split(\':\')[0]\n" +
     "+ \':35729/livereload.js?snipver=1\"><\\/script>\')\n</script>";

    var data = "";

    if (liveReload) {
        data = livereloadSnippet;
    }
    grunt.file.write("_includes/livereload.html", data);
};

module.exports = function(dependencies) {
    grunt = dependencies.grunt
    return insertLivereload;
};
