(function () {
    angular.module('starter.controllers').service('doorService', function () {
        var vm = this;
        vm.doorDetails = function () {
            return [
                { doorNo: 301, trailerNo: 12345, deliveryNo: '100',arrivalTime:'10 AM' },
                { doorNo: 302, trailerNo: 12675, deliveryNo: '110',arrivalTime:'02 PM' },
                { doorNo: 305, trailerNo: 87345, deliveryNo: '114',arrivalTime:'08 AM' },
                { doorNo: 312, trailerNo: 90345, deliveryNo: '121',arrivalTime:'07 PM' },
				{ doorNo: 361, trailerNo: 37345, deliveryNo: '144',arrivalTime:'08 AM' },
                
            ];
        };
    });
})();
