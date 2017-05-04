angular.module('gasStationApp')
  .controller('homeController', function ($scope, $location, apiService) {
    $scope.title = 'HOME'

    function searchLocation () {
      var userLocation = $scope.locationName
      apiService.getLocation()
        .then(function (response) {
          var gasStations = response.data // nuestro objeto
          $scope.gasStations = gasStations
        })
    }
    searchLocation()

    $scope.getStationsByTown = function () {
      $location.path('/filters/' + $scope.queryLocation)
    }
  })
