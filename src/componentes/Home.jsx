import React from "react";
import './Home.css';
import CarrosselBootstrap from "./Carrossel";
import Courses from "./courses.jsx"; // Importa o componente dos cards

const Home = () => {
  return (
    <div>
      <header className="header">
        <br></br><br></br>
       
          <div className="rectboard"></div>
          <div className="botao-portal"></div>
          <a href="http://127.0.0.1:8000/" className="botao-portal">
            <div className="portal-do-aluno">PORTAL DO ALUNO</div>
          </a>
           
          <a href="#1" className="jbli-logo-link">
            <div className="jbli-logo"></div>
            <img
              className="jbli-logo-1"
              src="/src/assets/JBLI_logo.png"
              alt="Logotipo JBLI"
            />
          </a>
       
      </header>

      <body className="body">
        <nav>          
          <div>
            <a href="/" className="home">HOME</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/professor" className="portal-do-professor">PORTAL DO PROFESSOR</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/cursos" className="cursos">CURSOS</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/loja" className="loja">LOJA</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/cadastro" className="cadastro">CADASTRO</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/sobre" className="sobre">SOBRE</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </nav>

        <div className="container-page">
          <img className="group-3" src="/src/assets/Group3.svg" alt="" />
          <div className="group-4">
            <img className="l-1" src="/src/assets/book/l2.jpg" alt="" />
            <img className="l-2-1" src="/src/assets/book/l1.jpg" alt="" />
          </div>

          <div className="group-5">
            <div className="card-ingles"></div>
            <div className="desconto-informatica">
              <span className="_15-off1">15% OFF</span>
            </div>
            <img className="certificado-1" src="/src/assets/icons/certificado.png" alt="Certificado" />
            <div className="curso-de-ingles">CURSO DE INGLÊS</div>
            <img className="livro-1" src="/src/assets/icons/livro.png" alt="Livro" />
            <div className="certificado1">CERTIFICADO</div>
            <div className="material-impresso3">MATERIAL IMPRESSO</div>
            <img className="ingles-1" src="/src/assets/cursos/ingles.jpg" alt="Ingles" />
          </div>

          <div className="group-5">
            <div className="card-espanhol"></div>
            <img className="certificado-2" src="/src/assets/icons/certificado.png" alt="Certificado" />
            <div className="curso-de-espanhol">CURSO DE ESPANHOL</div>
            <img className="livro-2" src="/src/assets/icons/livro.png" alt="Livro" />
            <div className="certificado2">CERTIFICADO</div>
            <div className="material-impresso2">MATERIAL IMPRESSO</div>
            <img className="espanhol-1" src="/src/assets/cursos/espanhol.jpg" alt="Ingles" />
          </div>

          <div className="group-5">
            <div className="card-informatica"></div>
            <img className="certificado-3" src="/src/assets/icons/certificado.png" alt="Certificado" />
            <div className="curso-de-informatica">CURSO DE INFORMATICA</div>
            <img className="livro-3" src="/src/assets/icons/livro.png" alt="Livro" />
            <div className="certificado">CERTIFICADO</div>
            <div className="material-impresso">MATERIAL IMPRESSO</div>
            <img className="informatica-1" src="/src/assets/cursos/informatica.jpg" alt="Informática" />
          </div>
          <div className="group-5">
            <div className="card-arduino"></div>
            <img className="certificado-4" src="/src/assets/icons/certificado.png" alt="Certificado" />
            <div className="curso-de-arduino">CURSO DE ARDUINO</div>
            <img className="livro-4" src="/src/assets/icons/livro.png" alt="Livro" />
            <div className="certificado4">CERTIFICADO</div>
            <div className="material-impresso4">MATERIAL IMPRESSO</div>
            <img className="arduino-1" src="/src/assets/cursos/arduino.jpg" alt="Informática" />
          </div>

          {/*<div className="group-6">
            <img className="slide-2-1" src="/src/assets/Group6.svg" alt="Turmas Disponíveis" />
          </div>*/}
          <div>
            <CarrosselBootstrap />
          </div>
          <div class="rectboard-4" />
          <div class="turmas-disponiveis1">TURMAS DISPONÍVEIS!</div>
          <div style={{ margin: "20px", padding: "20px", backgroundColor: "" }}></div>
          
          <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-3xl font-bold mt-8 text-gray-800">Bem-vindo aos Nossos Cursos</h1>
            <p className="text-gray-100 mt-2">Escolha o melhor curso para você!</p>
              <Courses /> {/* Exibe os cards de cursos na Home */}
          </div>

          <div className="group-7">
          <div className="rectangle-horarios"></div>
            <div className="dias-e-horarios">Dias e Horários</div>
            <div className="turma-noite">
              <p>Turma à Noite: Sexta-Feira a partir das 20:00h<br />
              Turmas aos Sábados: Manhã e Tarde a partir das 08:00h</p>
            </div>
            
          </div>

          <div className="group-8">
            
            <img className="estudante-1" src="/src/assets/estudante.jpg" alt="Estudante" />
            <div className="rectangle-3"></div>
            <div className="de-um-novo">
                <p>“Dê um novo passo em sua carreira profissional! Estude onde quiser por um
              preço acessível e se destaque conquistando um novo idioma!”</p>
              </div>
            </div>
          <div className="group-9">
            <img className="l-1-1"src="/src/assets/book/l1.jpg" alt="livro1" />
            <img className="l-2-2"src="/src/assets/book/l2.jpg" alt="livro2" />
            <img className="l-3-1"src="/src/assets/book/l3.jpg" alt="livro3" />
          </div> 

          <div className="group-10">
            <div className="rectangle-pagamentos">
              <div className="formas-de-pagamento">Formas de pagamento</div>
              <img className="pix-1" src="/src/assets/icons/pix.png" alt="Pix" />
              <img className="master-1" src="/src/assets/icons/master.png" alt="MasterCard" />
              <img className="visa-1" src="/src/assets/icons/visa.png" alt="Visa" />
              <div className="siga-redes">Siga nas Redes Sociais!</div>
              <div className="pelo-zap">Pelo WhatsApp Ligue! 11 95490-6515</div>
              <img className="facebook" src="/src/assets/icons/facebook.png" alt="Facebook" />
              <img className="instagram" src="/src/assets/icons/instagram.png" alt="Instagram" />
              <img className="what" src="/src/assets/icons/what.png" alt="whatsapp" />
              <div className="politica">Política de Privacidade | Termos de Serviço | Mapa do Site Copyright © 2024 John Bulbow Language Institute LLC. Todos os direitos reservados. Os nomes e logotipos John Bulbow são marcas registradas. </div>
            </div>
            <div className="group-11">
            <div className="todos-os-direitos">© 2024 - TODOS OS DIREITOS RESERVADOS | JOHN BULBOW LANGUAGE INSTITUTE
  CENTRAL DE ATENDIMENTO: (11) 0000.1000 | BY JOHN BULBOW
  LANGUAGE INSTITUTE LTDA CNPJ:00.00.000/0000-00 AV. INOCENCIO , XX - SÃO PAULO - SP
  JOHN BULBOW LTDA CNPJ:00.000.00/0001-00</div>

            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Home;
