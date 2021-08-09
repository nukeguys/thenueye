import React from 'react';

import { useRouter } from 'next/router';

interface IProps {
  league: string;
  heroName: string;
  heroImage: string;
  years: string;
  highestRank: string;
  color: string;
  children: React.ReactNode;
}

export default function Hero({
  league,
  heroName,
  heroImage,
  years,
  highestRank,
  color,
  children,
}: IProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row mt-4">
      <div className="font-sans flex flex-row sm:flex-col items-start sm:mr-2 flex-shrink-0">
        <div className="w-full">
          <p
            className="uppercase font-mono font-bold text-lg"
            style={{ color }}
          >
            {league}
          </p>
          <p className="font-bold text-2xl font-serif">{heroName}</p>
          <p className="text-xs font-bold" style={{ color: '#969696' }}>
            {years}
          </p>
          <p
            className="uppercase text-xs font-bold"
            style={{ color: '#969696' }}
          >
            HIGHEST RANK: {highestRank}
          </p>
        </div>
        <img
          className="w-32 sm:w-48 sm:mt-4"
          src={`${router.basePath}/assets/one-hit-wonders/${heroImage}`}
          alt={heroName}
        />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
