import React, { useState } from 'react';
import NovoComponente from '../components/NovoComponente';

function MeuComponente() {
  // Defina um tipo inicial para o estado e para os componentes
  const [componentes, setComponentes] = useState<React.ReactNode[]>([]);

  const adicionarNovoComponente = () => {
    // Cria um novo componente e adiciona-o ao array de componentes
    const novoComponente = <NovoComponente key={componentes.length} />;
    setComponentes([...componentes, novoComponente]);
  };

  return (
    <div>
      <button onClick={adicionarNovoComponente}>Adicionar Novo Componente</button>
      {componentes.map((componente, index) => (
        <div key={index}>{componente}</div>
      ))}
    </div>
  );
}

export default MeuComponente;
