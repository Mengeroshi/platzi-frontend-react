import React from 'react';
import '../styles/components/Success.css';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import { useGoogleAddress } from '../hooks/useGoogleAddress,';

const Success = () => {
  const { state } = React.useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu compra {buyer.name}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
};

export { Success };
