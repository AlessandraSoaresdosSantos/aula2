var data = new Date();
var mes = data.getMonth(data);
    
    switch(mes){
        case 1:
            alert('Estamos em janeiro');
            break;
        case 2:
            alert('Estamos em fevereiro');
            break;
        case 3:
        case 4:
        case 5:
            alert('Estamos no segundo trimestre');
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            alert('Estamos no segundo semestre');
            break;
        default:
            alert('Não foi possível identificar o mês!');        
            break;
    }



