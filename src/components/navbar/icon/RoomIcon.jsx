import React from 'react';

export default function RoomIcon({props, color}) {



	return (<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}><g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={88} strokeDashoffset={88} d="M15.5 21.5c-10.5 2.5 -12.5 -2.5 -12.5 -8.5v-3c0 -6 2.5 -7 7 -7h4c4.5 0 7 1.5 7 5.5v4c0 6.5 -10 4 -13.5 4c-1 0 -1.5 7 8 5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="88;0"></animate></path><path strokeDasharray={32} strokeDashoffset={32} d="M7 13.5l0 -5.5c0 0 0.5 -2 2.5 -2c2 0 2.5 2 2.5 2l0 2.5l0 -2.5c0 0 0.5 -2 2.5 -2c2 0 2.5 2 2.5 2l0 5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.7s" values="32;0"></animate></path></g></svg>);
}