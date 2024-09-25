import React from 'react';

const Spinner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  // Fixed type declaration
  return (
    <svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='#FF5956'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <style>
        {
          '@keyframes spinner_T6mA{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}to{transform:rotate(360deg)}}'
        }
      </style>
      <g
        style={{
          transformOrigin: 'center',
          animation: 'spinner_T6mA .75s step-end infinite',
        }}
      >
        <path opacity={0.14} d='M11 1H13V6H11z' />
        <path transform='rotate(30 12 12)' opacity={0.29} d='M11 1H13V6H11z' />
        <path transform='rotate(60 12 12)' opacity={0.43} d='M11 1H13V6H11z' />
        <path transform='rotate(90 12 12)' opacity={0.57} d='M11 1H13V6H11z' />
        <path transform='rotate(120 12 12)' opacity={0.71} d='M11 1H13V6H11z' />
        <path transform='rotate(150 12 12)' opacity={0.86} d='M11 1H13V6H11z' />
        <path transform='rotate(180 12 12)' d='M11 1H13V6H11z' />
      </g>
    </svg>
  );
};

export default Spinner;
