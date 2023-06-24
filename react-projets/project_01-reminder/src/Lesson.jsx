import LessonCard from "./LessonCard";
import { data } from "./data";

const Lesson = () => {

    console.log()
  return (
    <>
      <LessonCard name ={data[0].name}image={data[0].image}/>
      <LessonCard name ={data[1].name}image={data[1].image}/>
      <LessonCard name ={data[2].name}image={data[2].image}/>
      <LessonCard name ={data[3].name}image={data[3].image}/>
      <LessonCard name ={data[4].name}image={data[4].image}/>
      <LessonCard name ={data[5].name}image={data[5].image}/>

    </>
  )
}

export default Lesson
