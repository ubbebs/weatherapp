import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';

import { Loader } from '../Loader';

describe('Loader', () => {
  it('test if component rendered with properly classes', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Loader />
      </QueryClientProvider>,
    );
    expect(component.getByRole('Loader')).toHaveClass('absolute hidden');
  });

  it('test if components spinner is set', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Loader />
      </QueryClientProvider>,
    );
    expect(component.getByLabelText('tail-spin-loading')).toBeDefined();
  });
});
