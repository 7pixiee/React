import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="rightContent" className=" overflow-x-hidden rounded-4xl h-full w-2/3 p-6 flex flex-nowrap gap-10">
     
     <div className="cards-track flex gap-5">
      {props.users.map(function (elem, idx) {

        return <RightCard id={idx} img={elem.img} tag={elem.tag} />
      })}
      </div>
    </div>
  );
};

export default RightContent;
