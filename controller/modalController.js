/**
 * Created by ROOP on 11/26/2016.
 */

myApp.controller('modalController', function($scope,$uibModal,$log){

   $scope.items=['item1', 'item2', 'item3'];
/*$http.get("/asdasd").then(function(data){$scope.items=data;});*/
    $scope.open= function() {

        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'view/partials/modal-template.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            resolve: {
                items1: function () {

                    return $scope.items;
                }

            }
        });
//calll receive ker na


        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

    }


});
myApp.controller('ModalInstanceCtrl', function ($uibModalInstance, items1,$scope) {

    $scope.items = items1;

    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
