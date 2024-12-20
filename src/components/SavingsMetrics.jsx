"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function SavingsMetrics() {
  const [showSecondary, setShowSecondary] = useState(true)
  const [progress, setProgress] = useState(0)
  const [progress1, setProgress1] = useState(13)
  const [progress2, setProgress2] = useState(40)
  const [progress3, setProgress3] = useState(80)


  const handleMainClick = () => {
  }

  const MainCircularProgress = ({ size, progress, strokeWidth, children }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (progress / 100) * circumference

    return (
      <motion.div 
        className="relative cursor-pointer" 
        style={{ width: size, height: size }}
        onClick={handleMainClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0">
            

           <Image src="/background.gif" width={100} height={100} className="w-full h-full opacity-70"/>

          </div>
          <svg width={size} height={size} className="transform -rotate-90 relative z-10">
            <defs>
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4B7BFF" />
                <stop offset="100%" stopColor="#2962FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  const SecondaryCircularProgress = ({ size, progress, strokeWidth, children, topText, bottomText, index }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (progress / 100) * circumference

    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
        className="relative"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2a2a2a"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 * (index + 1) }}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB547" />
              <stop offset="100%" stopColor="#FF7547" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-white text-sm mb-3 leading-tight">
            {topText.includes("Below Median") ? (
              <>
                Below Median<br />Discount for
              </>
            ) : (
              topText
            )}
          </div>
          {children}
          <div className="text-white text-sm mt-3">{bottomText}</div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <motion.div 
          className="flex justify-center items-center"
          animate={{ marginBottom: "1rem" }}
          transition={{ duration: 0.5 }}
        >
          <MainCircularProgress size={450} progress={progress} strokeWidth={30}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-orange-400 font-bold"
              >
                <span className="text-6xl">Contract <br/> Analysis</span>
              </motion.div>
            </motion.div>
          </MainCircularProgress>
        </motion.div>

        {/* <AnimatePresence>
          {showSecondary && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-x-16"
            >
              {[
                {
                  progress: progress1,
                  topText: "Can Negotiate",
                  bottomText: "Additional Discount",
                  content: `$13%`
                },
                {
                  progress: progress2,
                  topText: "Can Save",
                  bottomText: "Annually",
                  content: "$40K"
                },
                {
                  progress: progress3,
                  topText: "Below Median Discount for",
                  bottomText: "Level Services",
                  content: "8"
                }
              ].map((item, index) => (
                <SecondaryCircularProgress
                  key={index}
                  size={220}
                  progress={item.progress}
                  strokeWidth={16}
                  topText={item.topText}
                  bottomText={item.bottomText}
                  index={index}
                >
                  <div className="text-[#FF7547] text-4xl font-bold">
                    {item.content}
                  </div>
                </SecondaryCircularProgress>
              ))}
            </motion.div>
          )}
        </AnimatePresence> */}
      </motion.div>
    </div>
  )
}