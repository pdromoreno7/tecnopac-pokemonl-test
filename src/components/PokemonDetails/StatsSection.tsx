'use client';

import { Progress } from '@heroui/react';
import { useEffect, useState } from 'react';

interface StatsProps {
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export function StatsSection({ stats }: StatsProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {stats?.map((stat) => (
        <div key={stat.stat.name} className="flex items-center gap-4">
          <span className="w-16 text-sm text-default-600">{stat.stat.name}</span>
          <span className="w-8 text-sm tabular-nums">{stat.base_stat}</span>
          <Progress
            aria-label={`${stat.stat.name} stat`}
            value={animate ? stat.base_stat : 0}
            maxValue={100}
            color={stat.base_stat > 50 ? 'success' : 'primary'}
            className="transition-all duration-1000 ease-out"
          />
        </div>
      ))}
      <p className="text-sm text-default-500 mt-4">
        Based on this pokémon stats we consider the best nature for him to be in{' '}
        <span className="text-success">Sp. Def</span> and decreases in <span className="text-default-600">Speed</span>{' '}
        stats.
      </p>
    </div>
  );
}
