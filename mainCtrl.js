angular.module('dumbStuff')
  .controller('mainCtrl', function($scope, mainSrvc){
     $scope.parentController = "parentController";
     $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

     $scope.announceDay = function( lesson, day ) {
         alert(lesson + ' is active on ' + day + '.');
     }



  });
