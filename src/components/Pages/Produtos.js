import 'bootstrap/dist/css/bootstrap.min.css';
function Produtos() {
  const plans = [
    {
      name: 'Básico',
      price: 199,
      features: ['Análise financeira', 'Planejamento de custos']
    },
    {
      name: 'Padrão',
      price: 299,
      features: ['Análise financeira', 'Planejamento de custos', 'Estratégias de crescimento']
    },
    {
      name: 'Premium',
      price: 599,
      features: ['Análise financeira', 'Planejamento de custos', 'Estratégias de crescimento', 'Análise de mercado']
    }
  ];

  return (
    <div className="container">
      <h2 className="mb-4">Tabela de Preços</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Plano</th>
            <th scope="col">Preço</th>
            <th scope="col">Recursos</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>
              <th scope="row">{plan.name}</th>
              <td>R$ {plan.price},90</td>
              <td>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Produtos