import React from 'react';

function AccountRow(props) {
  return (
          <tr>
             <td>{props.value.type}-{props.value.number}</td>
             <td>{props.value.availableCash-props.value.previousCash}</td>
          </tr>
  );
}

export default AccountRow;
