import teacher from "../../../assets/images/teacher.jpeg";
import "./style.css";
const TeachersGroupCard = () => {
  return (
    <div className="teachers_group rounded-2xl">
      <div className="w-full h-full teachers_group_img">
       <img className="w-full h-full rounded-2xl object-cover" src={teacher} alt="" />
      </div>
      <div className="teachers_group_content w-full px-3 py-4">
        <h2 className="text-base font-semibold mb-1">O’qituvchi full name</h2>
        <h3 className="text-sm font-normal mb-1">Yo’nalishi</h3>
        <button className="btn w-full py-[5px]">Obuna bo’lish</button>
      </div>
    </div>
  )
}

export default TeachersGroupCard