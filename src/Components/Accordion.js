import { useState } from "react";

function Accordion() {
  const faqs = [
    {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-4">
      {faqs.map((el, index) => (
        <AccordionItem key={index} title={el.title} text={el.text} />
      ))}
    </div>
  );
}

function AccordionItem({ title, text }) {
  const [show, setShow] = useState(false);

  function onToggle() {
    setShow(!show);
  }

  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">{title}</h3>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full"
          onClick={onToggle}
        >
          {show ? "-" : "+"}
        </button>
      </div>
      {show && <p className="mt-2 text-gray-700">{text}</p>}
    </div>
  );
}

export default Accordion;
