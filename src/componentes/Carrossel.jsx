import Carousel from "react-bootstrap/Carousel";
import "./Carrossel.css"; // Importando o CSS

const CarrosselBootstrap = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/src/assets/slides/slide_2.jpg" alt="Turmas Disponíveis" />

        <Carousel.Caption>
          <h3>Slide</h3>
          <p>Descrição do primeiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/src/assets/slides/slide_3.jpg" alt="Turmas Disponíveis" />
        <Carousel.Caption>
          <h3>Slide</h3>
          <p>Descrição do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/src/assets/slides/slide_1.jpg"  alt="Turmas Disponíveis" />
        <Carousel.Caption>
          <h3>Slide</h3>
          <p>Descrição do terceiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrosselBootstrap;
