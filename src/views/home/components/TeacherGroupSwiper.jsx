import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "./NewCourseCard";
const TeacherGroupSwiper = () => {
  const navData = [
    {
      id: 1,
      name: "Kurs nomi 1",
    },
    {
      id: 2,
      name: "Kurs nomi 2",
    },
    {
      id: 3,
      name: "Kurs nomi 3",
    },
    {
      id: 4,
      name: "Kurs nomi 4",
    },
    {
      id: 5,
      name: "Kurs nomi 5",
    },
    {
      id: 6,
      name: "Kurs nomi 6",
    },
  ];
  return (
    <Swiper
      slidesPerView={4.5}
      spaceBetween={10}
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Navigation]}
      className="mySwiper"
    >
      {navData.map((item) => {
        return (
          <SwiperSlide key={item.id} className="">
            <NewCourseCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TeacherGroupSwiper;
