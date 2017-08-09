var Restaurante = Restaurante || {};

Restaurante.GraficoTotalPorMes = (function(){

        function GraficoTotalPorMes(){
            this.ctx = $('#myChartLine')[0].getContext('2d');
        }

        GraficoTotalPorMes.prototype.iniciar = function(){
            $.ajax({
                url: "/total",
                method: "GET",
                success: onDadosRecebidos.bind(this)
            });
        }

        function onDadosRecebidos(dados){
            var meses = [];
            var valores = [];
            dados.forEach(function(obj){
                meses.unshift(obj.data_cad);
                valores.unshift(obj.valor);
            });

        var graficoTotalPorMes = new Chart(this.ctx,{

            type: "line",
            data: {
                labels: meses,
                datasets: [{
                    label: "Total por Mês",
                    backgroundColor: "rgba(26,179,148,0.5)",
	                pointBorderColor: "rgba(26,179,148,1)",
                    pointBackgroundColor: "#fff",
                    data: valores
                }]
            },
        });
        }
    return GraficoTotalPorMes;

}());

Restaurante.GraficoTotalPorAno = (function(){

    function GraficoTotalPorAno(){
        this.ctx = $("#MyChartBar")[0].getContext("2d");
    }

    GraficoTotalPorAno.prototype.iniciar = function(){
        $.ajax({
            url: "",
            method: "GET",
            success: onDadosRecebidos.bind(this)
        });
    }

    function onDadosRecebidos(dados){
        var anos = [];
        var valores = [];

        dados.forEach(function(obj){
            anos.unshift(obj.ano);
            valores.unshift(obj.valor);
        });

        var GraficoTotalPorAno = new Chart(this.ctx, {
            type:"bar",
            data: {
                labels: anos,
                datasets: [{
                    label: 'Vendas por mês',
		    		backgroundColor: "rgba(26,179,148,0.5)",
	                pointBorderColor: "rgba(26,179,148,1)",
	                pointBackgroundColor: "#fff",
	                data: valores
                }]
            }

        });

    }

    return GraficoTotalPorAno;
})();


$(function(){
    var graficoTotalPorMes = new Restaurante.GraficoTotalPorMes();
    graficoTotalPorMes.iniciar();
});


