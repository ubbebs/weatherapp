import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { App } from './App';

describe('App', () => {
  it('Render hello world', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    expect(screen.getByRole('heading', {
      level: 1,
    })).toHaveTextContent('Weather Online');
  });
});
