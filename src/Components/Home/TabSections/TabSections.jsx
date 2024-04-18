import { useState } from "react";

const TabSections = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="container-fluid pb-28 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="lg:text-[58px] text-4xl leading-tight text-white">
          Powering cybersecurity intelligence with{" "}
          <span className="light-blue-gradient block">
            Group-IB Unified Risk Platform
          </span>
        </h2>
        <p className="text-white max-md:text-base text-lg my-12">
          Understands the threat actors targeting your organization and
          optimizes your defenses against them. With intelligence at its core,
          Group-IB’s cybersecurity platform effectively prevents breaches, fraud
          and other cyber threats
        </p>
      </div>
      <div className="text-white">
        <div className="container">
          {/* Tab button */}
          <div className="flex flex-wrap space-x-4 justify-center">
            <button
              className={`px-4 py-3 text-2xl max font-medium  rounded-md ${
                activeTab === "tab1"
                  ? "bg-[#191919] text-white"
                  : "bg-transparent"
              }`}
              onClick={() => openTab("tab1")}
            >
              Products
            </button>
            <button
              className={`px-4 py-3 text-2xl font-medium  rounded-md ${
                activeTab === "tab2"
                  ? "bg-[#191919]  text-white"
                  : "bg-transparent"
              }`}
              onClick={() => openTab("tab2")}
            >
              Services
            </button>
            <button
              className={`px-4 py-3 text-2xl font-medium  rounded-md ${
                activeTab === "tab3"
                  ? "bg-[#191919]  text-white"
                  : "bg-transparent"
              }`}
              onClick={() => openTab("tab3")}
            >
              Solutions
            </button>
          </div>
          {/* Tab content */}
          <div className="mt-4">
            {/* Tab one content */}
            <div className={`${activeTab === "tab1" ? "" : "hidden"}`}>
              <div className="grid grid-cols-6 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-2 mt-12">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="border h-[264px] border-solid transition-all duration-500 border-white rounded-lg overflow-hidden group cursor-pointer hover:bg-[#292929] hover:border-[#3d3d3d]"
                  >
                    <div className="ml-3">
                      <img src="/images/ti.png" alt="" />
                    </div>
                    <div className="px-2 h-0 translate-y-20 group-hover:translate-y-0 group-hover:max-h-12 group-hover:h-full transition duration-500">
                      <h3 className="my-3 font-medium text-xl">
                        Protect your brand
                      </h3>
                      <p className="text-[#a3a3a3]">Threat Intelligence</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Tab two content */}
            <div className={`${activeTab === "tab2" ? "" : "hidden"}`}>
              <div className="border-[#3d3d3d] border border-solid rounded-lg p-10 mt-12">
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20">
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      Audit & Consulting
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>Penetration Testing</li>
                      <li>Vulnerability Assessment</li>
                      <li>Risk Assessment</li>
                    </ul>
                  </div>
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      Education & Training
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>Training for Technical Specialists</li>
                      <li>Cybersecurity Awareness Workshop</li>
                      <li>Incident Response Simulation Game</li>
                      <li>All Training Programs</li>
                    </ul>
                  </div>
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      Digital Forensics & Incident Response
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>Incident Response</li>
                      <li>Incident Response Retainer</li>
                      <li>Incident Response Readiness Assessment</li>
                      <li>Compromise Assessment</li>
                      <li>Digital Forensics</li>
                    </ul>
                  </div>
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      Hi-Tech Crime Investigation
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>Cyber Investigation</li>
                      <li>Investigation Subscription</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Tab content 3 */}

            <div className={`${activeTab === "tab3" ? "" : "hidden"}`}>
              <div className="border-[#3d3d3d] border border-solid rounded-lg p-10 mt-12">
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-20">
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      By Use Case
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>Ransomware Protection</li>
                      <li>Phishing and Scam Protection</li>
                      <li>Bot Protection</li>
                      <li>Dark Web and Deep Web Monitoring</li>
                      <li>Data Leak Detection</li>
                      <li>Anti-Piracy</li>
                      <li>Building CTI Program</li>
                    </ul>
                  </div>
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      By Role
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>CISO</li>
                      <li>Head of Fraud</li>
                      <li>Head of Brand Protection</li>
                      <li>Head of Threat Intelligence</li>
                    </ul>
                  </div>
                  {/* list items */}
                  <div>
                    <h2 className="text-3xl font-medium light-blue-gradient mb-12">
                      By Industry
                    </h2>
                    <ul className="text-lg flex flex-col gap-4 text-[#a3a3a3]">
                      <li>Law Enforcement</li>
                      <li>Regulatory Compliance</li>
                      <li>Retail and e-Commerce</li>
                      <li>Crypto Industry</li>
                      <li>Governments</li>
                      <li>Telecom and Service Providers</li>
                      <li>Online Gambling and Betting</li>
                      <li>Financial Services</li>
                      <li>Insurance Sector</li>
                      <li>OT/ICS Cybersecurity</li>
                      <li>Manufacturing Industry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <p className="text-[#a3a3a3] text-lg  ">
              Learn more about Group-IB{" "}
              <a className="text-white font-medium" href="">
                Unified Risk Platform
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSections;
