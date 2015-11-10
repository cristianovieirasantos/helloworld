//DECLARANDO UM NOVO MODULO
angular.module('helloworld', []);

//OBTENDO O MODULO E ADICIONANDO UM CONTROLADOR
//PODEMOS COLOCAR O FUNCTION NA DECLARAÇÃO IGUAL AO FLEX
/*
 angular.module('helloworld')
 .controller('IndexController', function ($scope) {
 $scope.nome = 'Cristiano Vieira';
 }
 )
 */

angular.module('helloworld').controller('IndexController', IndexController);


function IndexController($scope) {

    $scope.nome = 'Cristiano Vieira';


    $scope.clicando = function Testar() {

        $scope.nome = 'asdasdsaddsadsad';
    }
}


