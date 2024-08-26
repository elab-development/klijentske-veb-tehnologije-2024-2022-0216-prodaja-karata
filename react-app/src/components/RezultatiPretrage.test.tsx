import { it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import RezultatiPretrage from './RezultatiPretrage';
import KarteLista from './KarteLista';
import Dogadjaj from '../models/Dogadjaj';


vi.mock('./KarteLista', () => ({
  default: vi.fn(() => <div data-testid="karte-lista-mock" />)
}));

const createMockDogadjaj = (id: string, name: string): Dogadjaj => ({
    id,
    name,
    images: [],
    dates: {
      start: {
        localDate: '2023-08-01',
        localTime: '19:00:00',
      }
    }
});

it('renderuje KarteLista kada je broj dogadjaja manji od 3', () => {
    const mockDogadjaji: Dogadjaj[] = [
      createMockDogadjaj('1', 'Dogadjaj 1'),
      createMockDogadjaj('2', 'Dogadjaj 2'),
    ];

    render(<RezultatiPretrage dogadjaji={mockDogadjaji} />);

    expect(screen.getByTestId('karte-lista-mock')).toBeTruthy();
    expect(KarteLista).toHaveBeenCalledWith({ dogadjaji: mockDogadjaji }, {});
});