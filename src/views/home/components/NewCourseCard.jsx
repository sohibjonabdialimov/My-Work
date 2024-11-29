import newCourse from "../../../assets/images/new-course.png";
import avatar from "../../../assets/images/avatar.png";
import star from "../../../assets/images/star.svg";
const NewCourseCard = () => {
  return (
    <div className="cursor-pointer">
      <img
        className="w-full object-cover rounded-2xl h-[220px]"
        src={newCourse}
        alt="Yangi qo’shilgan kurslar"
      />
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1">
          <img
            className="w-[13px] h-[12.4px] object-cover"
            src={star}
            alt="Ilmlar yulduz"
          />
          <p className="font-normal text-[11px] leading-5 text-secondary_color">5.0 (30 sharhlar)</p>
        </div>
        <p className="font-normal text-[11px] leading-5 text-secondary_color">120 o’quvchi</p>
      </div>
      <h1 className="text-lg font-semibold text-main_color">Kurs nomi</h1>
      <div className="flex items-center gap-1">
        <img className="w-6 h-6 object-cover rounded-full" src={avatar} alt="Avatar ilmlar" />
        <p className="text-secondary_color text-sm font-normal">O’qituvchi full name</p>
      </div>
      <p className="text-blue_color text-base font-semibold">Kurs Narxi</p>
    </div>
  );
};

export default NewCourseCard;
