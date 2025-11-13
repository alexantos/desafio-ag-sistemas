
import { redirect } from 'next/navigation';
import { submitForm } from '../actions';

export default function cadastroMembroPage() {
    return (
        <form action={submitForm}>
            <input type="text" name="nome" placeholder="Your Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="text" name="motivacao" placeholder="Your Email" />
            <button type="submit">Submit</button>
        </form>
    );
}