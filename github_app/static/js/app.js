var github_app = angular.module('githubsearch', ['ngRoute', 'ngResource']);
    github_app.config(['$routeProvider', function ($routeProvider, searchController) {
        $routeProvider.
            when('/', {templateUrl: '/static/js/views/searchView.html', controller: searchController}).
            otherwise({redirectTo: '/'});
}]);
