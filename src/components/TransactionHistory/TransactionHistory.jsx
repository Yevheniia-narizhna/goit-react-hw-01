import s from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.tablH}>Type</th>
          <th className={s.tablH}>Amount</th>
          <th className={s.tablH}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={s.tablLine} key={id}>
              <td className={s.tablB}> {type}</td>
              <td className={s.tablB}> {amount}</td>
              <td className={s.tablB}> {currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
