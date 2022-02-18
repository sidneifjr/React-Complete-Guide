import React, { useState } from 'react';
import './expenseForm.css';

const ExpenseForm = (props) => {
  // No entanto, o curso irá continuar com ênfase ao gerenciamento de múltiplos states.
  const [enteredTitle, setEnteredTitle] = useState(''); // é uma string vazia, pois o valor ainda não existe quando o componente é desenhado pela primeira vez.
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Uma forma menos repetitiva de usar state slices.
  // Porém, um ponto negativo dessa forma é que, ao atualizar o valor de uma propriedade, você precisa alterar todas as três.
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);

    // O state antigo será substituído pelo novo, definido abaixo. Portanto, para evitar a remoção das outras propriedades, as mesmas devem ser copiadas novamente.
    // Uma forma é usando o 'spread' operator. Ele pega um objeto, obtém todas os pares chave-valor e os adiciona ao novo objeto.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.title,
    // });

    // Obtendo o snapshot do state anterior e retornando a snapshot do novo state.
    // A forma anterior e essa funcionam bem na maioria dos casos.
    // Porém, é importante notar que o React agenda atualizações de state, não as realiza instantaneamente.
    // Portanto, se você agendar muitas atualizações de state ao mesmo tempo, é perfeitamente possível que você esteja usando uma snapshot incorreta ou desatualizada do state, se usar o método anterior.
    // Dessa forma, o React consegue garantir que a snapshot do state será SEMPRE a versão mais recente da mesma.
    // Para memorizar: "if your state update depends on the previous state, use this function form".
    // setUserInput(prevState => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   };
    // });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.title,
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.title,
    // });
  };

  const submitHandler = event => {
    event.preventDefault();

    // Combinando os dados entrados.
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate) // o constructor "Date" irá parsear o valor da variável e converter para um objeto.
    }

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    // Ao clicar no botão, o evento de 'submit' será disparado pelo form.
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Two way binding
            Em inputs, não ouvimos somente à mudanças, mas também podemos passar um novo valor de volta ao input.
            Dessa forma, podemos resetar ou alterar o input programaticamente.
            É feito de forma simples: adicionando o atributo html "value" ao elemento desejado e então o definindo com o valor desejado.
            Pode soar como um loop infinito, mas não é.

            - A vantagem é que, quando o form realizar o evento de submit, podemos chamar "setEnteredTitle" e definir seu valor como uma string vazia (""), o qual era nosso estado inicial.
            Dessa forma, estamos sobreescrevendo o que o usuário digitou e resetando o input ao seu valor original, para que novos valores possam ser usados após o fim do submit.

            - Two way binding é muito útil ao trabalhar com forms, pois ele permite receber dados do usuário e também alterá-los.
          */}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
