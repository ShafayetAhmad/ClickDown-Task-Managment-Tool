

const About = () => {
  return (
    <div className="container mx-auto py-8 px-8 ">
      <h1 className="text-4xl font-bold mb-4 text-center">About ClickDown</h1>
      <p className="text-lg mb-6">
        ClickDown is an intuitive task management solution designed to help
        individuals and teams organize, prioritize, and accomplish tasks
        efficiently. Whether you&apos;re a professional managing complex projects or
        an individual organizing your daily to-dos, ClickDown is here to assist
        you.
      </p>
      <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
      <p className="text-lg mb-6">
        Our mission is to simplify task management by providing a user-friendly
        interface coupled with powerful features. We aim to streamline workflow,
        enhance productivity, and empower users to achieve their goals
        effectively.
      </p>
      <h2 className="text-2xl font-bold mb-3">Key Features</h2>
      <ul className="list-disc ml-6 text-lg mb-6">
        <li>Task categorization into to-do, ongoing, and completed sections</li>
        <li>Drag-and-drop functionality for easy task management</li>
        <li>User-friendly interface for effortless navigation</li>
        <li>Collaboration tools for team-based projects</li>
        <li>Notification system to stay updated on task progress</li>
      </ul>
      <p className="text-lg">
        Start organizing your tasks today with ClickDown and experience a more
        efficient and productive workflow!
      </p>
    </div>
  );
};

export default About;
