(function() {
  'use strict';

  angular.module('dumbStuff')
    .controller('custDirCtrl', function ($scope, mainSrvc){
      $scope.directiveController = 'directiveController';


      $scope.getData = mainSrvc.getData();


    });

}());
