import Card from "./Card";

const Data = ({refer}) => {

    const data = [
        {
            desc: "Give me some sunshine Give me some rain",
            filesize:".9mb",
            close:false,
            tag:{ isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
        },
        {
            desc: "Be a Front End",
            filesize:".4mb",
            close:true,
            tag:{ isOpen:true, tagTitle:"", tagColor:"green"}
        },
        {
            desc: "Learn React from Sheryians coding school",
            filesize:".7mb",
            close:false,
            tag:{ isOpen:false, tagTitle:"Download Now", tagColor:"blue"}
        },
        {
            desc: "Don't use ChatGpt for making Fake Projects.",
            filesize:".3mb",
            close:true,
            tag:{ isOpen:true, tagTitle:"Open Now", tagColor:"green"}
        },
    ]

  return(
  <>
    {data.map((item,index)=>(
        <Card key={index} data={item} reference ={refer} />
    ))}
  </>
  );
};

export default Data;
