"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import WhyCard from './WhyCard';
import { slideInFromLeft } from '@/utils/motion';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const WhyCardProvider = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <div>
            <motion.div
                ref={ref}
                initial="hidden"
                variants={slideInFromLeft(0.5)}
                animate={inView ? "visible" : "hidden"}
                // custom={index}
                transition={{ delay: 1 * animationDelay }}
            >
                <WhyCard
                    title="Intuitive Task Management"
                    description="Effortlessly organize your day with our user-friendly task management system. Prioritize, categorize, and stay on top of your to-do list like never before."
                />
            </motion.div>
            <motion.div
                ref={ref}
                initial="hidden"
                variants={slideInFromLeft(0.8)}
                animate={inView ? "visible" : "hidden"}
                // custom={index}
                transition={{ delay: 2 * animationDelay }}
            >
                <WhyCard
                    title="Collaborative Workspace"
                    description="Enhance team collaboration with our collaborative workspace feature. Share ideas, assign tasks, and track progress seamlessly within a centralized platform."
                />
            </motion.div>
            <motion.div
                ref={ref}
                initial="hidden"
                variants={slideInFromLeft(1.1)}
                animate={inView ? "visible" : "hidden"}
                // custom={index}
                transition={{ delay: 3 * animationDelay }}
            >
                <WhyCard
                    title="Time Tracking and Analytics"
                    description="Optimize your time with our powerful time-tracking tools. Identify productivity patterns, set realistic goals, and achieve more in less time."
                />
            </motion.div>
            <motion.div
                ref={ref}
                initial="hidden"
                variants={slideInFromLeft(1.4)}
                animate={inView ? "visible" : "hidden"}
                // custom={index}
                transition={{ delay: 4 * animationDelay }}
            >
                <WhyCard
                    title="Mobile Accessibility"
                    description="Stay productive on the go. Our Rewave is fully accessible on mobile devices, ensuring you're always in control, no matter where you are."
                />
            </motion.div>
        </div>
    )
}

export default WhyCardProvider