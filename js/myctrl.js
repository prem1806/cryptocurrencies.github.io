app.controller("myctrl",["$scope","$http","$interval",function($scope,$http,$interval){
	var api = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
	$http.get(api).then(function(response){
		$scope.details = response.data;
		var price_list = [],name_list=[];
        for(var i=0; i <= $scope.details.length; i++){
            if($scope.details[i] == null) { continue; }
            var price_u = $scope.details[i]['price_usd'];
            var price_n = $scope.details[i]['name'];
            price_list.push(price_u);
            name_list.push(price_n);
        } 
		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: name_list,
		        datasets: [{
		            label: '# of USD',
		            data: price_list,
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.5)',
		                'rgba(54, 162, 235, 0.5)',
		                'rgba(255, 206, 86, 0.5)',
		                'rgba(75, 192, 192, 0.5)',
		                'rgba(153, 102, 255, 0.5)',
		                'rgba(255, 159, 64, 0.5)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

	});

	$interval(function () {
        window.location.reload();
    }, 300000);
}]);