'use client';

import { Progress } from '@heroui/react';
import { useEffect, useState } from 'react';

interface Stat {
  name: string;
  value: number;
  color?: 'default' | 'success';
}

export function StatsSection() {
  const [animate, setAnimate] = useState(false);

  const stats: Stat[] = [
    { name: 'HP', value: 45 },
    { name: 'Attack', value: 49 },
    { name: 'Defense', value: 49 },
    { name: 'Sp. Atk', value: 65, color: 'success' },
    { name: 'Sp. Def', value: 65, color: 'success' },
    { name: 'Speed', value: 45 },
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {stats.map((stat) => (
        <div key={stat.name} className="flex items-center gap-4">
          <span className="w-16 text-sm text-default-600">{stat.name}</span>
          <span className="w-8 text-sm tabular-nums">{stat.value}</span>
          <Progress
            aria-label={`${stat.name} stat`}
            value={animate ? stat.value : 0}
            maxValue={100}
            color={stat.color}
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
