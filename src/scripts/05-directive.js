app.directive('bzUploader', [function() {
    return {
        restrict: 'A',
        scope: {
            'url': '=bzUploader',
            'files': '=ngModel',
            'autoupload': '=',
            'translates': '@text',
            'limit': '@'
        },
        controller: bzUploaderController,
        templateUrl: 'bz-uploader/uploader.html',
        replace: true,
        transclude: true,
        require: '?ngModel'
    };
}]);