const locales = {
    pt: {
      menubar: {
        inicio: 'Início',
        sobre: 'Sobre',
        tecnologias: 'Tecnologias',
        projetos: 'Projetos',
      },
      begin: {
        aviso: 'Em desenvolvimento...',
        titulo: 'Bem-vindo ao meu portfólio',
      },
      sobre: {
        titulo: 'Sobre Mim',
        nomeplace: 'Nome Completo:',
        idadeplace: 'Idade:',
        localplace: 'Residência:',
        faculplace: 'Cursando:',
        idade: '25 anos',
        facul: 'Ciências da Computação - 6º Período.',
      },
      tecs: {
        titulo: 'Tecnologias e linguagens de Programação:',
        front: 'Ferramentas de Front-End',
        back: 'Ferramentas de Back-End',
        ooo: 'Programação Orientada a Objetos',
      },
      projetosTextoBotao: "Ver Projeto",
      projetos: [
        {
          nome: "Lanche express",
          descricao: "Um site com cardápio e facilitação de pedido via whatsapp, responsivo e com cardápio e lista de pedido dinâmica, feito em NextJs.",
          imagem: "/Lanche.png",
          link: "https://lanche-express-portifoil.vercel.app/"
        },
        {
          nome: "SpellCircle",
          descricao: "Um site com regras e galeria de cartas para um cardgame, feito em Vue.js.",
          imagem: "/spell.png",
          link: "https://spellcircle.vercel.app/"
        },
        {
          nome: "Donate Cripto",
          descricao: "Site para criação de campanhas e doações em criptomoedas, usando Solidity e NextJs.",
          imagem: "/cripto.png",
          link: "https://crypto-donate-solidy.vercel.app/"
        }
      ]
    },
    en: {
      menubar: {
        inicio: 'Home',
        sobre: 'About',
        tecnologias: 'Technologies',
        projetos: 'Projects',
      },
      begin: {
        aviso: 'In development...',
        titulo: 'Welcome to my portfolio',
      },
      sobre: {
        titulo: 'About Me',
        nomeplace: 'Name:',
        idadeplace: 'Age:',
        localplace: 'Residence:',
        faculplace: 'Studying:',
        idade: '25 years old',
        facul: 'Computer Science - 6th Period.',
      },
      tecs: {
        titulo: 'Technologies and Programming Languages:',
        front: 'Front-End Tools',
        back: 'Back-End Tools',
        ooo: 'Object Oriented Programming',
      },
      projetosTextoBotao: "View Project",
      projetos: [
        {
          nome: "Lanche express",
          descricao: "A responsive website with a menu and easy ordering via WhatsApp, with a dynamic menu and order list, made in NextJs.",
          imagem: "/Lanche.png",
          link: "https://lanche-express-portifoil.vercel.app/"
        },
        {
          nome: "SpellCircle",
          descricao: "A website with rules and card gallery for a cardgame, made in Vue.js.",
          imagem: "/spell.png",
          link: "https://spellcircle.vercel.app/"
        },
        {
          nome: "Donate Cripto",
          descricao: "Website for creating campaigns and donations in cryptocurrencies, using Solidity and NextJs.",
          imagem: "/cripto.png",
          link: "https://crypto-donate-solidy.vercel.app/"
        }
      ]
    }
  };
  
  export default locales;