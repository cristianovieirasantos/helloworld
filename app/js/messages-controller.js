angular.module('helloworld', ['ngMessages', 'ui.growl']);
angular.module('helloworld').controller('MessagesController', MessagesController);

MessagesController.$inject = ['$scope', 'AlertService'];

function MessagesController($scope, $AlertService) {

    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;


    function salvar() {


       // $scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy')

        var item = angular.copy($scope.entidade);
        $scope.listaDePessoas.push(item);
      //  $AlertService.showOk('ok', 'Registro salvo com sucesso.')
        $AlertService.showOk('ok', $AlertService.MENSAGEM1);

        limpar();

    }

    function limpar() {
        $scope.entidade = {};
    }



}


