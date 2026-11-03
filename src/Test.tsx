import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Teste de inserção de comentários no Post', () => {
    test('Deve permitir inserir dois comentários com sucesso utilizando data-testid', () => {
        render(<App />);


        const inputComentario = screen.getByTestId('campo-comentario');
        const botaoEnviar = screen.getByTestId('botao-enviar-comentario');

        fireEvent.change(inputComentario, {
        target: { value: 'Excelente miniatura!' }
        });
        fireEvent.click(botaoEnviar);

        
        fireEvent.change(inputComentario, {
        target: { value: 'Muito detalhado o acabamento.' }
        });
        fireEvent.click(botaoEnviar);

        
        expect(screen.getByText('Excelente miniatura!')).toBeInTheDocument();
        expect(screen.getByText('Muito detalhado o acabamento.')).toBeInTheDocument();
    });
});