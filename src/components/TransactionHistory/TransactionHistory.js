import { PropTypes } from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(transaction => (
    <tr key={transaction.id}>
      <th>{transaction.type}</th>
      <th>{transaction.amount}</th>
      <th>{transaction.currency}</th>
    </tr>
  ));

  return (
    <table class={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactions}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
