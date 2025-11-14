

export default async function dashboard() {

    const response = await fetch('http://127.0.0.1:3001/dashboard/')
    const dados = await response.json()

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between pb-4">
                <span className="text-4xl pt-4 font-light">Dashboard</span>
            </div>
            <div className='flex flex-row gap-4'>
                <div className="flex flex-col w-1/3 bg-white justify-center items-center p-4 rounded-2xl">
                    <span className="text-md text-gray-600">Total membros</span>
                    <span className="text-4xl">{dados.total_membros}</span>
                </div>
                <div className="flex flex-col w-1/3 bg-white justify-center items-center p-4 rounded-2xl">
                    <span className="text-md text-gray-600">Total indicação no mês</span>
                    <span className="text-4xl">{dados.total_indicacoes_mes}</span>
                </div>
                <div className="flex flex-col w-1/3 bg-white justify-center items-center p-4 rounded-2xl">
                    <span className="text-md text-gray-600">Agradecimentos (obrigados)</span>
                    <span className="text-4xl">{dados.agradecimentos}</span>
                </div>
            </div>
        </div>
    );
}