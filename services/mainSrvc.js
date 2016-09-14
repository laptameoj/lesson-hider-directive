(function() {
  'use strict';

  angular.module('dumbStuff')
    .service('mainSrvc', mainSrvc);

    function mainSrvc($http) {

      this.getData = function() {
        return $http.get("./../schedule.json");
      }
    }


}());
