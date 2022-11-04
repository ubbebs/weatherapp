import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';

import { Header } from '../Header';

describe('Header', () => {
  it('test if component rendered with properly classes', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>,
    );
    expect(component.getByRole('header')).toHaveClass('flex flex-col pl-4 pr-4 mt-4');
  });
});
