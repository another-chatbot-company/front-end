let total = document.getElementById('total');
let graficos = document.getElementById('graficos');

let performance = [
    {
        tipo: "chatbot",
        total: 100,
        resolvidos: 70,
        não_resolvidos: 30,
        satisfação: 4.8,

    },

    {

        tipo: "email",
        total: 400,
        resolvidos: 300,
        não_resolvidos: 100,
        satisfação: 4.6,

    }
]

function renderize() {
    totalCard();
    chartCard();

    // Rederizar total de chamados por tipo
    function totalCard() {

    }

    // Renderizar graficos de performance por tipo
    function chartCard() {

        for (let i = 0; i < performance.length; i++) {
            let div = document.createElement('div');
            let title = document.createElement('h1');
            let canvasPizza = document.createElement('canvas');
            canvasPizza.setAttribute('id', 'pizza');
            canvasPizza.setAttribute('width', '600px');
            canvasPizza.setAttribute('height', '600px');

            let text = performance[i].tipo;

            title.textContent = text;

            div.appendChild(title);
            div.appendChild(canvasPizza);
            
            let data = {
                datasets: [{
                    data: [performance[i].resolvidos, performance[i].não_resolvidos],
                    
                    backgroundColor: [
                    'rgb(51, 102, 255)',
                    'rgb(204, 204, 204)'                
                    ],
                }],                

                labels: [
                    'Chamados Resolvidos',
                    'Chamados Não-Resolvidos'
                ]
            };

            let options;

            let pizza = new Chart(canvasPizza, {
                type: 'pie',
                data: data,
                options: options
            });

            graficos.appendChild(div);

        }

        for (let i = 0; i < performance.length; i++) {
            let div = document.createElement('div');
            let canvasBar = document.createElement('canvas');
            canvasBar.setAttribute('id', 'barChart');
            canvasBar.setAttribute('width', '400px');
            canvasBar.setAttribute('height', '400px');
           
            div.appendChild(canvasBar);
            
            let data = {
                datasets: [{
                    data: [performance[i].satisfação],
                    
                    backgroundColor: [
                    'rgb(51, 102, 255)',          
                    ],
                }],                

                labels: [
                    'Total de Chamados',
                ]
            };

            let options;

            let barra = new Chart(canvasBar, {
                type: 'bar',
                data: data,
                options: options
            });

            graficos.appendChild(div);

        }

    };


};

window.onload = renderize();
