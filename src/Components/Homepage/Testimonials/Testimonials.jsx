import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      testimonial:
        "I'm amazed at how ClickDown has organized my tasks efficiently. The interface is intuitive, making it easy to manage my workload.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Alexandra Brown",
      role: "Marketing Specialist",
      testimonial:
        "ClickDown's task categorization and collaboration features have significantly improved our team's productivity. It's a game-changer!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Michael Adams",
      role: "Freelance Developer",
      testimonial:
        "Using ClickDown has streamlined my freelance projects. The simplicity and functionality are unparalleled.",
      image: "https://via.placeholder.com/150",
    },
    // Add more testimonials here
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-black text-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl">
            What our users are saying
          </h2>
          <ul className="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
            {testimonialsData.map((testimonial, index) => (
              <li key={index} className="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
                <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                <p>{testimonial.testimonial}</p>
                <div className="flex">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="mr-4 h-16 w-16 rounded-full"
                  />
                  <div className="flex flex-col">
                    <h6 className="font-bold">{testimonial.name}</h6>
                    <p className="text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center flex-col sm:flex-row">
            <a
              href="/dashboard" // Replace with appropriate link
              className="flex items-center justify-center border-[1.5px] border-solid border-white py-4 text-center font-semibold px-8 mr-5 lg:mr-8 mb-4 sm:mb-0"
            >
              <p className="mr-6 font-bold">Start Organizing</p>
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
