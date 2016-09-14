(function() {
  'use strict';

  angular.module('dumbStuff')
    .directive('custDir', function(){
      return {
        restrict: 'E',
        templateUrl: "./custDir/custDir.html",
        scope: {
          lesson: '=',
          dayAlert: '&'
        },
        link: function( scope, elem, attr ){
          //scope.test = 'Does this work?';
          scope.getData
            .then(function( response ) {
              scope.schedule = response.data;


              scope.schedule.forEach(function( scheduleDay ) {
                if (scheduleDay.lesson === scope.lesson){
                  elem.css('text-decoration', 'line-through');
                  scope.lessonDay = scheduleDay.weekday;
                  return;
                }
              });
            })


        },
        controller: 'custDirCtrl'
      }

    });

}());
