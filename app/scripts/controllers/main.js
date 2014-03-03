'use strict';

angular.module('sparkledevApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.selected = 'not selected';

    $scope.vectorMapOpt = {
      backgroundColor: '#2B3E50',
      series: {
        regions: [
          {
            attribute: 'fill'
          }
        ]
      },
      regionsSelectable: true,
      regionsSelectableOne: true,
      regionStyle: {
//        initial: {
//          fill: '#B8E186'
//        },
        selected: {
          fill: '#F4A582'
        }
      },
      onRegionClick: function (e, code) {
        // check the owner of the selected region

        // if there is no owner, show popup to buy

        // if there is an owner, show the ads

        $scope.selected = code;
        $scope.$apply();
      }
    };

  });
