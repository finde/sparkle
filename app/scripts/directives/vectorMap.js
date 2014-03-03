'use strict';

angular.module('sparkledevApp')
  .directive('vectorMap', function () {
    return {
      restrict: 'AE',
      scope: {
        ngModel: '='
      },
      controller: function ($scope, $element, $attrs) {
        // check browser height,
        // then set the element min-height based on current browser height
        var padding = 100;
        $element.css({
          height: angular.element(window).height() - padding
        });

        var opt = {};
        if($scope.$parent[$attrs.vectorMap]){
          opt = $scope.$parent[$attrs.vectorMap];
        }

        $scope.ngModel = $element.vectorMap(opt);

      }
    };
  });
