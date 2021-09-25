import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Let's Work Together
          </h1>

          <p className="leading-relaxed mb-5">
            Contact me by <a href="mailto:jmbailey816@gmail.com">email, </a>
            <a
              href="https://www.linkedin.com/in/jason-bailey-80b88b16a/"
              target="_blank"
            >
              connect with me on LinkedIn,{" "}
            </a>
            <a href="https://github.com/Jason-M-Bailey" target="_blank">
              check out my work on Github{" "}
            </a>
            or give me a call at 203.247.2142
          </p>
        </div>
      </div>
    </section>
  );
}
