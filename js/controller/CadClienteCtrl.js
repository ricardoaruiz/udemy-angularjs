app.controller("CadClienteCtrl", function($scope){
    $scope.app="Cadastro de Clientes";
    
    $scope.clientes = [
        {codigo : "0001", nome : "Ricardo",},
        {codigo : "0002", nome : "Cinthya"},
        {codigo : "0003", nome : "Guilherme"}
    ];
    
    $scope.tipoClientes = [
        {codigo : "01", tipo : "Pessoa Física", local: "Nacional"},
        {codigo : "02", tipo : "Pessoa Jurídica", local: "Nacional"},
        {codigo : "03", tipo : "Sócios", local: "Nacional"},
        {codigo : "04", tipo : "Exportador", local: "Internacioal"},
        {codigo : "05", tipo : "Importador", local: "Internacioal"},        
    ];
    
    $scope.adicionarClientes = function(cliente){
        $scope.clientes.push(angular.copy(cliente));
        delete $scope.cliente;
    };
    
    $scope.apagarCliente = function(cliente){
      console.log(cliente);
    };
    
})