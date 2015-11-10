angular.module('helloworld', []);

angular.module('helloworld').controller('IndexController2', IndexController2);

IndexController2.$inject = ['$scope'];

function IndexController2($scope) {

    /*
     CRIANDO A PROPRIEDADE STYLEDIF DENTRO DO SCOPE PARA SER ACESSADA
     PELA DIV NA PROPRIDADE ng-style="styleDiv"
     */
    $scope.nome = '';
    $scope.styleDiv = {};
    $scope.myClass = {};
    iniciar();

    function iniciar() {
        $scope.$watch('nome', escutaNome);
    }


    function escutaNome(newValue, oldValue) {

        if (!(newValue===oldValue)) {

            if (newValue==='Joao') {
              //  $scope.styleDiv.backgroundColor = 'red';
                $scope.myClass = 'vermelho';
                return;
            }

            if (newValue==='Maria') {
               // $scope.styleDiv.backgroundColor = 'pink';
                $scope.myClass = 'pink';
                return;
            }

            $scope.styleDiv.backgroundColor = 'white';
            //alert('newValue ' + newValue + ' oldValue ' + oldValue);
        }
    }
}


