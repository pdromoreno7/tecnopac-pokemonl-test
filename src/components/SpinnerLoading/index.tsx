import { Spinner } from '@heroui/spinner';
import React from 'react';

function SpinnerLoading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
}

export default SpinnerLoading;
