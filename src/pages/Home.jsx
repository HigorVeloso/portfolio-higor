import { React } from "react";
import Banner from "../componentes/Banner";
import Rodape from "../componentes/Rodape";
import Corpo from "../componentes/Corpo";
import Projetos from "../componentes/Projetos";




function Home() {

  return (
    <>
      <Banner />
      <Corpo />
      <Projetos />
      <Rodape />
    </>
  );
}

export default Home;
