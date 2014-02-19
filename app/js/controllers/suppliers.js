'use strict';


herrmannApp.controller('supplierCtrl', function($scope, suppliersData) 
{
    $scope.suppliers = suppliersData.suppliers;
});