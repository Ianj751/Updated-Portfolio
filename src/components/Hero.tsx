"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ChangingFontText from "./ChangingFont";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-50 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ChangingFontText />
          </motion.h1>
          <motion.p
            // text-muted-foreground
            className="mt-6 text-2xl leading-8 text-[#8c8e8b] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software Engineer, Computer Science Student at The University of
            North Texas, and Lifelong Learner
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="secondary"
              className="apple-button text-white bg-emerald-800"
            >
              <a href="/IanJackson_Resume.pdf" download="IanJackson_Resume.pdf">
                Download My Resume
              </a>
            </Button>
            {/* <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/IanJacksonFace.jpg"
              alt="My Face"
              width={800}
              height={800}
              className="w-[500px] rounded-2xl shadow-xl ring-3 ring-gray-900/10 backdrop-blur-sm "
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
