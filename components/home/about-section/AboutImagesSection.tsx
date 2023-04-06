import { Flex, Image, useColorMode } from "@chakra-ui/react";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const imagesData = ["/about_2.webp", "/about_3.webp"];

const AboutImagesSection = () => {
  const { scrollY } = useViewportScroll();
  const { colorMode } = useColorMode();
  const y1 = useTransform(scrollY, [0, 800], [0, 100]);
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const variants = {
    visible: { opacity: 1, y: 200 },
    hidden: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ y: y1, x: 0 }}
    >
      <Flex direction={"column"} alignItems="center">
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 2, ease: "easeOut" }}
          ref={ref}
        >
          <Image
            flex="1"
            src={colorMode === "dark" ? "/about_1.webp" : "/about_1_black.webp"}
            maxW={["100%"]}
            maxH={["100%"]}
            alt=""
          />
        </motion.div>
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 4, ease: "easeOut" }}
          ref={ref}
        >
          <Image
            flex="1"
            src={colorMode === "dark" ? "/about_2.webp" : "/about_2_black.webp"}
            maxW={["100%"]}
            maxH={["100%"]}
            mt="-36"
            alt=""
          />
        </motion.div>
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 6, ease: "easeOut" }}
          ref={ref}
        >
          <Image
            flex="1"
            src={colorMode === "dark" ? "/about_3.webp" : "/about_3_black.webp"}
            maxW={["100%"]}
            maxH={["100%"]}
            mt="-36"
            alt=""
          />
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default AboutImagesSection;
