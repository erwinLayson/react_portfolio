import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, 
  SiCodeigniter, 
  SiTailwindcss, 
  SiBootstrap } from "react-icons/si";

export function About() {
    return (
        <div className="flex bg-gray-900 min-h-screen px-4 py-8 text-white flex-col gap-10 shadow-lg shadow-green-500/50 rounded-lg">
            {/* Title */}
            <h1 className="italic font-bold text-3xl sm:text-5xl text-center">
                About Me
            </h1>

            {/* Main Content */}
            <main className="grid sm:grid-cols-2 gap-8 items-start">
                {/* Left Column */}
                <section className="flex flex-col gap-6">
                    {/* Introduction */}
                    <div
                        id="introduction"
                        className="leading-relaxed p-4 shadow-lg shadow-green-500/50 rounded-lg text-center sm:text-left"
                    >
                        <p>
                            Hi!{" "}
                            <span className="text-green-400 font-bold text-2xl italic">
                                I'm Erwin B. Layson
                            </span>
                            , a passionate IT student and aspiring web developer who
                            enjoys building modern, user-friendly websites. I specialize
                            in React, JavaScript, and front-end development.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col gap-4 p-4 rounded-lg shadow-lg shadow-green-500/50 text-center sm:text-left">
                        <h2 className="font-bold text-2xl sm:text-3xl">
                            Skills
                        </h2>
                        <p>
                            I specialize in creating responsive web applications using
                            the MERN stack. I enjoy working on backend logic and API
                            calls, aiming to become a successful web developer. I’m still
                            improving my design skills but can handle Express and Node
                            effectively.
                        </p>
                    </div>
                </section>

                {/* Right Column */}
                <section className="flex justify-center items-center sm:justify-start p-4 shadow-lg shadow-green-500/50 rounded-lg bg-gray-800 text-center gap-5 flex-wrap">
                    <h1 className="text-3xl text-white font-bold">
                        Languages
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiHtml5 title="HTML5" color="#dc740dff" className="text-4xl icons"/>
                            <span className="text-sm">HTML</span>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiCss3 title="CSS3" color="#3250ebff" className="text-4xl icons"/>
                            <span className="text-sm">CSS</span>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiJavascript title="JavaScript" color="#e5f106ff" className="text-4xl icons"/>
                            <span className="text-sm">JavaScript</span>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiReact title="React" color="#61DBFB" className="text-4xl icons"/>
                            <span className="text-sm">React.js</span>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiNodedotjs title="Node" color="#08a300ff" className="text-4xl icons"/>
                            <span className="text-sm">Node.js</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiTailwindcss title="Node" color="#0e83d7ff" className="text-4xl icons"/>
                            <span className="text-sm">Tailwind Css</span>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiExpress title="Node" color="#c50505ff" className="text-4xl icons"/>
                            <span className="text-sm">Express Js</span>
                        </div>

                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiCodeigniter title="Node" color="#c50505ff" className="icons text-4xl"/>
                            <span className="text-sm">CodeIgniter 4</span>
                        </div>
                        <div className="flex justify-center items-center gap-2 flex-col">
                            <SiBootstrap title="Node" color="#067ab8ff" className="icons text-4xl"/>
                            <span className="text-sm">Bootstrap</span>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}
