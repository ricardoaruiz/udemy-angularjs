app.controller("CadClienteCtrl", function($scope){
    $scope.app="Cadastro de Clientes";
    
    $scope.clientes = [
        {codigo : "0001", nome : "Ricardo",},
        {codigo : "0002", nome : "Cinthya"},
        {codigo : "0003", nome : "Guilherme"}
    ];
    
    $scope.tipoClientes = [
        {codigo : "01", tipo : "Pessoa Física", loca: "Nacional"},
        {codigo : "02", tipo : "Pessoa Jurídica", loca: "Nacional"},
        {codigo : "03", tipo : "Sócios", loca: "Nacional"},
        {codigo : "01", tipo : "Pessoa Física", loca: "Intenacioal"},
        {codigo : "02", tipo : "Pessoa Jurídica", loca: "Intenacional"},        
    ];
    
    $scope.adicionarClientes = function(cliente){
        $scope.clientes.push(angular.copy(cliente));
        delete $scope.cliente;
    };
})