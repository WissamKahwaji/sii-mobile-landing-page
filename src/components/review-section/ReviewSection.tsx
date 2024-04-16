import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSection = () => {
  const customerReviews = [
    {
      id: 1,
      content:
        "لقد كان العمل مع Sii Media متعة مطلقة. لقد فهموا رؤيتنا وقدموا تطبيقًا متطورًا تجاوز توقعاتنا. كان الفريق محترفًا وسريع الاستجابة ويتمتع بمهارات عالية. أوصي بهم بشدة لأي شخص يتطلع إلى بناء حلول رقمية مبتكرة",
      author: "جون سميث",
    },
    {
      id: 2,
      content:
        "لقد ساعدتنا Sii Media على تحسين إستراتيجية تحقيق الدخل من التطبيقات لدينا من خلال حلولها المبتكرة. لقد قدموا رؤى قيمة ونفذوا استراتيجيات أدت إلى زيادة تدفقات إيراداتنا بشكل كبير. خبرتهم في هذا المجال لا مثيل لها. ونحن نتطلع إلى استكشاف المزيد من الفرص معًا.",
      author: "مايك دوي",
    },
    // Add more reviews as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: true,
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/80 to-purple-400 z-1"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-2 w-3/4 mx-auto">
        <Slider {...settings}>
          {customerReviews.map(review => (
            <div
              key={review.id}
              className="text-start p-3 lg:px-14 lg:py-14"
              style={{ direction: "rtl" }}
            >
              <p
                className="md:mt-4 lg:mt-4 md:text-2xl lg:text-2xl font-bold font-header  "
                style={{ direction: "rtl" }}
              >
                {review.author}
              </p>
              <p
                className="mt-4 md:mt-4 text-base md:text-2xl lg:mt-4 lg:text-4xl font-body "
                style={{ direction: "rtl" }}
              >
                {review.content}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;
