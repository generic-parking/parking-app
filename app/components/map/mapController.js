'use strict';
angular.module('appControllers').controller('MapCtrl', ['$scope',
    function ($scope) {

        $scope.buscarVaga = function () {
            var element = document.getElementById("mapa-svg");
            var svgDocument = element.contentDocument;

            clearSvg(svgDocument);

            if (!$scope.vagaConsultada) {
                return;
            }

            var vaga = $scope.vagaConsultada.toString();
            if (vaga.length === 1) {
                vaga = "0" + vaga;
            }

            var svgItem = svgDocument.querySelector('#vaga_E' + vaga + ' rect');

            if (svgItem) {
                svgItem.setAttribute("style", "fill: #f4f142; stroke: red;");
            } else {
                alert("Vaga " + vaga + " não existente");
            }
        };

        var clearSvg = function(svgDocument) {
            var rects = svgDocument.querySelectorAll("g[id^='vaga_E'] rect");
            for (var r of rects) {
                r.style = 'fill:#C4C4C4; stroke:none';
            }
        }
    }]);
