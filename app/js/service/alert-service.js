angular.module('helloworld').service('AlertService', AlertService);


AlertService.$inject = ['$growl'];

function AlertService($growl) {
    this.showOk = showOk;
    this.MENSAGEM1 = 'Registro salvo com sucesso';

    function showOk(titulo, mensagem, tempo) {


        tempo = (!tempo)?3000:tempo;

        if (!tempo){
            tempo = 3000;
        }

        $growl.box(titulo, mensagem, {
            class: 'success',
            timeout: tempo
        }).open();
    }
}