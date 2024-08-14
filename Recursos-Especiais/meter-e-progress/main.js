var progress = document.getElementById('progress');
const interval = setInterval(() => {
    progress.value += 10;
    if(progress.value >= 100){
        alert("Carregamento realizado com sucesso!")
        clearInterval(interval);
    }
}, 1000)
