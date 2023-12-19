import React from "react";

const About = () => {
  const ex = [
    {
      id: 1,
      head: "FREELANCE GRAPHIC DESIGNER",
      body: "Designed original graphics for use in social media campaigns Maintained up-to-date knowledge in new tools, technologies, and best practices to ensure work stayed current and innovative. Delivered banners and signage for conferences and trade shows.",
    },
    {
      id: 2,
      head: "VOLUNTEER | RESALA MEDICAL MISSION | SUMMER 2022",
      body: "Assisted with medical examinations and treatments for underserved communities.Educated patients on preventative health measures and provided resources for follow-up care. Managed patient records and ensured confidentiality of sensitive information. Demonstrated teamwork and professionalism in a fast-paced and challenging environment.",
    },

    {
      id: 3,
      head: "EXTRACURRICULAR ACTIVITIES | UNIVERSITY CLUBS | 2019-2023",
      body: "Participated in problem solving and developed skills in coding ,problem solving and teamwork. Boxing Club Member and Red Pales Winner | Developed discipline, focus, and physical fitness through training and competition in boxing.",
    },
  ];
  const skill = [
    "Reactjs",
    " NextJs",
    " thereJs",
    " NodeJs",
    "javaScript",
    "Css",
    "HTML",
    " Bilingual in Arabic and English",
    "Microsoft Office Suite",
    "Git and Agile methodologies",
    "Adaptive and quick learner",
  ];
  return (
    <section className="al h-full mt-28 ">
      <h2 className="text-main text-3xl mb-6 font-bold uppercase">
        Ahmed Sameer Abdon
      </h2>
      <div className="">
        <ul>
          {ex.map((el) => (
            <li key={el.id} className="mb-5">
              <h3 className="font-semibold text-pink-500">{el.head}</h3>
              <p className="text-sm text-pink-100 w-96 ">{el.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className="text-second" />
      <div>
        <h3 className=" text-pink-500 mb-5 text-xl">Skills & Abilities</h3>
        <ul className="flex flex-wrap gap-5">
          {skill.map((el) => (
            <li key={el.id} className="mb-5">
              <h1 className="">{el}</h1>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
