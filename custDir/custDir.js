angular.module('directivePractice', [])
  .directive('custDir', function(){
    return {
      restrict: 'E',
      templateUrl: "./custDir/custDir.html",
      scope: {

      },
      link: function( scope, elem, attr ){

      },
      controller: 'custDirCtrl'
    }

  })
