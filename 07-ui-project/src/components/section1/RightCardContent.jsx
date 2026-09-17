import { ArrowRight } from "lucide-react";


const RightCardContent = (props) => {
  return (
      <div className="absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12 flex justify-center 
        items-center text-xl font-semibold">{props.id+1}</h2>
        <div>
          <p className="text-lg text-shadow-2xs leading-relaxed text-white mb-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quasi accusantium pariatur autem similique itaque.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-8 py-2
            rounded-full">{props.tag}</button>
            <button className="bg-blue-600 text-white font-medium px-3 py-2
            rounded-full">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent