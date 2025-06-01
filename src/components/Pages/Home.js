import 'bootstrap/dist/css/bootstrap.min.css';  

function Home() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1 className="display-4">Bem-vindo à GlobalFinanc</h1>
        <p className="lead">Nossa empresa é especializada em soluções financeiras para empresas e particulares.</p>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sobre Nós</h5>
              <p className="card-text">
                A GlobalFinanc é uma empresa líder no setor financeiro, com operações em mais de 20 países em todo o mundo. Fundada em 2001, nossa empresa tem como objetivo fornecer soluções financeiras inovadoras e personalizadas para nossos clientes, ajudando-os a alcançar seus objetivos financeiros.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nossa Abordagem</h5>
              <p className="card-text">
                Com uma equipe de profissionais experientes e altamente qualificados, estamos comprometidos em oferecer serviços de alta qualidade, desde gestão de patrimônio até soluções de pagamento. Nossa abordagem é baseada em uma compreensão profunda das necessidades dos nossos clientes, permitindo-nos desenvolver soluções personalizadas que atendam às suas necessidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nossa Visão</h5>
              <p className="card-text">
                Nossa visão é ser a empresa líder no setor financeiro, conhecida por sua inovação, confiabilidade e compromisso com os nossos clientes. Estamos trabalhando para criar um futuro mais próspero para todos os nossos stakeholders, incluindo nossos clientes, funcionários e comunidades locais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;