import React from 'react';
import AccountRow from './AccountRow'

function AccountTable() {
    const serverAccounts =[ 
        {
            id: 1,
            type: "IRA",
            number: "5200",
            availableCash: 250,
            previousCash: 300,
        },
        {
            id: 2,
            type: "AAA",
            number: 3810,
            name: "AAA-3810",
            availableCash: 300,
            previousCash: 250
        },
         {
            id: 3,
            type: "AAA",
            number: 2019,
            availableCash: 3030,
            previousCash: 2503
        },
        {
            id: 4,
            type: "AAA",
            number: 1812,
            availableCash: 3020,
            previousCash: 2023
        },
        {
            id: 5,
            type: "AAA",
            number: 14,
            availableCash: 3020,
            previousCash: 2023
        },
        {
            id: 6,
            type: "AAA",
            number:  29,
            availableCash: 3020,
            previousCash: 2023
        },
         {
            id: 7,
            type: "AAA",
            number: 31,
            availableCash: 3020,
            previousCash: 2023
        } 
        ,
         {
            id: 8,
            type: "AAA",
            number:  36,
            availableCash: 3020,
            previousCash: 3020
        } 
        ];

  return (
    <table>
        <thead>
          <tr>
              <th>
                  <a>Account</a>
              </th>
              <th>
                  <a>Available Cash <br/> Today's Change</a>
              </th>
          </tr>
        </thead>
        <tbody>
            {
                serverAccounts.map((value,index) => {

                     return  <AccountRow key={index} value={value}></AccountRow>
                })};
            }
           
        </tbody>
    </table>
  );
}

export default AccountTable;
