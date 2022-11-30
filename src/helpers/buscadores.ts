import { Aula } from 'types/videos';

export function testaBusca(title: string, busca: string){
  const regex = new RegExp(busca, 'i');
  return regex.test(title);
}

export function testaFiltro(id: number, filtro: string | number | null){
  if(filtro !== null) return filtro === id;
  return true;
}

export function ordenar(novaLista: Aula, ordenador: string){
  switch(ordenador){
  case 'titulo': 
    return novaLista.sort((a, b) => a.title > b.title ? 1 : -1);

  case 'tempo': 
    return novaLista.sort((a, b) => a.time > b.time ? 1 : -1);

  case 'canal': 
    return novaLista.sort((a, b) => a.canal > b.canal ? 1 : -1);
  default:
    return novaLista;
  }
}