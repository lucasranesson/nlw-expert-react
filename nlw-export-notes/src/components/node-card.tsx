<<<<<<< HEAD
import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'


// Recebendo elementos através da propriedades do componente
interface NoteCardProps {
    note: {
        id: string
        date: Date
        content: string
    }

    onNoteDeleted: (id: string) => void
}

export function NoteCard({note, onNoteDeleted}: NoteCardProps) {
=======
export function NoteCard() {
>>>>>>> parent of 0427c63 (aula 02)
    return (
        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
            <span  className='text-sm font-medium text-slate-300'>
<<<<<<< HEAD
                {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
=======
                há 2 dias
>>>>>>> parent of 0427c63 (aula 02)
            </span>
            <p className='text-sm leading-6 font-regular text-slate-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquid quae iste laborum in itaque! Aspernatur impedit fugit recusandae amet sed laudantium eligendi perferendis pariatur? Aliquid fugit ipsam libero a!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquid quae iste laborum in itaque! Aspernatur impedit fugit recusandae amet sed laudantium eligendi perferendis pariatur? Aliquid fugit ipsam libero a!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquid quae iste laborum in itaque! Aspernatur impedit fugit recusandae amet sed laudantium eligendi perferendis pariatur? Aliquid fugit ipsam libero a!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod aliquid quae iste laborum in itaque! Aspernatur impedit fugit recusandae amet sed laudantium eligendi perferendis pariatur? Aliquid fugit ipsam libero a!</p>

            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
<<<<<<< HEAD
        </Dialog.Trigger>

        <Dialog.Portal>
            <Dialog.Overlay className='inset-0 fixed bg-black/50' />
            <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none'>
                <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100"> 
                    <X className="size-5"/>
                </Dialog.Close>
                
                <div className="flex flex-1 flex-col gap-3 p-5">
                    <span  className='text-sm font-medium text-slate-300'>
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
                </span>

                <p className='text-sm leading-6 text-slate-400'>
                    {note.content}
                </p>
                </div>

                <button 
                    type="button"
                    onClick={() => onNoteDeleted(note.id)}
                    className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group">
                        Desejar <span className="text-red-400 hover:underline group-hover:underline">apagar essa nota?</span> 

                </button>
            </Dialog.Content>
        </Dialog.Portal>

        </Dialog.Root>
=======
        </div>
>>>>>>> parent of 0427c63 (aula 02)
    )
}