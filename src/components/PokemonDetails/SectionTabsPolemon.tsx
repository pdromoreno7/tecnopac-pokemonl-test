'use client';
import { Skeleton, Tab, Tabs } from '@heroui/react';
import React from 'react';
import { StatsSection } from './StatsSection';

interface SectionTabsPolemonProps {
  isLoadingDescription: boolean;
  description: string;
  weight: string;
  height: string;
}

function SectionTabsPolemon({ isLoadingDescription, description, weight, height }: SectionTabsPolemonProps) {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Pokemon information"
        className="mb-6"
        items={[
          {
            id: 'about',
            label: 'About',
            content: (
              <div className="py-4">
                {isLoadingDescription ? (
                  <div className="w-full flex flex-col gap-2 my-9">
                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6">{description}</p>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Weight:</span>
                    <span className="font-medium">{weight} kg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">Height:</span>
                    <span className="font-medium">{height} m</span>
                  </div>
                </div>
              </div>
            ),
          },
          {
            id: 'stats',
            label: 'Stats',
            content: (
              <div className="py-4">
                <StatsSection />
              </div>
            ),
          },
          {
            id: 'moves',
            label: 'Moves',
            content: (
              <div className="py-4">
                <p className="text-gray-600">Moves content goes here</p>
              </div>
            ),
          },
          {
            id: 'evolutions',
            label: 'Evolutions',
            content: (
              <div className="py-4">
                <p className="text-gray-600">Evolutions content goes here</p>
              </div>
            ),
          },
          {
            id: 'location',
            label: 'Location',
            content: (
              <div className="py-4">
                <p className="text-gray-600">Location content goes here</p>
              </div>
            ),
          },
        ]}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default SectionTabsPolemon;
