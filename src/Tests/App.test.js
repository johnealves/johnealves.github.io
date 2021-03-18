import React from 'react';
import { screen }from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa rotas de navegação', () => {
  it('testa que Home é a primeira pagina', () => {
    renderWithRouter(<App />);
    const home = screen.getByText(/Johne Alves/)
    expect(home).toBeInTheDocument();
  })
  
  it('Deve renderizar o Component Stacks', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText('Stacks'));
    const stack = screen.getByText(/My Stacks/i);
    expect(stack).toBeInTheDocument();
    userEvent.click(screen.getByText('Home'));
    const noStack = screen.queryByText(/My Stacks/i);
    expect(noStack).toBeNull();
  })

  it('deve rednderizar o component Projects', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText('Projects'));
    const projectPage = screen.getByText(/My Projects/i);
    expect(projectPage).toBeInTheDocument();
    userEvent.click(screen.getByText('Home'));
    const noProject = screen.queryByText(/My Projects/i);
    expect(noProject).toBeNull();
  })

  it('testa que um caminho que não existe renderiza "page no found"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-que-nao-existe/');
    const noMatchPage = screen.getByText(/Page not found/i);
    expect(noMatchPage).toBeInTheDocument();
  })
})
