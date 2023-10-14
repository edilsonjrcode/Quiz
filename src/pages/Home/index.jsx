import Header from "../../components/header/header";
import {BoxCenter, Container, Container2 } from "../Questions/styles";
import Categories from '../../components/divHomeCategory/categories';
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import ButtonHome from '../../components/buttons/buttonHome';

const Home = () => {
  return (
    <>
    <div id='home'>
      <Container> 
        <Header conteudo={"Sobre"}/>

        <Container2>
          <h3>Escolha uma das opções abaixo e veja quantas perguntas você consegue responder corretamente entre 6 perguntas</h3>
          
          <BoxCenter style={{marginTop: -20}}>
            <Categories 
              title={"React"} 
              description={"Biblioteca front-end para criar interfaces de usuário em páginas web."} 
              logo={<SiReact/>}
              color={"#57b0ff"}
              indice={0}
              />
            <Categories 
              title={"Javascript"} 
              description={"Linguagem de programação interpretada estruturada, de script em alto nível"} 
              logo={<SiJavascript/>}
              color={"#fbff14"}
              indice={1}
              />
            <Categories 
              title={"Html"} 
              description={"Área da programação que se dedica a criar a parte visual e interativa de um site"} 
              logo={<SiHtml5/>}
              color={"#ff2f1c"}
              indice={2}
              />
            <Categories 
              title={"Css"} 
              description={"Mecanismo para adicionar estilos a uma página web, diretamente nas tags HTML"} 
              logo={<SiCss3/>}
              color={"#0072d6"}
              indice={3}
              />
            {/* <Categories title={"Http"} description={"Protocolo de comunicação utilizado para sistemas de informação de hipermídia"} logo={<MdHttp/>}/> */}
          </BoxCenter>

          <BoxCenter style={{margin: 20}}>
            <ButtonHome value={"Iniciar Quiz"} href={"/questions"}/>
          </BoxCenter>

        </Container2>

      </Container>
     </div>
     </>
  );
}

export default Home;