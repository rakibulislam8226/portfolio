import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-25 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-4xl sml:text-5xl font-semibold text-center">
        Get In Touch
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        I am always happy to talk about backend architecture, scaling headaches,
        or an idea you are trying to get off the ground. Whether it is a role, a
        project, or just a question &mdash; my inbox is open and I will get back
        to you.
      </p>

      <a href="mailto:rakibulislam8226@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
      <p className="text-sm text-textDark mt-2">
        Dhaka, Bangladesh &middot;{" "}
        <a
          href="tel:+8801776068226"
          className="hover:text-textGreen duration-300"
        >
          +880 1776 068226
        </a>
      </p>
    </section>
  );
};

export default Contact;
