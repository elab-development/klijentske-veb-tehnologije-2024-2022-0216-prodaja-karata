import {  it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ReusableForma from './ReusableForma';

  const testPolja = [
    { id: 'ime', type: 'text', label: 'Ime' },
    { id: 'email', type: 'email', label: 'Email' },
  ];

  it('da li se podaci forme ažuriraju kada korisnik unese vrednosti', () => {
    render(<ReusableForma polja={testPolja} onSubmit={() => {}} submitButtonText="Posalji" />);
    
    const imeInput = screen.getByLabelText('Ime');
    fireEvent.change(imeInput, { target: { value: 'Petar Petrovic' } });
    
    expect(imeInput).toHaveValue('Petar Petrovic');
  });
