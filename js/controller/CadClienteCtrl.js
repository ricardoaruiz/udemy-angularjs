app.controller("CadClienteCtrl", function($scope){
    $scope.app="Cadastro de Clientes";
    
    $scope.clientes = [
        {nome : "Ricardo Ruiz",codigo : "0001"},
        {nome : "Cinthya Hayane de Carvalhor",codigo : "0002"},
        {nome : "Guilherme Carvalho Ruiz",codigo : "0003"}
    ];
    
    $scope.adicionarClientes = function(cliente){
        $scope.clientes.push(angular.copy(cliente));
        delete $scope.cliente;
    };
})