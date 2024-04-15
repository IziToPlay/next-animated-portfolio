"use client"

export default function myImageLoader({ src, width , quality }){
    if(src.startsWith("https://res.cloudinary.com")) return src
    return `https://joselovonportfolio.com/${src}?w=${width}&q=${quality || 75}`
}