
import { cadastroMembro } from '../actions';

export default function cadastroMembroPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between pb-4">
                <span className="text-4xl pt-4 font-light">Cadastro membro</span>
            </div>
            <div className='bg-white p-4 rounded-xl'>
                <form action={cadastroMembro} className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label>Nome</label>
                        <input className='bg-gray-100 p-2 rounded-md' type="text" name="nome" placeholder="Digite seu nome" />
                    </div>
                    <div className='flex flex-col'>
                        <label>Email</label>
                        <input className='bg-gray-100 p-2 rounded-md' type="email" name="email" placeholder="Digite seu email" />
                    </div>
                    <div className='flex flex-col'>
                        <label>Motivação</label>
                        <textarea className='bg-gray-100 p-2 rounded-md' name="motivacao" placeholder="Digite por que você quer participar" />
                    </div>
                    <button className='w-full py-2 bg-blue-700 text-white rounded-md cursor-pointer' type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}