github_app.controller('SearchController', function SearchController($scope, $timeout) {
    $scope.executeSearch = function executeSearch(GitHub) {
        GitHub.searchRepos($scope.query, function (error, data) {
            if (!error) {
                console.log(data);
                $scope.repos = data.items;
            }
            else {
                console.log('not working')
            }
        });
    };
    var timeout;
    $scope.events = null;

    $scope.$watch('username', function (newUsername) {
        if (newUsername) {
            if (timeout) $timeout.cancel(timeout);
            timeout = $timeout(function () {
                console.log(newUsername)

            }, 1000);
        }

    })

});
