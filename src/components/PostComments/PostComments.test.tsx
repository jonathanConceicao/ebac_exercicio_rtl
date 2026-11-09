import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index'; 

describe('Teste para o componente PostComments', () => {
    test('Deve permitir inserir dois comentários com sucesso utilizando data-testid', () => {
        render(<PostComments />);

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