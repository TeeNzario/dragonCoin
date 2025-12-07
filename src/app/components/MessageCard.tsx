
interface MessageCardProps {
    topic: string;
    message: string;
}

export default function MessageCard({ topic, message }: MessageCardProps) {
  return (
    <div className="w-[90%] h-[8rem] bg-[#F5AB3E] rounded-3xl flex flex-col px-6 py-4">
        <p className="text-white font-bold text-[1.1rem]">{topic}</p>
        <div className="text-white leading-tight h-[6rem] overflow-y-auto break-words">
        {message}
    </div>
    </div>
  )
}
