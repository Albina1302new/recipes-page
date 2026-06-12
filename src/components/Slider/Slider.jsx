// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./Slider.module.css";
import { useRecipes } from "../../hooks/useRecipes";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
  const { recipes } = useRecipes();

  return (
    <section className={styles.sliderContainer}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        /* navigation */
        /* pagination={{ clickable: true }}*/
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {recipes.map((r) => (
          <SwiperSlide key={r.id} className={styles.slider}>
            <div className={styles.card}>
              <img src={r.image} alt={r.name} />

              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                  <h2>Find din næste favoritopskrift </h2>
                  <p>Udforsk lækre opskrifter fra hele verden</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
