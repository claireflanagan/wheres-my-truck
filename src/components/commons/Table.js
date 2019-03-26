import React from 'react';
import styles from './Table.css';

export default function Table({ headers, rows }) {
  const ths = headers.map(header => (
    <th key={header.display}>{header.display}</th>
  ));

  const trs = rows.map((row, i) => {
    return (
      <tr key={i}>{headers.map(header => {
        const text = row[header.key];
        return <td key={text}>{text}</td>;
      })}</tr>
    );
  });

  return (
    <table className={styles.Table}>
      <thead>
        <tr>{ths}</tr>
      </thead>
      <tbody>
        {trs}
      </tbody>
    </table>
  );
}
