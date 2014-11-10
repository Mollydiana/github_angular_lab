github_app.factory('gitHub', function GitHub($http) {
    return {
        searchRepos: function searchRepos(query, callback) {
            $http.get('https://api.github.com/search/repositories', { params: { q: query } })
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (e) {
                    callback(e);
                });
        },
        getRepo: function getRepo(name, callback) {
            $http.get('https://api.github.com/repos/' + mollydiana)
                .success(function (data) {
                    callback(null, data);
                })
                .error(function (e) {
                    callback(e);
                });
        }
    };
});





