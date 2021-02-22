import FormHeader from '../components/FormHeader/FormHeader';
import FormFooter from '../components/FormFooter/FormFooter';
import PersonalForm from '../components/PersonalForm/PersonalForm';
import './App.scss';
import BillingForm from '../components/BillingForm/BillingForm';
import ConfirmPayment from '../components/ConfirmPayment/ConfirmPayment';
import PurchaseSuccess from '../components/PurchaseSuccess/PurchaseSuccess';
import { useState } from 'react';

function App() {
  const [current, setCurrent] = useState('personal');
  const [paymentComplete, setPaymentComplete] = useState(false);

  return (
    <div className='app'>
      <div className='app__container'>
        {!paymentComplete ? (
          <>
            <FormHeader current={current} />
            {current === 'personal' && (
              <PersonalForm submit={() => setCurrent('billing')} />
            )}
            {current === 'billing' && (
              <BillingForm submit={() => setCurrent('confirm')} />
            )}
            {current === 'confirm' && (
              <ConfirmPayment submit={() => setPaymentComplete(true)} />
            )}
          </>
        ) : (
          <PurchaseSuccess />
        )}
      </div>
    </div>
  );
}

export default App;
