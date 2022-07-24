export function tempoParaSegundos(tempo: string) {

    const [horas = '0', minutos = '0', segundos = ''] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegunos = Number(minutos) * 60;
    
    return horasEmSegundos + minutosEmSegunos + Number(segundos);
    
}
