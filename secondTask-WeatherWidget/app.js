var app = angular.module('weatherApp', [])
  .controller("WeatherController", ["$scope", "$http",
    function($scope, $http) {
      // Set default data.
      $scope.search = "Ottawa";

      // Get the data.
      $scope.getData = function() {
        var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.search + "&mode=json&units=metric&cnt=7";
        $http.get(url).success(function(data) {
          // Format the data.
          $scope.countryCode = data.city.country.toLowerCase();
          $scope.today = data.list[0];
          console.log($scope.today);
        });
      }

    }
  ]);
