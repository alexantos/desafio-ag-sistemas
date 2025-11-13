interface DetailPage {
    params: {
        id: string;
    };
}

async function getMembro(id: string): Promise<any | null> {
    const res = await fetch(`http://localhost:3001/membro/${id}`);
    return res.json();
}

export default async function TodoDetailsPage({ params }: DetailPage) {
    const detail = await params;
    const todo = await getMembro(detail.id);

    return (
        <main style={{ padding: '20px' }}>
            <h1>Detalhes da Tarefa: #{todo.id}</h1>
            <h1>Detalhes nome: #{todo.nome}</h1>
        </main>
    );
}