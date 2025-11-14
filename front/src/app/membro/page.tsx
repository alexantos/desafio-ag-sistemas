import DialogConfirmacao from "@/components/DialogConfirmacao";
import Link from "next/link";

export default async function membroPage() {

    const data = await fetch('http://127.0.0.1:3001/membro/')
    const membros = await data.json()

    function getIniciais(nome: string = ''): string {
        const regex = /(\p{L})\p{L}*\s*/gu;
        let initials = [...nome.matchAll(regex)];
        return (
            (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between">
                <span className="text-4xl pt-4 font-light">Membros</span>
                <Link href={'/intencao'} className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-2 px-4 mt-4 rounded cursor-pointer">
                    Adicionar
                </Link>
            </div>
            {membros.length > 0 ?
                <div className="flex flex-col pt-4 gap-4">
                    {membros.map((membro: any) => (
                        <div className="flex flex-row bg-white rounded-2xl w-full py-4 px-6 gap-6" key={membro.id}>
                            <div className="flex flex-row w-1/12 items-center">
                                <div
                                    className="flex flex-col w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 bg-blue-800 rounded-full text-white text-xl md:text-2xl xl:text-3xl items-center justify-center">
                                    {getIniciais(membro.nome)}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center w-7/12  gap-1">
                                <div className="text-3xl font-normal">
                                    {membro.nome}
                                </div>
                                <div className="text-1xl text-gray-800">
                                    {membro.telefone}
                                </div>
                            </div>
                            <div className="flex flex-row justify-end items-center w-4/12 gap-4">
                                <div>
                                    {!membro.aprovado ?
                                        <div>
                                            {membro.convidado ?
                                                <div className="flex flex-row items-center">
                                                    <Link href={`/membro/${membro.id}`}>
                                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.75 20.5V22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V9.62105C4.5 9.02455 4.73686 8.45247 5.15851 8.03055L10.5262 2.65951C10.9482 2.23725 11.5207 2 12.1177 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V9.75H18V4.25C18 3.83579 17.6642 3.5 17.25 3.5H12.248L12.2509 7.4984C12.2518 8.74166 11.2442 9.75 10.0009 9.75H6V19.75C6 20.1642 6.33579 20.5 6.75 20.5H9.75ZM10.7488 4.55876L7.05986 8.25H10.0009C10.4153 8.25 10.7512 7.91389 10.7509 7.49947L10.7488 4.55876Z" fill="#343C54" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.2988 12.3389C19.6153 11.6555 18.5073 11.6555 17.8239 12.3389L12.6657 17.4971C12.3028 17.86 12.0749 18.3359 12.0197 18.8461L11.8307 20.593C11.8063 20.8188 11.8854 21.0434 12.046 21.204C12.2066 21.3646 12.4312 21.4437 12.657 21.4193L14.4039 21.2303C14.9141 21.1751 15.39 20.9472 15.7529 20.5843L20.9111 15.4261C21.5945 14.7427 21.5945 13.6347 20.9111 12.9512L20.2988 12.3389ZM18.0219 14.2622L18.9878 15.2281L14.6922 19.5237C14.5713 19.6446 14.4126 19.7206 14.2426 19.739L13.4222 19.8278L13.511 19.0074C13.5294 18.8374 13.6054 18.6787 13.7263 18.5578L18.0219 14.2622Z" fill="#343C54" />
                                                        </svg>
                                                    </Link>
                                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16V17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5V16Z" fill="#323544" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.10051 2 6.75 4.35051 6.75 7.25V9.125H5.5C4.25736 9.125 3.25 10.1324 3.25 11.375V17.2495C3.25 19.8729 5.37665 21.9995 8 21.9995H16C18.6234 21.9995 20.75 19.8729 20.75 17.2495V11.375C20.75 10.1324 19.7426 9.125 18.5 9.125H8.25V7.25C8.25 5.17893 9.92893 3.5 12 3.5C13.4184 3.5 14.6541 4.28724 15.2919 5.45221C15.4909 5.81553 15.9466 5.9488 16.31 5.74987C16.6733 5.55095 16.8066 5.09516 16.6076 4.73184C15.7172 3.10553 13.9882 2 12 2ZM7.47268 10.625C7.48175 10.6253 7.49085 10.6255 7.5 10.6255C7.50915 10.6255 7.51825 10.6253 7.52732 10.625H18.5C18.9142 10.625 19.25 10.9608 19.25 11.375V17.2495C19.25 19.0444 17.7949 20.4995 16 20.4995H8C6.20507 20.4995 4.75 19.0444 4.75 17.2495V11.375C4.75 10.9608 5.08579 10.625 5.5 10.625H7.47268Z" fill="#323544" />
                                                    </svg>
                                                </div>
                                                :
                                                <DialogConfirmacao membro={membro.id} />
                                            }
                                        </div>
                                        :
                                        <div>
                                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z" fill="#323544" />
                                            </svg>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                :
                <div className="flex flex-row justify-center text-2xl" >
                    Não há clientes
                </div>
            }
        </div>
    );
}