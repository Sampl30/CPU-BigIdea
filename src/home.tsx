import { motion } from "framer-motion";
import "./home.css";
import InteractiveMOSFET from './InteractiveMOSFET';


export default function Home() {
  const sections = [
    {
      title: "What is a CPU?",
      text: "A Central Processing Unit (CPU) is the primary component of a computer. It is responsible for executing instructions from a program, and is often referred to as the \"brain\" of the computer. A CPU performs arithmetic operations, logical decisions, and controls the flow of data throughout the system. Every action a computer takes ultimately depends on instructions processed by the CPU. Modern CPUs can execute billions of instructions per second, allowing complex software to run smoothly and efficiently.",
      image: "/Cpu-image.jpg",
      reverse: true,
    },
    {
      title: "What is a CPU Made Of?",
      text: "A CPU is comprised of millions to billions of transistors and wires arranged into logic gates, registers, caches and control circuitry. Early computers used vacuum tubes to control electrical signals, but transistors replaced them because they are smaller, faster,  more efficient and more reliable.  There are two major families of transistors: Bipolar Junction Transistors (BJTs) and Field Effect Transistors (FETs). While BJTs were historically important, modern CPUs rely on Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs) due to their efficiency, scalability and low power consumption. The picture to the right shows a silicon wafer that is full of CPUs ready to be cut and sold.",
      image: "/Cpu-wafer.jpg",
      reverse: false,
    },
    {
      title: "What are MOSFETs and How Do They Work?",
      text: "MOSFETs are like a water valve.  Imagine a pipe with water flowing through it: the source is where the water originates, and the drain is where the water is directed. The gate is like the handle on the valve, because when you turn it, water flows from the source to the drain. In a MOSFET, instead of water, it's electrons (or the lack of them) flowing through a semiconductor. To be more specific, when voltage is applied to the gate, it creates an electric field across the insulating/oxide layer. This electric field attracts charge into the channel, forming a conductive path between source and drain. The stronger the gate voltage, the more carriers accumulate, and the lower the resistance of the channel, allowing more current to flow. ",
      image: "/mosfet-circuit.png",
      reverse: true,
    },
    {
      title: "Photolithography",
      text:"Photolithography is the main manufacturing process used to create the microscopic patterns that form transistors inside modern CPUs. In this process, a silicon wafer is coated with a light sensitive chemical called a photoresist, and a patterned mask is place above it. When light shines above the wafer, the mask blocks the incoming light, and the photoresist undergoes a chemical change, which transfers the pattern onto the silicon below. This patented layer can then be developed, etched, and cleaned. Because advanced CPUs are extremely complex, a single wafer may contain 10 to 100 layers, each requiring photolithography to be repeated with extreme precision. Similarly, as transistor features shrink, light diffraction causes patterns to blue, making the whole process more inaccurate. The Rayleigh equation shows that the smallest printable feature depends on the light's wavelength and the numerical aperture of the optics which is why engineers developed extreme ultraviolet (UV) lithography, which uses much shorter wavelengths.",
      image: "/photolithography.png",
      reverse: false,
    },
    {
      title: "Moore's Law and Its Impact",
      text: "In 1965, an engineer at intel, Gordon Moore, observed that the number of transistors on an integrated circuit tended to double roughly every two years. This trend became known as Moore's Law. This pattern accurately predicted decade of improvements in computing power, cost efficiency, and energy performance. As transistors became smaller, CPUs grew faster and cheaper without requiring major changes in software - it was free progress. Moore's Law functioned as a  guiding trend for the semiconductor industry rather than a true law of physics, but it shaped modern technology more than almost any other principle.",
      image: "/Moores-law.png",
      reverse: true,
    },
    {
      title: "Is Moore's Law Dead?",
      text: "In recent years, Moore's Law has begun to break down due to fundamental physical limits. Modern transistors are only a few nanometers wide(around 12 silicon atoms), which is approaching atomic limit. This means that effects like quantum tunnelling are a serious issue and cause problems such as current leakage and unreliable behaviour. Manufacturing smaller transistors has also become dramatically more expensive and slower, while also increasing heat density and energy consumption. These challenges mean that shrinking transistors no longer guarantee the performance gains they once did. As a result, the predicable two year doubling cycle has effectively ended.",
      interactive: "mosfet",
      reverse: false,
    },
    {
      title: "What Does This Mean for the Future of Computing?",
      text: "With the end of Moore's Law, the era of \"free\" performance improvements is over. Future gains in computing power will rely less on smaller transistors and more on creative engineering, including processor architecture, parallelism, specialized hardware, and better software optimization. While new technologies like quantum computing have newer and faster use cases, they are not direct replacements for traditional CPUs and excel only at specific tasks. ",
      image: "/Future-computing.jpg",
      reverse: true,
    },
    {
      title: "Related Careers",
      text: "Modern CPUs are the result of work from a wide range of science and engineering careers, each requiring specialized education and training. Computer engineers and electrical engineers who design processor architectures and transistor layouts typically have university degrees with graduate studies in microelectronics or computer architecture. Semiconductor physicists and material scientists study how electrons behave in transistors and develop new materials for faster and more efficient chips. These careers usually require advanced degrees in physics material science, or nanotechnology. Photonics and lithography engineers work with technologies such as extreme ultraviolet (EUV) photolithography to manufacture CPUs. Such careers require backgrounds in physics, optics, and engineering. An example of some of the work Canadians have done in these fields is the National Research Council of Canada (NRC), in collaboration with McGill university have come up with a solution to use machine learning to lower the amount of imperfections on photolithography machines' optical performance. ",
      image: "/photolith-engineer.jpg",
      reverse: false,
    },
  ];

  return (
    <div className="page">
      <div className="title-area">
        <h1 className="page-title">CPUs & Transistors</h1>
      </div>

      <div className="sections">
      {sections.map((section, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`section ${section.reverse ? "reverse" : ""}`}
      >
        {section.image && (
          <div
            className={`image-wrapper ${section.reverse ? "order-last" : ""}`}
            style={{
              display: "flex",
              justifyContent: "center", // centers image within its half
              alignItems: "center",
            }}
          >
            <img
              src={section.image}
              alt={section.title}
              className="image-box"
              style={{
                width:
                  section.title === "Moore's Law and Its Impact"
                    ? "600px" 
                    : section.title === "What Does This Mean for the Future of Computing?"
                    ? "600px"
                    :"100%",
                maxWidth:
                  section.title === "Moore's Law and Its Impact"
                    ? "520px" // limit max width
                    : section.title === "What Does This Mean for the Future of Computing?"
                    ? "510px"
                    : section.title === "What are MOSFETs and How Do They Work?"
                    ? "500px"
                    :"460px",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        {section.interactive === "mosfet" && (
          <div style ={{ width: "100%", display: "flex", justifyContent: "right"}}>
            <InteractiveMOSFET />
          </div>
        )}
        <div
          className="text-area"
          style={{
            textAlign: "left",
          }}
        >
          <h2 className="section-title">
            {section.title}
          </h2>
          <div className="text-box">
            <p>{section.text}</p>
          </div>
        </div>
      </motion.div>
    ))}

      </div>

      <footer className="footer">
        <p className="footer-left">Samuel Cook</p>
        <p className="footer-right">cook3108@wrdsb.ca</p>
      </footer>
    </div>
  );
}



              // style={{
              //   width:
              //     section.title === "Moore's Law and Its Impact"
              //       ? "600px" 
              //       : section.title === "What Does This Mean for the Future of Computing?"
              //       ? "600px"
              //       :"100%",
              //   maxWidth:
              //     section.title === "Moore's Law and Its Impact"
              //       ? "520px" // limit max width
              //       : section.title === "What Does This Mean for the Future of Computing?"
              //       ? "510px"
              //       : section.title === "What are MOSFETs and How Do They Work?"
              //       ? "500px"
              //       :"460px",
              //   height: "auto",
              //   objectFit: "cover",