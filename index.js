import axios from 'axios';

setInterval(async () => {
  try {
    const { data } = await axios(
      'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'
    );

    const { pst: UrnasApuradas, hg: horas, cand: candidatos } = data;

    console.log('\x1Bc');
    console.log(`------------ ${horas} ------------`);
    console.log({ UrnasApuradas });
    console.table(
      candidatos.map(
        ({ n: Numero, nm: Nome, vap: Votos, pvap: Porcentagem }) => {
          return {
            Numero,
            Nome,
            Votos,
            Porcentagem,
          };
        }
      )
    );
  } catch (error) {
    console.log(error);
    const now = new Date();

    console.log(
      `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - ERROR - Tentanto Atualizar...`
    );
  }
}, 5 * 1000);
