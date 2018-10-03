'use strict';
angular.module('appControllers').controller('MapCtrl', ['$scope',
    function ($scope) {

        $scope.buscarVaga = function () {
            var element = angular.element(document).find("#mapa-svg")[0];
            var svgDocument = angular.element(element.contentDocument);

            clearSvg(svgDocument);

            if (!$scope.vagaConsultada) {
                return;
            }

            var vaga = $scope.vagaConsultada.toString();
            if (vaga.length === 1) {
                vaga = "0" + vaga;
            }

            var svgItem = svgDocument.find('#vaga_E' + vaga + ' rect')[0];

            if (svgItem) {
                svgItem.setAttribute("style", "fill: #f4f142; stroke: red;");
            } else {
                alert("Vaga " + vaga + " não existente");
            }
        };

        var clearSvg = function(svgDocument) {
            var rects = svgDocument.find("g[id^='vaga_E'] rect");
            for (var r of rects) {
                r.style = 'fill:#C4C4C4; stroke:none';
            }
        }
    }]);
