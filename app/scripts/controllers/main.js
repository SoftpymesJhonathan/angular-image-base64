'use strict';

/**
 * @ngdoc function
 * @name proyectoImagenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoImagenApp
 */
angular.module('proyectoImagenApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.upload = upload;
    $scope.send = send;
    $scope.myFile = null;

    function upload () {
      if (document.getElementById('myFile').files[0] != null) {
        $scope.myFile = null;
        $scope.myFile = document.getElementById('myFile').files[0];
        console.log($scope.myFile);

        $scope.img = document.getElementById('img');
        $scope.img.file = $scope.myFile;

        var reader = new FileReader();
        reader.onload = (function (aImg) {
          return function (e) {
            aImg.src = e.target.result;
            console.log(e.target.result);
          };
        })($scope.img);
        reader.readAsDataURL($scope.img.file);
      }
    }

    function send() {
      var reader = new FileReader();
      console.log(reader.readAsDataURL($scope.myFile));
    }
  }]);
