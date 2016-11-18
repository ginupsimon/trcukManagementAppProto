(function () {
    angular.module('starter.controllers').controller('DoorCtrl', DoorCtrl);

    function DoorCtrl($scope, doorService) {
        $scope.doorDetails = doorService.doorDetails();
    };
})();