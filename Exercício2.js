const horarioInicio = 6
const horariotermino = 14
const tarifaDinamicaInicio = 7
const tarifaDinamicaFim = 9.30
const tarifaComumInicio = 9.31
const tarifaComumFim = 14
const inicioAlmoco = 12
const terminoAlmoco = 12.30
const solicitandoCorrida = 12.01

function melhorHorarioDeCorrida (tarifaDinamicaInicio, tarifaDinamicaFim, inicioAlmoco, terminoAlmoco) {
   
        if (solicitandoCorrida >= tarifaDinamicaInicio && solicitandoCorrida <= tarifaDinamicaFim) {
            console.log (`aceitando corrida no horario ${solicitandoCorrida} com tarifa dinâmica`);
    }
         else if (solicitandoCorrida >= inicioAlmoco && solicitandoCorrida <= terminoAlmoco) {
           console.log (`Corrida solicitada as ${solicitandoCorrida}. Horário de almoço, corrida não aceita`);
    }
            else {
              console.log (`${solicitandoCorrida}h. Horário sem tarifa dinâmica, não aceitar corrida`);
    }
    }
        
const horarioCorridaDinamica = melhorHorarioDeCorrida (tarifaDinamicaInicio, tarifaDinamicaFim, inicioAlmoco, terminoAlmoco)
