/* eslint-disable prettier/prettier */
import { Head, Html, Main, NextScript } from 'next/document';
import { useState } from 'react';

const Document = () => {
  return (
    <Html className="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
export const theTheme = async (): Promise<string> => {
  const html = document.querySelector('html');
  const currClass = html.classList.contains('dark');
  let whatClass = 'light';
  if (currClass) {
    html.classList.remove('dark');
    html.classList.add('light');
    whatClass = 'light';
    return whatClass;
  } else if (!currClass) {
    html.classList.remove('light');
    html.classList.add('dark');
    whatClass = 'dark';
    return whatClass;
  }
  return whatClass;
};

