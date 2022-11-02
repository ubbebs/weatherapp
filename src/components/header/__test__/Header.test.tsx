import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';

import { Header } from '../Header';

describe('Header', () => {
  it('test if component rendered without data has h1', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>,
    );
    expect(component.getByRole('heading', {
      level: 1,
    })).toHaveTextContent('Weather Online');
  });

  it('test if component rendered without data has absolute class', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Header />
      </QueryClientProvider>,
    );
    expect(component.getByRole('header')).toHaveClass('absolute');
  });

  it("test if component rendered with data hasn't h1 text", () => {
    const queryClient = new QueryClient();
    const data = [''];
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Header data={data} />
      </QueryClientProvider>,
    );
    expect(component.queryByText(/Weather Online/i)).not.toBeInTheDocument();
  });

  it("test if component rendered with data hasn't absolute class", () => {
    const queryClient = new QueryClient();
    const data = [''];
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Header data={data} />
      </QueryClientProvider>,
    );
    expect(component.getByRole('header')).not.toHaveClass('absolute');
  });
});
