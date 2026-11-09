// src/components/PostComments/index.tsx
import { useState, FormEvent } from 'react';
import styles from './PostComments.module.css';

const PostComments = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!tempComment.trim()) return;
        setComments([...comments, tempComment]);
        setTempComment('');
    }

    return (
        <div>
            <ul className={styles['post-comments']}>
                {comments.map((comment, index) => (
                    <li key={index} className={styles['post-comment']}>
                        {comment}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea 
                    data-testid="campo-comentario"
                    value={tempComment} 
                    onChange={e => setTempComment(e.target.value)} 
                    className={styles['post-comments-textarea']}
                    placeholder="Comente aqui..."
                />
                <button 
                    data-testid="botao-enviar-comentario"
                    type="submit" 
                    className={styles['post-comments-button']}
                >
                    Comentar
                </button>
            </form>
        </div>
    );
};

export default PostComments;