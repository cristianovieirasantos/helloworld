angular.module('helloworld', []);
angular.module('helloworld').controller('RepeatController', RepeatController);


function RepeatController($scope) {

    $scope.carros = [
        {nome:'Gol', cor:'Vermelho'},
        {nome:'Corsa', cor:'Amarelo'}
    ];


    $scope.adicionarCarro = function adicionarCarro() {
        var obj = {}
        obj.nome = 'Carro' + $scope.carros.length;
        obj.cor = 'Cor' + $scope.carros.length;

        $scope.carros.push(obj);
    }

    $scope.alterarCarro = function alterarCarro() {
        var obj = $scope.carros.get(0);
        obj.nome = 'ALTERADO';

        $scope.carros.push(obj);
    }

}


