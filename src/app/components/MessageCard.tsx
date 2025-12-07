import Textfit from 'react-textfit'

export default function MessageCard() {
  return (
    <div className="w-[90%] h-[8rem] bg-[#F5AB3E] rounded-3xl flex flex-col px-6 py-4">
        <p className="text-white font-bold text-[1.1rem]">Hello Dragon!</p>
        <Textfit mode="multi" max={40} className="text-white leading-tight h-[6rem]">Hello Cute Dragon so cool have a good day!</Textfit>
    </div>
  )
}
