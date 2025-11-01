import { db } from './connection';
import { verses } from './schema';

async function seed() {
  console.log('🌱 Inserindo dados iniciais...');
  
  await db.insert(verses).values([
    {
      text: 'Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.',
      reference: 'João 3:16',
      lesson: 'Este versículo nos lembra do amor incondicional de Deus por nós. Não importa quem somos ou o que fizemos, Deus nos ama e oferece salvação através de Jesus Cristo. A lição aqui é que devemos aceitar esse amor e compartilhá-lo com os outros.',
      isApproved: true
    },
    {
      text: 'Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.',
      reference: 'Salmos 37:5',
      lesson: 'Muitas vezes tentamos resolver tudo sozinhos, mas este versículo nos ensina a confiar em Deus e entregar nossos planos e preocupações a Ele. Quando confiamos verdadeiramente, Deus age de maneiras que nem podemos imaginar.',
      isApproved: true
    },
                {
                text: "Tudo posso naquele que me fortalece.",
                reference: "Filipenses 4:13",
                lesson: "Este é um versículo de empoderamento. Não se trata de nossa própria força, mas da força que recebemos através de Cristo. A lição é que, com Deus, podemos enfrentar qualquer desafio que a vida nos apresentar.",
                isApproved: true
            },
            {
                text: "Mas os que esperam no Senhor renovam as suas forças; sobem com asas como águias; correm e não se cansam; caminham e não se fatigam.",
                reference: "Isaías 40:31",
                lesson: "Este versículo nos ensina sobre a importância da paciência e da confiança em Deus. Quando esperamos nEle, recebemos força renovada para enfrentar os desafios da vida sem nos esgotarmos.",
                isApproved: true
            },
            {
                text: "O Senhor, o seu Deus, está em seu meio, poderoso para salvar. Ele se regozijará em você; com amor o renovará, ele se alegrará em você com brados de alegria.",
                reference: "Sofonias 3:17",
                lesson: "Mesmo em meio às lutas e imperfeições, Deus se alegra em nós. Isso nos lembra que não somos definidos por nossas falhas, mas pelo amor incondicional d'Ele.",
                isApproved: true
            },
            {
                text: "Tu, Senhor, és a minha lâmpada; o Senhor ilumina as minhas trevas.",
                reference: "2 Samuel 22:29",
                lesson: "Há momentos de escuridão que não podemos vencer sozinhos, mas Deus é a luz que dissipa até as trevas mais densas. Nunca estamos totalmente perdidos: quando clamamos, Ele nos guia para fora dos vales mais profundos.",
                isApproved: true
            },
            {
                text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.",
                reference: "Romanos 8:28",
                lesson: "Ele nos assegura que, para aqueles que amam a Deus, todas as coisas, inclusive as mais dolorosas e incompreensíveis, cooperam para o bem. Isso não significa que a vida será isenta de sofrimento, mas revela a mão soberana de um Pai amoroso que, mesmo em meio ao caos, tece uma tapeçaria de propósito e redenção. As lágrimas, as perdas e os desafios não são o fim da história, mas ingredientes que Deus, em sua infinita sabedoria, utiliza para nos moldar, fortalecer e nos aproximar de Seu plano maior. Portanto, mesmo quando não entendemos os 'porquês', podemos descansar na certeza de que cada peça do quebra-cabeça de nossa vida está sendo cuidadosamente posicionada para, no final, revelar um bem maior e eterno.",
                isApproved: true
            },
            {
                text: "Porque não recebestes o espírito de escravidão, para outra vez estardes em temor, mas recebestes o Espírito de adoção de filhos, pelo qual clamamos: Aba, Pai.",
                reference: "Romanos 8:15",
                lesson: "Recebemos um 'espírito de escravidão' que nos leva de volta ao medo, mas sim o 'Espírito de adoção', que nos transforma em filhos de Deus. Essa adoção divina nos liberta da condição de servos temerosos e nos eleva à posição de herdeiros amados. A expressão 'Aba, Pai', uma terna invocação aramaica que pode ser traduzida como 'Papai' ou 'Pai querido', revela a intimidade e a confiança que podemos ter ao nos aproximarmos de Deus. Portanto, a lição tocante deste versículo reside na maravilhosa verdade de que, através de Cristo, não somos mais órfãos espirituais, mas membros da família de Deus, convidados a viver em liberdade, segurança e um relacionamento de profundo amor e afeto com o nosso Pai celestial.",
                isApproved: true
            },
            {
                text: "A glória desta última casa será maior do que a da primeira, diz o Senhor dos Exércitos, e neste lugar darei a paz, diz o Senhor dos Exércitos.",
                reference: "Ageu 2:9",
                lesson: "Muitas vezes, olhamos para o nosso passado e vemos apenas as ruínas de sonhos desfeitos, de promessas quebradas e de um \"eu\" que não existe mais. Carregamos a nostalgia de uma \"primeira casa\" que parecia mais gloriosa. Este versículo, porém, sussurra uma promessa de esperança ao coração que se sente em escombros. Ele nos assegura que a reconstrução, guiada pelas mãos divinas, pode superar a glória original. As cicatrizes do passado não são marcas de vergonha, mas as frestas por onde a luz de uma nova estrutura pode brilhar com mais intensidade. A verdadeira paz não se encontra na ausência de batalhas, mas na certeza de que o que for reerguido em nossa vida terá um propósito e uma beleza que transcenderão tudo o que já foi.",
                isApproved: true
            },
            {
                text: "Não tenha medo\", respondeu o profeta. \"Aqueles que estão conosco são mais numerosos do que os que estão com eles.",
                reference: "2 Reis 6:16",
                lesson: "Em meio às tempestades da vida, é fácil sentir-se em menor número, cercado por adversidades e medos que parecem gigantes invencíveis. Nossos olhos físicos se fixam nos exércitos de problemas à nossa frente, e o desespero bate à porta. Esta poderosa declaração de Eliseu ao seu servo amedrontado é um convite para abrirmos os olhos da fé. Ela nos lembra que há uma realidade espiritual, invisível aos nossos sentidos, onde estamos cercados por uma legião celestial que luta a nosso favor. Não estamos sozinhos em nossas batalhas. A coragem verdadeira não nasce da ausência de inimigos, mas da consciência de que as forças que nos protegem são infinitamente maiores e mais poderosas. Quando o medo nos cegar, lembremo-nos do exército invisível que já nos garante a vitória.",
                isApproved: true
            },
            {
                text: "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam.",
                reference: "Naum 1:7",
                lesson: "Em um mundo que muitas vezes parece caótico e assustador, este versículo é como uma âncora para a alma. A lição aqui não é a ausência de problemas, mas a presença de um porto seguro. Muitas vezes, a força não vem da nossa capacidade de resistir à tempestade, mas da sabedoria de saber para onde correr. Deus não promete um mar sempre calmo, mas oferece um farol infalível. A verdadeira confiança floresce na adversidade, não na ausência dela, pois é no dia da angústia que descobrimos que não estamos apenas acreditando em uma ideia, mas sendo guardados por um amor que nos conhece pelo nome.",
                isApproved: true
            },
            {
                text: "Não se apresse em ficar irado, pois a ira se aloja no íntimo dos tolos.",
                reference: "Eclesiastes 7:9",
                lesson: "Esta pérola de sabedoria nos ensina sobre o poder destrutivo da pressa emocional. Em uma cultura que aplaude reações instantâneas, somos convidados a cultivar um espaço sagrado entre o que sentimos e como agimos. A lição é que a ira não é apenas uma emoção passageira; ela pode se tornar uma inquilina permanente em nosso coração, envenenando nossa paz e nossa perspectiva. Ser rápido para ouvir e tardio para falar não é um sinal de fraqueza, mas de uma força interior imensa. A verdadeira sabedoria não está em nunca sentir raiva, mas em escolher não dar a ela as chaves da nossa casa interior.",
                isApproved: true
            },
            {
                text: "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; renovam-se cada manhã. Grande é a tua fidelidade.",
                reference: "Lamentações 3:22-23",
                lesson: "No meio do luto e do sofrimento, Jeremias escreveu estas palavras, nos dando uma lição profunda sobre a resiliência da esperança. A cada amanhecer, a vida nos oferece uma prova tangível da fidelidade de Deus. Não importa o quão escura tenha sido a noite, o sol sempre volta a nascer. Esta não é uma promessa de que não haverá noites escuras, mas a garantia de que nenhuma noite é eterna. A lição do coração é que o perdão e a oportunidade de recomeçar não são recursos escassos; eles são tão abundantes e certos quanto o nascer do sol. Cada novo dia é uma página em branco, um convite para experimentar uma misericórdia que nunca envelhece.",
                isApproved: true
            },
            {
                text: "Jerusalém, Jerusalém, que matas os profetas e apedrejas os que te são enviados! Quantas vezes quis eu reunir os teus filhos, como a galinha ajunta os seus pintinhos debaixo das suas asas, e vós não o quisestes!",
                reference: "Mateus 23:37",
                lesson: "Entre os títulos majestosos de Deus — Rei, Pastor, Rocha —, Jesus escolhe uma das imagens mais vulneráveis e terna: uma galinha. Um protetor que não usa garras ou presas, mas que oferece o próprio corpo como escudo. A lição que corta o coração não está apenas no amor oferecido, mas na trágica liberdade humana recusada: 'e vós não o quisestes'. O maior perigo não é a ameaça externa, mas a nossa teimosa que recusa em nos abrigarmos. Ele está pronto para nos cobrir com as asas da graça, mas a decisão final, e a sua dor, pertencem a nós.",
                isApproved: true
            },
                        {
                text: "Tu contas as minhas aflições; põe as minhas lágrimas no teu odre; não estão elas no teu livro?",
                reference: "Salmo 56:8",
                lesson: "Quantas lágrimas caem em segredo, absorvidas pelo travesseiro ou pelo chão da solidão? Este versículo nos apresenta uma imagem divina profundamente comovente: Deus não apenas vê, mas coleciona cada lágrima. Cada uma é recolhida e guardada como um tesouro precioso. Sua dor não é um arquivo esquecido; é um odre sagrado. Sua tristeza não é um número estatístico; é uma história registrada. A lição aqui é que nenhuma dor é desperdiçada, nenhum sofrimento é insignificante. O que para o mundo é invisível, para Deus é um registro de amor. Sua história de luta está sendo transformada, gota a gota, em um testemunho futuro de resgate.",
                isApproved: true
            }

  ]);
  
  console.log('✅ Dados inseridos com sucesso!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Erro ao inserir dados:', err);
  process.exit(1);
});