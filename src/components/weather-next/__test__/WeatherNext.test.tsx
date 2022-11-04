import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { WeatherNext } from '../WeatherNext';

describe('WeatherNext', () => {
  it('test if component rendered without data has buttons', () => {
    const queryClient = new QueryClient();
    const componentProps = {
      latitude: 50,
      longitude: 50,
    };
    const component = render(
      <QueryClientProvider client={queryClient}>
        <WeatherNext latitude={componentProps.latitude} longitude={componentProps.latitude} />
      </QueryClientProvider>,
    );
    expect(component.queryByRole('button')).not.toBeInTheDocument();
  });

  it('eeee', async () => {
    const queryClient = new QueryClient();
    const componentProps = {
      latitude: 50,
      longitude: 50,
    };
    const component = render(
      <QueryClientProvider client={queryClient}>
        <WeatherNext latitude={componentProps.latitude} longitude={componentProps.latitude} />
      </QueryClientProvider>,
    );
  });
});
