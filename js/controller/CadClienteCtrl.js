app.controller("CadClienteCtrl", function($scope){
    $scope.app="Cadastro de Clientes";
    
    $scope.clientes = [
        {nome : "Ricardo Ruiz",codigo : "0001"},
        {nome : "Cinthya Hayane de Carvalhor",codigo : "0002"},
        {nome : "Guilherme Carvalho Ruiz",codigo : "0003"}
    ];
    
    $scope.tipoClientes = [
        {tipo : "Pessoa Física", codigo : "01"},
        {tipo : "Pessoa Jurídica", codigo : "02"},
        {tipo : "Sócios", codigo : "03"},
    ];
    
    $scope.adicionarClientes = function(cliente){
        $scope.clientes.push(angular.copy(cliente));
        delete $scope.cliente;
    };
})