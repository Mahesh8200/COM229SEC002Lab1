const home = () => {
  return (
    <section className="flex justify-between items-center lg:flex-row p-12 m-12 ssm:flex-col ssm:space-y-10">
      <div className="ssm:w-fit">
        <p className="text-xl">
          Name: <b>Mahesh Makwana</b>
          <br />
        </p>
        <p className="mt-5 text-l">
          <p>This is where you can learn more about me and my work.</p>
          <p>
            My mission is to deliver high-quality projects that exceed expectations.
          </p>
        </p>

        <div className="ssm:w-fit">
          <h1 className="mt-10 text-xl">My Mission Statement</h1>
          <hr />
          <p>
            As a software engineer, my mission is to leverage my technical
            expertise and passion for innovation to create reliable and scalable
            solutions that empower businesses and enrich user experiences. I am
            committed to delivering high-quality software through collaborative
            and iterative development processes, embracing challenges as
            opportunities for growth. With a focus on continuous learning and
            staying at the forefront of technological advancements, I strive to
            contribute to projects that make a meaningful impact on the world.
            Through ethical and sustainable practices, I aim to be a catalyst
            for positive change, fostering a culture of excellence,
            adaptability, and creativity within the software development
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default home;
