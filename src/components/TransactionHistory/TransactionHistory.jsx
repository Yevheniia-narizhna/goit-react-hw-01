export default function TransactionHistory({items}) {
    return (
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tr key={id}>
                        <td>  type={type}</td>
                        <td>  amount={amount}</td>
                        <td>  currency={currency}</td>
                                
                    </tr>
                )
            })}
        </tbody>
        </table>
    );
}