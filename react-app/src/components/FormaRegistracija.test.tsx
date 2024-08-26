import { it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FormaRegistracija from './FormaRegistracija';


vi.mock('./ReusableForma', () => ({
  default: ({ onSubmit, submitButtonText }: any) => (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit({}); }}>
      <button type="submit">{submitButtonText}</button>
    </form>
  )
}));

  beforeEach(() => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    vi.spyOn(Storage.prototype, 'setItem');
  });

  it('renderuje ReusableForma i uspesno handle-uje Registraciju', () => {
    render(<FormaRegistracija />);

    expect(screen.getByText('Registrujte se')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Registrujte se'));

    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      'registracijaPodaci',
      '{}'
    );

    expect(screen.getByText('Uspešno ste se registrovali! Hvala vam.')).toBeInTheDocument();

    expect(window.alert).toHaveBeenCalledWith('Uspešno ste se registrovali!');
  });
