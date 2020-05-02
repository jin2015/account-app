import React from 'react';

function AccountRow(props) {
  return (
          <tr>
             <td>{props.value.type}-{props.value.number}</td>
  <td>{props.value.availableCash-props.value.previousCash} <br/>   {(Math.round(props.value.availableCash/props.value.previousCash)/100)-1}</td>
          </tr>
  );
}

export default AccountRow;
