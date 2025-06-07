import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <section>
      <Header />
      <h1 className="text-4xl text-center font-bold">
        Welcome to the about section
      </h1>
      <div className="flex flex-col items-center justify-center gap-2 flex-wrap mt-4">
        <Button size="w-sm" shape="rounded-sm" title="small"></Button>
        <Button size="w-md" shape="rounded-md" title="medium"></Button>
        <Button size="w-lg" shape="rounded-full" title="large"></Button>
      </div>
    </section>
  );
};

export default About;
