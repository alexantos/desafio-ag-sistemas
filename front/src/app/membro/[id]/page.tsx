import { cadastroComplemento } from "@/app/actions";

interface DetailPage {
    params: {
        id: string;
    };
}

async function getMembro(id: string): Promise<any | null> {
    const res = await fetch(`http://localhost:3001/membro/${id}`);
    return res.json();
}

export default async function detalheMembro({ params }: DetailPage) {
    const detail = await params;
    const todo = await getMembro(detail.id);

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between pb-4">
                <span className="text-4xl pt-4 font-light">Cadastro convite</span>
            </div>
            <div className='bg-white p-4 rounded-xl'>
                <form action={cadastroComplemento} className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label>Cpf</label>
                        <input className='bg-gray-100 p-2 rounded-md' type="text" name="cpf" placeholder="Digite seu cpf" />
                    </div>
                    <div className='flex flex-col'>
                        <label>Telefone</label>
                        <input className='bg-gray-100 p-2 rounded-md' type="text" name="telefone" placeholder="Digite seu telefone" />
                    </div>
                    <div className='flex flex-col invisible'>
                        <label>Motivação</label>
                        <input className='fixed' name="membro" value={detail.id} />
                    </div>
                    <button className='w-full py-2 bg-blue-700 text-white rounded-md cursor-pointer' type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}


