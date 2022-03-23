import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './expenseItem.css';

const ExpenseItem = (props) => {
  /**
   * Introdução simples a Hooks
   * 
   * - Todos os hooks são reconhecidos pelo uso de 'use' no começo de seus nomes.
   * - Devem ser chamados SOMENTE diretamente dentro de um componente funcional (ou seja, um componente feito com funções, ao invés de classes).
   * - Não podem ser chamados dentro de uma função interna.
   * 
   * -> useState
   * 
   * - Basicamente, criamos um tipo 'especial' de variável, a qual alterações na mesma irão disparar a função do componente novamente, aplicando as alterações desejadas.
   * Podemos definir um valor inicial para essa variável 'especial'.
   * 
   * Ex.: useState(props.title);
   * 
   * - useState retorna o acesso à variável e uma função que permite definir um novo valor para essa variável 'especial', através de um array.
   * 
   * O primeiro valor desse array é a variável em si, e o segundo valor é a função responsável pela alteração do valor da variável.
   * 
   * Podemos utilizar array destructuring, para armazenar ambos elementos em variáveis (ou constantes) separadas.
   * 
   * Obs.: useState SEMPRE retorna dois valores e o primeiro valor SEMPRE será o valor atual da variável!
   * 
   */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;
