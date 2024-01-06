import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';
import { useTranslation } from 'react-i18next';

function History() {
  const { t, i18n } = useTranslation();

  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>{t('recent_history')}</h2>
      {history.map((item) => {
        console.log('item: ', item);
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)',
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === 'expense' ? 'red' : 'var(--color-green)',
              }}
            >
              {type === 'expense'
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
