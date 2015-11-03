app.directive('tvShow', function() {
    return {
        restrict : 'E',
        scope : {
            info : '='
        },
        tempalteUrl : 'js/directives/tvShow.html'
    }
});