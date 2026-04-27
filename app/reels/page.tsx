// "use client";

// import { useState } from "react";

// const dailyIdeas = [
//   {
//     title: "POV Reel",
//     hook: "POV: You stopped waiting for motivation and started showing up.",
//     idea: "Show a calm morning setup, laptop, coffee, and a soft productivity vibe.",
//     caption: "Small steps daily create big results.",
//     hashtags: "#reelsideas #contentcreator #kanova #viralreels",
//   },
//   {
//     title: "Before vs After",
//     hook: "Before using AI prompts vs after using Kanova.",
//     idea: "Split screen: confused creator on one side, confident creator with ideas on the other.",
//     caption: "Never run out of content ideas again.",
//     hashtags: "#aiprompts #creatorlife #ugccreator #kanova",
//   },
//   {
//     title: "Relatable Creator Reel",
//     hook: "Me opening Instagram to post… and forgetting my idea.",
//     idea: "Use funny facial expressions, then show Kanova giving instant reel ideas.",
//     caption: "Content block? Kanova has your back.",
//     hashtags: "#contentideas #reelsdaily #instagramgrowth #kanova",
//   },
// ];

// export default function ReelsPage() {
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const handleCopy = async (idea: (typeof dailyIdeas)[0], index: number) => {
//     const text = `
// ${idea.title}

// Hook:
// ${idea.hook}

// Idea:
// ${idea.idea}

// Caption:
// ${idea.caption}

// Hashtags:
// ${idea.hashtags}
// `;

//     await navigator.clipboard.writeText(text);
//     setCopiedIndex(index);

//     setTimeout(() => {
//       setCopiedIndex(null);
//     }, 1600);
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#fff7f2] px-4 py-10 text-[#25120b] sm:px-6 lg:px-8">
//       {/* Animated Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-pink-300/30 blur-3xl" />
//         <div className="absolute right-10 top-40 h-32 w-32 animate-bounce rounded-full bg-orange-300/30 blur-3xl" />
//         <div className="absolute bottom-20 left-1/3 h-40 w-40 animate-pulse rounded-full bg-yellow-300/30 blur-3xl" />

//         <span className="absolute left-[8%] top-[18%] animate-float text-3xl">🎬</span>
//         <span className="absolute right-[12%] top-[24%] animate-float-delay text-3xl">✨</span>
//         <span className="absolute left-[18%] bottom-[22%] animate-float text-3xl">🔥</span>
//         <span className="absolute right-[20%] bottom-[18%] animate-float-delay text-3xl">📱</span>
//       </div>

//       {/* Hero */}
//       <section className="relative mx-auto max-w-6xl text-center">
//         <div className="mx-auto mb-5 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
//           🔥 New Daily Feature
//         </div>

//         <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
//           Daily Reel Ideas for Creators
//         </h1>

//         <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6b4b3c] sm:text-lg">
//           Get fresh reel hooks, captions, content ideas, and hashtags every day.
//           No more content block. No more blank screen.
//         </p>

//         <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <a
//             href="#today-ideas"
//             className="rounded-full bg-[#ff5a1f] px-7 py-3 font-semibold text-white shadow-lg shadow-orange-300 transition hover:scale-105 hover:bg-[#e94c16]"
//           >
//             Explore Today’s Ideas
//           </a>

//           <div className="rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-medium shadow-sm">
//             New ideas drop daily ✨
//           </div>
//         </div>
//       </section>

//       {/* Feature Cards */}
//       <section className="relative mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-3">
//         {[
//           ["🎯", "Strong Hooks", "Start your reels with attention-grabbing opening lines."],
//           ["📸", "Scene Ideas", "Know exactly what to shoot, show, and create."],
//           ["🚀", "Growth Ready", "Captions and hashtags made for Instagram creators."],
//         ].map(([icon, title, desc]) => (
//           <div
//             key={title}
//             className="rounded-3xl border border-orange-100 bg-white/75 p-6 shadow-xl shadow-orange-100 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
//           >
//             <div className="mb-4 text-4xl">{icon}</div>
//             <h3 className="text-xl font-bold">{title}</h3>
//             <p className="mt-2 text-sm leading-6 text-[#725244]">{desc}</p>
//           </div>
//         ))}
//       </section>

//       {/* Daily Ideas */}
//       <section id="today-ideas" className="relative mx-auto mt-20 max-w-6xl">
//         <div className="mb-8 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
//             Today’s Content Drop
//           </p>
//           <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
//             3 Reel Ideas You Can Post Today
//           </h2>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-3">
//           {dailyIdeas.map((item, index) => (
//             <div
//               key={item.title}
//               className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100 transition hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-200/40 blur-2xl transition group-hover:scale-150" />

//               <div className="relative">
//                 <div className="mb-5 flex items-center justify-between">
//                   <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
//                     Idea {index + 1}
//                   </span>
//                   <span className="text-2xl">🎥</span>
//                 </div>

//                 <h3 className="text-2xl font-extrabold">{item.title}</h3>

//                 <div className="mt-5 space-y-4 text-sm leading-6">
//                   <div>
//                     <p className="font-bold text-orange-600">Hook</p>
//                     <p className="text-[#604236]">{item.hook}</p>
//                   </div>

//                   <div>
//                     <p className="font-bold text-orange-600">Reel Idea</p>
//                     <p className="text-[#604236]">{item.idea}</p>
//                   </div>

//                   <div>
//                     <p className="font-bold text-orange-600">Caption</p>
//                     <p className="text-[#604236]">{item.caption}</p>
//                   </div>

//                   <div>
//                     <p className="font-bold text-orange-600">Hashtags</p>
//                     <p className="text-[#604236]">{item.hashtags}</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleCopy(item, index)}
//                   className="mt-6 w-full rounded-full bg-[#25120b] px-5 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#ff5a1f]"
//                 >
//                   {copiedIndex === index ? "Copied ✨" : "Copy Reel Idea"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="relative mx-auto mt-20 max-w-5xl rounded-[2rem] bg-[#25120b] px-6 py-12 text-center text-white shadow-2xl">
//         <h2 className="text-3xl font-extrabold sm:text-4xl">
//           Never run out of reel ideas again.
//         </h2>
//         <p className="mx-auto mt-4 max-w-2xl text-white/75">
//           Kanova helps creators generate hooks, captions, and AI-powered content
//           ideas in seconds.
//         </p>
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-18px) rotate(8deg);
//           }
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-float-delay {
//           animation: float 5s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//       `}</style>
//     </main>
//   );
// }


// new new new new new 
// "use client";

// import { useState } from "react";

// type ReelIdea = {
//   title: string;
//   hook: string;
//   idea: string;
//   caption: string;
//   hashtags: string;
// };

// const defaultIdeas: ReelIdea[] = [
//   {
//     title: "POV Reel",
//     hook: "POV: You stopped waiting for motivation and started showing up.",
//     idea: "Show your morning setup, laptop, coffee, and a clean productivity vibe.",
//     caption: "Small steps daily create big results.",
//     hashtags: "#reelsideas #contentcreator #kanova #viralreels",
//   },
//   {
//     title: "Before vs After",
//     hook: "Before using AI prompts vs after using Kanova.",
//     idea: "Show creator block first, then show instant reel ideas from Kanova.",
//     caption: "Never run out of content ideas again.",
//     hashtags: "#aiprompts #creatorlife #ugccreator #kanova",
//   },
//   {
//     title: "Relatable Creator Reel",
//     hook: "Me opening Instagram to post… and forgetting my idea.",
//     idea: "Use a funny expression, then show Kanova giving fresh ideas.",
//     caption: "Content block? Kanova has your back.",
//     hashtags: "#contentideas #reelsdaily #instagramgrowth #kanova",
//   },
// ];

// export default function ReelsPage() {
//   const [niche, setNiche] = useState("");
//   const [vibe, setVibe] = useState("viral, modern, relatable");
//   const [ideas, setIdeas] = useState<ReelIdea[]>(defaultIdeas);
//   const [loading, setLoading] = useState(false);
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
//   const [error, setError] = useState("");

//   const generateIdeas = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           type: "reels",
//           niche,
//           vibe,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.ok) {
//         throw new Error(data.error || "Something went wrong");
//       }

//       setIdeas(data.ideas);
//     } catch (err: any) {
//       setError(err.message || "Failed to generate ideas");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCopy = async (idea: ReelIdea, index: number) => {
//     const text = `${idea.title}

// Hook:
// ${idea.hook}

// Idea:
// ${idea.idea}

// Caption:
// ${idea.caption}

// Hashtags:
// ${idea.hashtags}`;

//     await navigator.clipboard.writeText(text);
//     setCopiedIndex(index);

//     setTimeout(() => setCopiedIndex(null), 1500);
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#fff7f2] px-4 py-10 text-[#25120b] sm:px-6 lg:px-8">
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-pink-300/30 blur-3xl" />
//         <div className="absolute right-10 top-40 h-32 w-32 animate-bounce rounded-full bg-orange-300/30 blur-3xl" />
//         <div className="absolute bottom-20 left-1/3 h-40 w-40 animate-pulse rounded-full bg-yellow-300/30 blur-3xl" />

//         <span className="absolute left-[8%] top-[18%] animate-float text-3xl">
//           🎬
//         </span>
//         <span className="absolute right-[12%] top-[24%] animate-float-delay text-3xl">
//           ✨
//         </span>
//         <span className="absolute left-[18%] bottom-[22%] animate-float text-3xl">
//           🔥
//         </span>
//         <span className="absolute right-[20%] bottom-[18%] animate-float-delay text-3xl">
//           📱
//         </span>
//       </div>

//       <section className="relative mx-auto max-w-6xl text-center">
//         <div className="mx-auto mb-5 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
//           🔥 AI Powered Daily Feature
//         </div>

//         <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight sm:text-6xl">
//           Daily Reel Ideas for Creators
//         </h1>

//         <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6b4b3c] sm:text-lg">
//           Enter your niche and generate fresh reel hooks, captions, content
//           ideas, and hashtags using AI.
//         </p>

//         <div className="mx-auto mt-8 grid max-w-3xl gap-3 rounded-[2rem] border border-orange-100 bg-white/80 p-4 shadow-xl shadow-orange-100 backdrop-blur md:grid-cols-[1fr_1fr_auto]">
//           <input
//             value={niche}
//             onChange={(e) => setNiche(e.target.value)}
//             placeholder="Your niche e.g. fashion, food, fitness"
//             className="rounded-full border border-orange-100 bg-white px-5 py-3 text-sm outline-none focus:border-orange-400"
//           />

//           <input
//             value={vibe}
//             onChange={(e) => setVibe(e.target.value)}
//             placeholder="Vibe e.g. luxury, funny, aesthetic"
//             className="rounded-full border border-orange-100 bg-white px-5 py-3 text-sm outline-none focus:border-orange-400"
//           />

//           <button
//             onClick={generateIdeas}
//             disabled={loading}
//             className="rounded-full bg-[#ff5a1f] px-7 py-3 font-semibold text-white shadow-lg shadow-orange-300 transition hover:scale-105 hover:bg-[#e94c16] disabled:cursor-not-allowed disabled:opacity-60"
//           >
//             {loading ? "Generating..." : "Generate"}
//           </button>
//         </div>

//         {error && <p className="mt-4 text-sm font-medium text-red-500">{error}</p>}
//       </section>

//       <section className="relative mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-3">
//         {[
//           ["🎯", "Strong Hooks", "Start your reels with attention-grabbing lines."],
//           ["📸", "Scene Ideas", "Know exactly what to shoot and show."],
//           ["🚀", "Growth Ready", "Get captions and hashtags for Instagram."],
//         ].map(([icon, title, desc]) => (
//           <div
//             key={title}
//             className="rounded-3xl border border-orange-100 bg-white/75 p-6 shadow-xl shadow-orange-100 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
//           >
//             <div className="mb-4 text-4xl">{icon}</div>
//             <h3 className="text-xl font-bold">{title}</h3>
//             <p className="mt-2 text-sm leading-6 text-[#725244]">{desc}</p>
//           </div>
//         ))}
//       </section>

//       <section className="relative mx-auto mt-20 max-w-6xl">
//         <div className="mb-8 text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
//             AI Content Drop
//           </p>
//           <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
//             Reel Ideas You Can Post Today
//           </h2>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-3">
//           {ideas.map((item, index) => (
//             <div
//               key={`${item.title}-${index}`}
//               className="group relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-6 shadow-xl shadow-orange-100 transition hover:-translate-y-2 hover:shadow-2xl"
//             >
//               <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-200/40 blur-2xl transition group-hover:scale-150" />

//               <div className="relative">
//                 <div className="mb-5 flex items-center justify-between">
//                   <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
//                     Idea {index + 1}
//                   </span>
//                   <span className="text-2xl">🎥</span>
//                 </div>

//                 <h3 className="text-2xl font-extrabold">{item.title}</h3>

//                 <div className="mt-5 space-y-4 text-sm leading-6">
//                   <div>
//                     <p className="font-bold text-orange-600">Hook</p>
//                     <p className="text-[#604236]">{item.hook}</p>
//                   </div>

//                   <div>
//                     <p className="font-bold text-orange-600">Reel Idea</p>
//                     <p className="text-[#604236]">{item.idea}</p>
//                   </div>

//                   <div>
//                     <p className="font-bold text-orange-600">Caption</p>
//                     <p className="text-[#604236]">{item.caption}</p>
//                   </div>

//                   <div>
//                     <p className="font-bold text-orange-600">Hashtags</p>
//                     <p className="text-[#604236]">{item.hashtags}</p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleCopy(item, index)}
//                   className="mt-6 w-full rounded-full bg-[#25120b] px-5 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#ff5a1f]"
//                 >
//                   {copiedIndex === index ? "Copied ✨" : "Copy Reel Idea"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-18px) rotate(8deg);
//           }
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-float-delay {
//           animation: float 5s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//       `}</style>
//     </main>
//   );
// }


// new new new new new new new new 
// "use client";

// import { useEffect, useRef, useState } from "react";

// type ReelIdea = {
//   title: string;
//   hook: string;
//   idea: string;
//   caption: string;
//   hashtags: string;
// };

// const defaultIdeas: ReelIdea[] = [];

// export default function ReelsPage() {
//   const [niche, setNiche] = useState("");
//   const [vibe, setVibe] = useState("viral, modern, relatable");
//   const [ideas, setIdeas] = useState<ReelIdea[]>(defaultIdeas);
//   const [loading, setLoading] = useState(false);
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
//   const [error, setError] = useState("");

//   const ideasRef = useRef<HTMLDivElement | null>(null);

//   const saveTodayIdeas = (newIdeas: ReelIdea[]) => {
//     localStorage.setItem(
//       "kanova_reels_daily",
//       JSON.stringify({
//         date: new Date().toDateString(),
//         ideas: newIdeas,
//       })
//     );
//   };

//   const generateIdeas = async (isAuto = false) => {
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           type: "reels",
//           niche: niche || "UGC creator",
//           vibe,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.ok) {
//         throw new Error(data.error || "Something went wrong");
//       }

//       if (data.ideas?.length) {
//         setIdeas(data.ideas);
//         saveTodayIdeas(data.ideas);

//         // ✅ Scroll to cards
//         setTimeout(() => {
//           ideasRef.current?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }, 200);
//       }
//     } catch (err: any) {
//       if (!isAuto) {
//         setError(err.message || "Failed to generate ideas");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Auto load daily ideas
//   useEffect(() => {
//     const today = new Date().toDateString();
//     const saved = localStorage.getItem("kanova_reels_daily");

//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         if (parsed.date === today) {
//           setIdeas(parsed.ideas);
//           return;
//         }
//       } catch {
//         localStorage.removeItem("kanova_reels_daily");
//       }
//     }

//     generateIdeas(true);
//     // eslint-disable-next-line
//   }, []);

//   const handleCopy = async (item: ReelIdea, index: number) => {
//     const text = `${item.title}

// Hook:
// ${item.hook}

// Idea:
// ${item.idea}

// Caption:
// ${item.caption}

// Hashtags:
// ${item.hashtags}`;

//     await navigator.clipboard.writeText(text);
//     setCopiedIndex(index);

//     setTimeout(() => setCopiedIndex(null), 1500);
//   };

//   return (
//     <main className="relative min-h-screen bg-[#fff7f2] px-4 py-10 text-[#25120b]">
//       {/* Hero */}
//       <section className="mx-auto max-w-5xl text-center">
//         <div className="mb-4 inline-flex rounded-full border px-4 py-2 text-sm bg-white">
//           🔥 AI Powered Daily Feature
//         </div>

//         <h1 className="text-4xl font-extrabold sm:text-6xl">
//           Daily Reel Ideas for Creators
//         </h1>

//         <p className="mt-4 text-[#6b4b3c]">
//           Enter your niche and generate viral reel ideas instantly.
//         </p>

//         {/* Input */}
//         <div className="mt-8 flex flex-col gap-3 sm:flex-row justify-center">
//           <input
//             value={niche}
//             onChange={(e) => setNiche(e.target.value)}
//             placeholder="fashion, fitness, food..."
//             className="rounded-full border px-5 py-3 w-full sm:w-64"
//           />

//           <input
//             value={vibe}
//             onChange={(e) => setVibe(e.target.value)}
//             className="rounded-full border px-5 py-3 w-full sm:w-64"
//           />

//           <button
//             onClick={() => generateIdeas(false)}
//             disabled={loading}
//             className="rounded-full bg-orange-500 text-white px-6 py-3 font-semibold"
//           >
//             {loading ? "Generating ✨..." : "Generate"}
//           </button>
//         </div>

//         {error && <p className="mt-3 text-red-500">{error}</p>}

//         <p className="mt-3 text-sm text-orange-500">
//           🔥 Updates every 24 hours
//         </p>
//       </section>

//       {/* Ideas Section */}
//       <section
//         ref={ideasRef}
//         className="mt-16 max-w-6xl mx-auto"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Reel Ideas
//         </h2>

//         {/* Loading Skeleton */}
//         {loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="h-64 bg-gray-200 animate-pulse rounded-2xl"
//               />
//             ))}
//           </div>
//         )}

//         {/* Cards */}
//         {!loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {ideas.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 shadow"
//               >
//                 <h3 className="text-xl font-bold mb-3">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm mb-2">
//                   <b>Hook:</b> {item.hook}
//                 </p>

//                 <p className="text-sm mb-2">
//                   <b>Idea:</b> {item.idea}
//                 </p>

//                 <p className="text-sm mb-2">
//                   <b>Caption:</b> {item.caption}
//                 </p>

//                 <p className="text-sm mb-4">
//                   <b>Hashtags:</b> {item.hashtags}
//                 </p>

//                 <button
//                   onClick={() => handleCopy(item, index)}
//                   className="w-full bg-black text-white py-2 rounded-full"
//                 >
//                   {copiedIndex === index ? "Copied ✨" : "Copy"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }


// new new new new new 
// "use client";

// import { useEffect, useRef, useState } from "react";

// type ReelIdea = {
//   title: string;
//   hook: string;
//   idea: string;
//   caption: string;
//   hashtags: string;
// };

// export default function ReelsPage() {
//   const [niche, setNiche] = useState("");
//   const [vibe, setVibe] = useState("viral, modern, relatable");
//   const [ideas, setIdeas] = useState<ReelIdea[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const ideasRef = useRef<HTMLDivElement | null>(null);

//   const generateIdeas = async (auto = false) => {
//     setLoading(true);

//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         body: JSON.stringify({
//           type: "reels",
//           niche: niche || "UGC creator",
//           vibe,
//         }),
//       });

//       const data = await res.json();

//       if (data.ideas) {
//         setIdeas(data.ideas);

//         // scroll
//         setTimeout(() => {
//           ideasRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 200);
//       }
//     } catch (err) {
//       if (!auto) console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     generateIdeas(true);
//   }, []);

//   const handleCopy = async (item: ReelIdea, index: number) => {
//     const text = `${item.title}

// Hook: ${item.hook}
// Idea: ${item.idea}
// Caption: ${item.caption}
// Hashtags: ${item.hashtags}`;

//     await navigator.clipboard.writeText(text);
//     setCopiedIndex(index);

//     setTimeout(() => setCopiedIndex(null), 1500);
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff6f0] via-[#ffece3] to-[#fff8f4] text-[#2a140d] px-4 py-10">
//         {/* new  */}

//        {/* new  */}
//     <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
  
//   {/* Background Blobs */}
//   <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-pink-300/30 blur-3xl" />
//   <div className="absolute right-10 top-40 h-32 w-32 animate-bounce rounded-full bg-orange-300/30 blur-3xl" />
//   <div className="absolute bottom-20 left-1/3 h-40 w-40 animate-pulse rounded-full bg-yellow-300/30 blur-3xl" />

//   {/* 🎯 Desktop Floating Emojis */}
//   <span className="hidden sm:block absolute left-[8%] top-[18%] animate-float text-3xl">
//     🎬
//   </span>

//   <span className="hidden sm:block absolute right-[12%] top-[24%] animate-float-delay text-3xl">
//     ✨
//   </span>

//   {/* <span className="hidden sm:block absolute left-[12%] bottom-[22%] animate-float text-3xl">
//     🔥
//   </span> */}
//   <span className="hidden sm:block absolute left-[8%] top-[40%] animate-float text-3xl">
//     🔥
//   </span>

//   {/* <span className="hidden sm:block absolute right-[15%] bottom-[18%] animate-float-delay text-3xl">
//     📱
//   </span> */}
//    <span className="hidden sm:block absolute right-[15%] top-[45%] animate-float-delay text-3xl">
//     📱
//   </span>

//   {/* 📱 Mobile Floating Emojis (safe positions) */}
//   <span className="block sm:hidden absolute left-4 top-32 animate-float text-2xl">
//     🎬
//   </span>

//   <span className="block sm:hidden absolute right-4 top-40 animate-float-delay text-2xl">
//     ✨
//   </span>
//    <span className="block sm:hidden absolute left-6 top-46 animate-float text-2xl">
//     🔥
//   </span>

//   <span className="block sm:hidden absolute right-5 top-46 animate-float-delay text-2xl">
//      📱
//   </span>

// </div>

//       {/* Floating Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-52 h-52 bg-pink-200/30 rounded-full blur-3xl animate-bounce" />
//       </div>

//       {/* HERO */}
//       <section className="relative max-w-6xl mx-auto text-center">

//         <div className="mb-5 inline-flex px-4 py-2 rounded-full bg-white shadow border text-sm font-medium">
//           🔥 AI Powered Daily Feature
//         </div>

//         <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
//           Daily Reel Ideas for Creators
//         </h1>

//         <p className="mt-4 text-[#6b4b3c] max-w-xl mx-auto">
//           Generate viral reel hooks, captions, and content ideas instantly.
//         </p>

//         {/* INPUT BOX */}
//         <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border max-w-3xl mx-auto">

//           <input
//             value={niche}
//             onChange={(e) => setNiche(e.target.value)}
//             placeholder="fashion, fitness, food..."
//             className="flex-1 rounded-full px-5 py-3 border outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           <input
//             value={vibe}
//             onChange={(e) => setVibe(e.target.value)}
//             className="flex-1 rounded-full px-5 py-3 border outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           <button
//             onClick={() => generateIdeas(false)}
//             className="rounded-full px-7 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg hover:scale-105 transition"
//           >
//             {loading ? "Generating ✨" : "Generate"}
//           </button>
//         </div>

//         <p className="mt-3 text-sm text-orange-500 font-semibold">
//           ✨ Updates every 24 hours
//         </p>
//       </section>

//       {/* IDEAS */}
//       <section ref={ideasRef} className="relative max-w-6xl mx-auto mt-16">

//         <h2 className="text-3xl font-extrabold text-center mb-10">
//           🎥 Your Reel Ideas
//         </h2>

//         {/* LOADING */}
//         {loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div key={i} className="h-72 rounded-3xl bg-white animate-pulse shadow-xl" />
//             ))}
//           </div>
//         )}

//         {/* CARDS */}
//         {!loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {ideas.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-white p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition hover:-translate-y-2"
//               >
//                 {/* glow */}
//                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl group-hover:scale-150 transition" />

//                 <span className="text-xs bg-orange-100 px-3 py-1 rounded-full font-semibold text-orange-600">
//                   Idea {index + 1}
//                 </span>

//                 <h3 className="mt-3 text-xl font-bold">
//                   {item.title}
//                 </h3>

//                 <div className="mt-4 space-y-3 text-sm">
//                   <p><b className="text-orange-500">Hook:</b> {item.hook}</p>
//                   <p><b className="text-orange-500">Idea:</b> {item.idea}</p>
//                   <p><b className="text-orange-500">Caption:</b> {item.caption}</p>
//                   <p><b className="text-orange-500">Hashtags:</b> {item.hashtags}</p>
//                 </div>

//                 <button
//                   onClick={() => handleCopy(item, index)}
//                   className="mt-5 w-full bg-black text-white py-2 rounded-full hover:bg-orange-500 transition"
//                 >
//                   {copiedIndex === index ? "Copied ✨" : "Copy Reel Idea"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//              <style jsx>{`
//         @keyframes float {
//            0% {
//              transform: translateY(0px) rotate(0deg);
//            }
//           50% {
//              transform: translateY(-18px) rotate(8deg);
//            }
//            100% {
//              transform: translateY(0px) rotate(0deg);
//           }
//          }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//          }

//          .animate-float-delay {
//            animation: float 5s ease-in-out infinite;
//           animation-delay: 1s;
//          }
//        `}</style>
//     </main>
//   );
// }

// removable 

// "use client";

// import { useEffect, useRef, useState } from "react";

// type ReelIdea = {
//   title: string;
//   hook: string;
//   idea: string;
//   caption: string;
//   hashtags: string;
// };

// const STORAGE_KEY = "kanova_reels_ideas";

// export default function ReelsPage() {
//   const [niche, setNiche] = useState("");
//   const [vibe, setVibe] = useState("viral, modern, relatable");
//   const [ideas, setIdeas] = useState<ReelIdea[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const ideasRef = useRef<HTMLDivElement | null>(null);

//   const generateIdeas = async (auto = false, forceNew = false) => {
//     if (auto && !forceNew) {
//       const savedIdeas = localStorage.getItem(STORAGE_KEY);

//       if (savedIdeas) {
//         setIdeas(JSON.parse(savedIdeas));
//         return;
//       }
//     }

//     setLoading(true);

//     try {
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         body: JSON.stringify({
//           type: "reels",
//           niche: niche || "UGC creator",
//           vibe,
//         }),
//       });

//       const data = await res.json();

//       if (data.ideas) {
//         setIdeas(data.ideas);
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(data.ideas));

//         setTimeout(() => {
//           ideasRef.current?.scrollIntoView({ behavior: "smooth" });
//         }, 200);
//       }
//     } catch (err) {
//       if (!auto) console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     generateIdeas(true);
//   }, []);

//   const handleCopy = async (item: ReelIdea, index: number) => {
//     const text = `${item.title}

// Hook: ${item.hook}
// Idea: ${item.idea}
// Caption: ${item.caption}
// Hashtags: ${item.hashtags}`;

//     await navigator.clipboard.writeText(text);
//     setCopiedIndex(index);

//     setTimeout(() => setCopiedIndex(null), 1500);
//   };

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff6f0] via-[#ffece3] to-[#fff8f4] text-[#2a140d] px-4 py-10">
//       <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-pink-300/30 blur-3xl" />
//         <div className="absolute right-10 top-40 h-32 w-32 animate-bounce rounded-full bg-orange-300/30 blur-3xl" />
//         <div className="absolute bottom-20 left-1/3 h-40 w-40 animate-pulse rounded-full bg-yellow-300/30 blur-3xl" />

//         <span className="hidden sm:block absolute left-[8%] top-[18%] animate-float text-3xl">
//           🎬
//         </span>
//         <span className="hidden sm:block absolute right-[12%] top-[24%] animate-float-delay text-3xl">
//           ✨
//         </span>
//         <span className="hidden sm:block absolute left-[8%] top-[40%] animate-float text-3xl">
//           🔥
//         </span>
//         <span className="hidden sm:block absolute right-[15%] top-[45%] animate-float-delay text-3xl">
//           📱
//         </span>

//         <span className="block sm:hidden absolute left-4 top-32 animate-float text-2xl">
//           🎬
//         </span>
//         <span className="block sm:hidden absolute right-4 top-40 animate-float-delay text-2xl">
//           ✨
//         </span>
//         <span className="block sm:hidden absolute left-6 top-46 animate-float text-2xl">
//           🔥
//         </span>
//         <span className="block sm:hidden absolute right-5 top-46 animate-float-delay text-2xl">
//           📱
//         </span>
//       </div>

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-52 h-52 bg-pink-200/30 rounded-full blur-3xl animate-bounce" />
//       </div>

//       <section className="relative max-w-6xl mx-auto text-center">
//         <div className="mb-5 inline-flex px-4 py-2 rounded-full bg-white shadow border text-sm font-medium">
//           🔥 AI Powered Daily Feature
//         </div>

//         <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
//           Daily Reel Ideas for Creators
//         </h1>

//         <p className="mt-4 text-[#6b4b3c] max-w-xl mx-auto">
//           Generate viral reel hooks, captions, and content ideas instantly.
//         </p>

//         <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border max-w-3xl mx-auto">
//           <input
//             value={niche}
//             onChange={(e) => setNiche(e.target.value)}
//             placeholder="fashion, fitness, food..."
//             className="flex-1 rounded-full px-5 py-3 border outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           <input
//             value={vibe}
//             onChange={(e) => setVibe(e.target.value)}
//             className="flex-1 rounded-full px-5 py-3 border outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           <button
//             onClick={() => generateIdeas(false, true)}
//             disabled={loading}
//             className="rounded-full px-7 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg hover:scale-105 transition disabled:opacity-60"
//           >
//             {loading ? "Generating ✨" : "Generate"}
//           </button>
//         </div>

//         <p className="mt-3 text-sm text-orange-500 font-semibold">
//           ✨ Ideas stay saved until you click Generate again
//         </p>
//       </section>

//       <section ref={ideasRef} className="relative max-w-6xl mx-auto mt-16">
//         <h2 className="text-3xl font-extrabold text-center mb-10">
//           🎥 Your Reel Ideas
//         </h2>

//         {loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="h-72 rounded-3xl bg-white animate-pulse shadow-xl"
//               />
//             ))}
//           </div>
//         )}

//         {!loading && (
//           <div className="grid md:grid-cols-3 gap-6">
//             {ideas.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-white p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition hover:-translate-y-2"
//               >
//                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-200/30 rounded-full blur-2xl group-hover:scale-150 transition" />

//                 <span className="text-xs bg-orange-100 px-3 py-1 rounded-full font-semibold text-orange-600">
//                   Idea {index + 1}
//                 </span>

//                 <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

//                 <div className="mt-4 space-y-3 text-sm">
//                   <p>
//                     <b className="text-orange-500">Hook:</b> {item.hook}
//                   </p>
//                   <p>
//                     <b className="text-orange-500">Idea:</b> {item.idea}
//                   </p>
//                   <p>
//                     <b className="text-orange-500">Caption:</b> {item.caption}
//                   </p>
//                   <p>
//                     <b className="text-orange-500">Hashtags:</b>{" "}
//                     {item.hashtags}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => handleCopy(item, index)}
//                   className="mt-5 w-full bg-black text-white py-2 rounded-full hover:bg-orange-500 transition"
//                 >
//                   {copiedIndex === index ? "Copied ✨" : "Copy Reel Idea"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>

//       <style jsx>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-18px) rotate(8deg);
//           }
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }

//         .animate-float-delay {
//           animation: float 5s ease-in-out infinite;
//           animation-delay: 1s;
//         }
//       `}</style>
//     </main>
//   );
// }


// new but removeable 
// "use client";

// import { useState } from "react";

// export default function ReelsPage() {
//   const [niche, setNiche] = useState("Fashion");
//   const [platform, setPlatform] = useState("Instagram Reels");
//   const [mood, setMood] = useState("Aesthetic");
//   const [topic, setTopic] = useState("");
//   const [location, setLocation] = useState("");
//   const [output, setOutput] = useState("");

//   const generateIdea = () => {
//     const reelIdea = `🎬 HOOK:
// POV: You found the perfect ${niche.toLowerCase()} idea that instantly makes your content look premium.

// 📸 SCENE IDEA:
// Shoot in ${location || "a clean aesthetic location"} with soft lighting, smooth camera movement, and a confident natural vibe.

// 📝 SCRIPT:
// Start with a close-up shot, then show the main moment/product/outfit. Add quick cuts, text overlays, and end with a strong visual transformation.

// 💬 CAPTION:
// This ${mood.toLowerCase()} ${niche.toLowerCase()} reel idea is perfect for creators who want to stand out on ${platform}.

// #️⃣ HASHTAGS:
// #ReelIdeas #ContentCreator #UGCCreator #${niche.replaceAll(" ", "")} #ViralReels #Kanova

// 👉 CTA:
// Save this idea for your next reel and try it today.`;

//     setOutput(reelIdea);
//   };

//   return (
//     <main className="min-h-screen bg-white px-6 py-16">
//       <section className="mx-auto max-w-7xl">
//         {/* Hero */}
//         <div className="mb-12">
//           <div className="mb-4 inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
//             🔥 New Feature
//           </div>

//           <h1 className="text-5xl font-bold tracking-tight text-black">
//             Daily Viral Reel Ideas
//           </h1>

//           <p className="mt-4 max-w-2xl text-xl text-black/60">
//             Generate ready-to-post reel hooks, scene ideas, captions and hashtags
//             for creators, influencers and brands.
//           </p>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <span className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
//               🎥 For Reels
//             </span>
//             <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
//               ✨ AI Powered
//             </span>
//             <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
//               🚀 Creator Growth
//             </span>
//           </div>
//         </div>

//         {/* Main Card */}
//         <div className="rounded-[2rem] border border-black/10 bg-gradient-to-br from-pink-50 via-white to-orange-50 p-6 shadow-sm md:p-10">
//           <div className="grid gap-8 lg:grid-cols-2">
//             {/* Left Form */}
//             <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
//               <h2 className="text-2xl font-bold text-black">Customize</h2>
//               <p className="mt-2 text-black/60">
//                 Choose your content style and generate a fresh reel idea.
//               </p>

//               <div className="mt-8 grid gap-5">
//                 <div>
//                   <label className="mb-2 block font-semibold text-black/70">
//                     Niche
//                   </label>
//                   <select
//                     value={niche}
//                     onChange={(e) => setNiche(e.target.value)}
//                     className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-pink-400"
//                   >
//                     <option>Fashion</option>
//                     <option>Beauty</option>
//                     <option>Fitness</option>
//                     <option>Food</option>
//                     <option>Travel</option>
//                     <option>UGC Product</option>
//                     <option>Motivation</option>
//                     <option>Tech</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block font-semibold text-black/70">
//                     Platform
//                   </label>
//                   <select
//                     value={platform}
//                     onChange={(e) => setPlatform(e.target.value)}
//                     className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-pink-400"
//                   >
//                     <option>Instagram Reels</option>
//                     <option>YouTube Shorts</option>
//                     <option>TikTok</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block font-semibold text-black/70">
//                     Mood / Tone
//                   </label>
//                   <select
//                     value={mood}
//                     onChange={(e) => setMood(e.target.value)}
//                     className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-pink-400"
//                   >
//                     <option>Aesthetic</option>
//                     <option>Funny</option>
//                     <option>Emotional</option>
//                     <option>Luxury</option>
//                     <option>Trendy</option>
//                     <option>Bold</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block font-semibold text-black/70">
//                     Topic / Product
//                   </label>
//                   <input
//                     value={topic}
//                     onChange={(e) => setTopic(e.target.value)}
//                     placeholder="Example: summer outfit, skincare product..."
//                     className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-pink-400"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block font-semibold text-black/70">
//                     Location
//                   </label>
//                   <input
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     placeholder="Example: cafe, bedroom, street, studio..."
//                     className="w-full rounded-2xl border border-black/10 px-4 py-3 outline-none focus:border-pink-400"
//                   />
//                 </div>

//                 <button
//                   onClick={generateIdea}
//                   className="mt-2 rounded-full bg-black px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
//                 >
//                   Generate Reel Idea ✨
//                 </button>
//               </div>
//             </div>

//             {/* Right Output */}
//             <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
//               <div className="flex items-center justify-between gap-4">
//                 <h2 className="text-2xl font-bold text-black">
//                   Your Reel Plan
//                 </h2>

//                 <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
//                   Ready to post
//                 </span>
//               </div>

//               <div className="mt-8 min-h-[480px] rounded-3xl border border-black/10 bg-black/[0.02] p-6">
//                 {output ? (
//                   <pre className="whitespace-pre-wrap font-sans text-base leading-8 text-black/80">
//                     {output}
//                   </pre>
//                 ) : (
//                   <p className="text-lg text-black/40">
//                     Click Generate to get your viral reel idea...
//                   </p>
//                 )}
//               </div>

//               {output && (
//                 <button
//                   onClick={() => navigator.clipboard.writeText(output)}
//                   className="mt-5 w-full rounded-full border border-black/10 bg-white px-6 py-4 font-semibold text-black transition hover:bg-black hover:text-white"
//                 >
//                   Copy Reel Plan
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";

type ReelIdea = {
  title: string;
  hook: string;
  idea: string;
  caption: string;
  hashtags: string;
};

const STORAGE_KEY = "kanova_reels_ideas";
const ONE_DAY = 24 * 60 * 60 * 1000;

export default function ReelsPage() {
  const [niche, setNiche] = useState("");
  const [vibe, setVibe] = useState("viral, modern, relatable");
  const [ideas, setIdeas] = useState<ReelIdea[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const ideasRef = useRef<HTMLDivElement | null>(null);

  const generateIdeas = async (auto = false, forceNew = false) => {
    if (auto && !forceNew) {
      const savedData = localStorage.getItem(STORAGE_KEY);

      if (savedData) {
        const parsed = JSON.parse(savedData);

        // 🔥 Fix for old + new format
        const savedIdeas = Array.isArray(parsed)
          ? parsed
          : Array.isArray(parsed?.ideas)
          ? parsed.ideas
          : [];

        const savedTimestamp = parsed?.timestamp || 0;
        const isExpired = Date.now() - savedTimestamp > ONE_DAY;

        if (!isExpired && savedIdeas.length > 0) {
          setIdeas(savedIdeas);
          return;
        }

        localStorage.removeItem(STORAGE_KEY);
      }
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          type: "reels",
          niche: niche || "UGC creator",
          vibe,
        }),
      });

      const data = await res.json();

      if (data.ideas) {
        setIdeas(data.ideas);

        // Save with timestamp
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            ideas: data.ideas,
            timestamp: Date.now(),
          })
        );

        setTimeout(() => {
          ideasRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateIdeas(true);
  }, []);

  const handleCopy = async (item: ReelIdea, index: number) => {
    const text = `${item.title}

Hook: ${item.hook}
Idea: ${item.idea}
Caption: ${item.caption}
Hashtags: ${item.hashtags}`;

    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff6f0] via-[#ffece3] to-[#fff8f4] text-[#2a140d] px-4 py-10">
      
      {/* 🔥 Background Animations */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-24 w-24 animate-pulse rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute right-10 top-40 h-32 w-32 animate-bounce rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-40 w-40 animate-pulse rounded-full bg-yellow-300/30 blur-3xl" />

        <span className="absolute left-[8%] top-[18%] animate-float text-3xl">🎬</span>
        <span className="absolute right-[12%] top-[24%] animate-float-delay text-3xl">✨</span>
        <span className="absolute left-[8%] top-[40%] animate-float text-3xl">🔥</span>
        <span className="absolute right-[15%] top-[45%] animate-float-delay text-3xl">📱</span>
      </div>

      {/* 🔥 Hero */}
      <section className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-5 inline-flex px-4 py-2 rounded-full bg-white shadow border text-sm font-medium">
          🔥 AI Powered Daily Feature
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold">
          Daily Reel Ideas for Creators
        </h1>

        <p className="mt-4 text-[#6b4b3c] max-w-xl mx-auto">
          Generate viral reel hooks, captions, and content ideas instantly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border max-w-3xl mx-auto">
          <input
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="fashion, fitness, food..."
            className="flex-1 rounded-full px-5 py-3 border outline-none"
          />

          <input
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            placeholder="viral, modern, relatable"
            className="flex-1 rounded-full px-5 py-3 border outline-none"
          />

          <button
            onClick={() => generateIdeas(false, true)}
            disabled={loading}
            className="rounded-full px-7 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>

        <p className="mt-3 text-sm text-orange-500 font-semibold">
          ⏳ Ideas refresh automatically every 24 hours
        </p>
      </section>

      {/* 🎥 Ideas */}
      <section ref={ideasRef} className="relative z-10 max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-extrabold text-center mb-10">
          🎥 Your Reel Ideas
        </h2>

        {loading && (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 rounded-3xl bg-white animate-pulse" />
            ))}
          </div>
        )}

        {!loading && Array.isArray(ideas) && (
          <div className="grid md:grid-cols-3 gap-6">
            {ideas.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition"
              >
                <span className="text-xs bg-orange-100 px-3 py-1 rounded-full font-semibold text-orange-600">
                  Idea {index + 1}
                </span>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <p><b>Hook:</b> {item.hook}</p>
                  <p><b>Idea:</b> {item.idea}</p>
                  <p><b>Caption:</b> {item.caption}</p>
                  <p><b>Hashtags:</b> {item.hashtags}</p>
                </div>

                <button
                  onClick={() => handleCopy(item, index)}
                  className="mt-5 w-full bg-black text-white py-2 rounded-full"
                >
                  {copiedIndex === index ? "Copied" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 🔥 Animation */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }

        .animate-float-delay {
          animation: float 5s infinite ease-in-out;
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
}