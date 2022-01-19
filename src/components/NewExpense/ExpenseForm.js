import React, { useState } from 'react';
import './expenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState(''); // é uma string vazia, pois o valor ainda não existe quando o componente é desenhado pela primeira vez.
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  // Uma forma menos repetitiva de usar state slices.
  // Porém, um ponto negativo dessa forma é que, ao atualizar o valor de uma propriedade, você precisa alterar todas as três.
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = event => {
    // setEnteredTitle(event.target.value);

    // O state antigo será substituído pelo novo, definido abaixo. Portanto, para evitar a remoção das outras propriedades, as mesmas devem ser copiadas novamente.
    // Uma forma é usando o 'spread' operator. Ele pega um objeto, obtém todas os pares chave-valor e os adiciona ao novo objeto.
    setUserInput({
      ...userInput,
      enteredTitle: event.target.title,
    });
  };

  const amountChangeHandler = event => {
    // setEnteredAmount(event.target.value);

    setUserInput({
      ...userInput,
      enteredAmount: event.target.title,
    });
  };

  const dateChangeHandler = event => {
    // setEnteredDate(event.target.value);

    setUserInput({
      ...userInput,
      enteredDate: event.target.title,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit" onClick={event => event.preventDefault()}>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
