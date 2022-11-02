import { describe, it } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';

import { Search } from '../Search';

describe('Search', () => {
  it('test if component has input', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>,
    );
    expect(component.getByPlaceholderText(/Type here city name/i)).toBeInTheDocument();
  });

  it("test if component's input is holding value", () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>,
    );
    const searchInput = component.getByPlaceholderText(/Type here city name/i) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Warsaw' } });
    expect(searchInput.value).toBe('Warsaw');
  });

  it('test if component has button', () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>,
    );
    expect(component.getByRole('button')).toBeInTheDocument();
  });

  it("test if component's button takes input's value", () => {
    const queryClient = new QueryClient();
    const component = render(
      <QueryClientProvider client={queryClient}>
        <Search />
      </QueryClientProvider>,
    );
    const searchInput = component.getByPlaceholderText(/Type here city name/i) as HTMLInputElement;
    const searchButton = component.getByRole('button');
    fireEvent.change(searchInput, { target: { value: 'Warsaw' } });
    fireEvent.click(searchButton);
    expect(searchInput.value).toBe('Warsaw');
  });
});
