import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const home = () => {
  return (
    <section>
      <div>
        <Header />
        <div>
          <Card
            title="Next.js Setup and Basics"
            content="This is an introduction to next js setup and basic configurations. 
            The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs."
          />
        </div>
      </div>
    </section>
  );
};

export default home;
