import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contato() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessAlert(true);
    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contato</h5>
              <p className="card-text">
                Se você tiver alguma dúvida ou gostaria de saber mais sobre nossos serviços, por favor, não hesite em entrar em contato conosco.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input type="text" className="form-control" id="name" name="name" value={contact.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea className="form-control" id="message" name="message" value={contact.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
              {showSuccessAlert && (
                <div className="alert alert-success mt-3" role="alert">
                  Mensagem enviada com sucesso!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato