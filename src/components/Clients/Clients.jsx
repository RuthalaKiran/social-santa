import React, { useEffect, useRef, useState } from "react";
import "./Clients.css";
import { motion } from "framer-motion";
import { assets, clientsimages } from "../../assets/assets";
import ClientImges from "./ClientImges";

const Clients = () => {
  const [activeClientId, setActiveClientId] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setActiveClientId((prev) => (prev + 1) % clientsimages.length);
    }, 3000);
  }, []);

  return (
    <div className="clients-section">
      <div className="client-section-titles">
        <div className="client-section-title">
          <p className="trusted-by" style={{ overflow: "hidden" }}>
            <motion.p
              initial={{ y: "40px", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.01,
                stiffness: 50,
              }}
              viewport={{ once: true }}
            >
              Trusted{" "}
              <motion.span
                initial={{ y: "40px", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.02,
                  stiffness: 50,
                }}
                viewport={{ once: true }}
                style={{ display: "inline-block" }}
              >
                by
              </motion.span>
            </motion.p>
          </p>
          <p style={{ overflow: "hidden" }}>
            <motion.p
              initial={{ y: "40px", opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.03,
                stiffness: 50,
              }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              Awesome Clients
            </motion.p>
          </p>
        </div>
        <div className="client-section-subtitle">
          Not to brag, but a lot of hot startups and market leaders reach out &
          touch base to commission our work.
        </div>
      </div>
      <div className="clients-section-clients">
        <div className="client-images-container">
          {clientsimages.map((client, index) => {
            return (
              <div
                key={index}
                className={`client ${
                  client.clientId === activeClientId ? "client-active" : ""
                }`}
              >
                <ClientImges img={client.clientImg} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
