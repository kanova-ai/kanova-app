// new new here 
// export default function HoliAIPage() {
//   return (
//     <div className="mx-auto max-w-6xl px-4 py-10">
//       <h1 className="text-4xl font-bold">🌸 Holi AI</h1>
//       <p className="mt-2 text-black/60">
//         Create colorful Holi prompts instantly.
//       </p>

//       <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
//         <p className="text-black/70">
//           Add your Holi functionality here (same style like Valentine).
//         </p>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useMemo, useState } from "react";
// import HoliSplashBackground from "@/components/HoliSplashBackground";

// type Mode = "photo" | "text";

// export default function HoliAIPage() {
//   const [mode, setMode] = useState<Mode>("photo");
//   const [style, setStyle] = useState("Luxury Editorial");
//   const [scene, setScene] = useState("couple");
//   const [mood, setMood] = useState("joyful");
//   const [location, setLocation] = useState("outdoor courtyard");
//   const [colors, setColors] = useState("gulal colors (pink, yellow, green, blue)");
//   const [outfit, setOutfit] = useState("white kurta & saree with color powder");
//   const [camera, setCamera] = useState("50mm, shallow depth of field");
//   const [aspect, setAspect] = useState("9:16");
//   const [negative, setNegative] = useState(
//     "text, logos, watermark, extra fingers, deformed hands, blurry face, clutter, oversaturated, low-res"
//   );

//   const prompt = useMemo(() => {
//     if (mode === "text") {
//       return `Write a warm, festive Holi message for a ${scene}. Tone: ${mood}. Mention ${colors}. Keep it short, sweet, and modern. Add 1 emoji and 1 catchy closing line.`;
//     }

//     return `A ${style.toLowerCase()} Holi scene featuring a ${scene}, ${mood} vibe, at a ${location}. Vibrant ${colors} gulal powder splashing in the air, ${outfit}. Soft golden-hour lighting, cinematic look, ${camera}. High detail, natural skin texture, realistic fabric, balanced composition with negative space. Aspect ratio ${aspect}. 
// Negative: ${negative}.`;
//   }, [mode, style, scene, mood, location, colors, outfit, camera, aspect, negative]);

//   const copy = async () => {
//     await navigator.clipboard.writeText(prompt);
//     alert("Copied ✅");
//   };

//   return (
//     <div className="relative">
//       {/* animated background */}
//       <div className="absolute inset-0 -z-10">
//         <HoliSplashBackground />
//       </div>

//       <div className="mx-auto max-w-6xl px-4 py-10">
//         <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
//           <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent animate-pulse">🌸 Holi AI</h1>
//               <p className="mt-2 text-black/60">
//                 Click anywhere on the page to create color splashes ✨
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setMode("photo")}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition border",
//                   mode === "photo"
//                     ? "bg-black text-white border-black"
//                     : "bg-white/80 text-black border-black/10 hover:bg-white",
//                 ].join(" ")}
//               >
//                 Photo Prompt
//               </button>
//               <button
//                 onClick={() => setMode("text")}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition border",
//                   mode === "text"
//                     ? "bg-black text-white border-black"
//                     : "bg-white/80 text-black border-black/10 hover:bg-white",
//                 ].join(" ")}
//               >
//                 Text Message
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 grid gap-6 lg:grid-cols-2">
//             {/* Controls */}
//             <div className="rounded-2xl border border-black/10 bg-white p-5">
//               <h2 className="text-xl font-semibold">Customize</h2>

//               <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                 <Field label="Scene">
//                   <select
//                     className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                     value={scene}
//                     onChange={(e) => setScene(e.target.value)}
//                   >
//                     <option value="couple">Couple</option>
//                     <option value="friends group">Friends Group</option>
//                     <option value="family">Family</option>
//                     <option value="solo portrait">Solo Portrait</option>
//                   </select>
//                 </Field>

//                 <Field label="Mood">
//                   <select
//                     className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                     value={mood}
//                     onChange={(e) => setMood(e.target.value)}
//                   >
//                     <option value="joyful">Joyful</option>
//                     <option value="romantic">Romantic</option>
//                     <option value="playful">Playful</option>
//                     <option value="cinematic">Cinematic</option>
//                     <option value="dreamy">Dreamy</option>
//                   </select>
//                 </Field>

//                 {mode === "photo" && (
//                   <>
//                     <Field label="Style">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={style}
//                         onChange={(e) => setStyle(e.target.value)}
//                       >
//                         <option>Luxury Editorial</option>
//                         <option>Cinematic</option>
//                         <option>Soft Pastel</option>
//                         <option>Street Photography</option>
//                         <option>Traditional Indian</option>
//                       </select>
//                     </Field>

//                     <Field label="Location">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         placeholder="e.g., rooftop, courtyard, festival street"
//                       />
//                     </Field>

//                     <Field label="Colors">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={colors}
//                         onChange={(e) => setColors(e.target.value)}
//                         placeholder="pink, yellow, green, blue"
//                       />
//                     </Field>

//                     <Field label="Outfit">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={outfit}
//                         onChange={(e) => setOutfit(e.target.value)}
//                         placeholder="white kurta, saree, etc."
//                       />
//                     </Field>

//                     <Field label="Camera / Lens">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={camera}
//                         onChange={(e) => setCamera(e.target.value)}
//                         placeholder="50mm, shallow depth of field"
//                       />
//                     </Field>

//                     <Field label="Aspect Ratio">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={aspect}
//                         onChange={(e) => setAspect(e.target.value)}
//                       >
//                         <option value="9:16">9:16 (Reels)</option>
//                         <option value="1:1">1:1 (Post)</option>
//                         <option value="16:9">16:9 (Wide)</option>
//                         <option value="4:5">4:5 (IG)</option>
//                       </select>
//                     </Field>

//                     <Field label="Negative Prompt">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={negative}
//                         onChange={(e) => setNegative(e.target.value)}
//                       />
//                     </Field>
//                   </>
//                 )}
//               </div>
//             </div>

//             {/* Output */}
//             <div className="rounded-2xl border border-black/10 bg-white p-5">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Your Prompt</h2>
//                 <button
//                   onClick={copy}
//                   className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90 hover:scale-105 transition"
//                 >
//                   Copy
//                 </button>
//               </div>

//               <textarea
//                 className="mt-4 h-[340px] w-full resize-none rounded-2xl border border-black/10 bg-white p-4 text-sm leading-relaxed"
//                 value={prompt}
//                 readOnly
//               />

//               <div className="mt-4 text-sm text-black/60">
//                 Tip: Use this in Midjourney / Leonardo / Firefly. For best Holi
//                 results, keep <b>colors</b> + <b>lighting</b> strong but avoid
//                 “oversaturated” in negative prompt.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <label className="grid gap-1 text-sm">
//       <span className="font-medium text-black/70">{label}</span>
//       {children}
//     </label>
//   );
// }


// new new new code here 

// "use client";

// import { useState } from "react";
// import HoliSplashBackground from "@/components/HoliSplashBackground";

// type Mode = "photo" | "text";
// type HoliWho = "Couple" | "Solo" | "Product" | "Friends" | "Family";

// export default function HoliAIPage() {
//   const [mode, setMode] = useState<Mode>("photo");

//   // UI fields
//   const [style, setStyle] = useState("Luxury Editorial");
//   const [scene, setScene] = useState("couple"); // for text mode (and can map to who)
//   const [mood, setMood] = useState("joyful");
//   const [location, setLocation] = useState("outdoor courtyard");
//   const [colors, setColors] = useState("gulal colors (pink, yellow, green, blue)");
//   const [outfit, setOutfit] = useState("white kurta & saree with color powder");
//   const [camera, setCamera] = useState("50mm, shallow depth of field");
//   const [aspect, setAspect] = useState("9:16");
//   const [negative, setNegative] = useState(
//     "text, logos, watermark, extra fingers, deformed hands, blurry face, clutter, oversaturated, low-res"
//   );

//   // API output
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);

//   // map your "scene" to API "who" (because API expects who)
//   const mapSceneToWho = (s: string): HoliWho => {
//     const v = (s || "").toLowerCase();
//     if (v.includes("friends")) return "Friends";
//     if (v.includes("family")) return "Family";
//     if (v.includes("solo")) return "Solo";
//     if (v.includes("product")) return "Product";
//     return "Couple";
//   };

//   const generate = async () => {
//     setLoading(true);

//     try {
//       // ✅ PHOTO MODE -> use type: "holi"
//       if (mode === "photo") {
//         const res = await fetch("/api/generate", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             type: "holi",
//             who: mapSceneToWho(scene),
//             mood,
//             location,
//             colors,
//             outfit,
//             aspect,
//             style,
//             lighting: "soft golden-hour light",
//             camera,
//           }),
//         });

//         const data = await res.json();

//         if (!res.ok || !data?.ok) {
//           setPrompt(`Error: ${data?.error || "Something went wrong"}`);
//           return;
//         }

//         setPrompt(data.prompt);
//         return;
//       }

//       // ✅ TEXT MODE -> reuse your existing API type: "text"
//       // We will generate a Holi message using the "text" prompt engine
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           type: "text",
//           category: "Festival Message (Holi)",
//           tone: mood,
//           difficulty: "Easy",
//           topic: `Write a warm, festive Holi message for ${scene}. Mention ${colors}. Keep it short, sweet, and modern. Add 1 emoji and 1 catchy closing line.`,
//           constraints: "Return only the final message, no explanation.",
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data?.ok) {
//         setPrompt(`Error: ${data?.error || "Something went wrong"}`);
//         return;
//       }

//       setPrompt(data.prompt);
//     } catch (e: any) {
//       setPrompt(`Error: ${e?.message || "Server error"}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copy = async () => {
//     if (!prompt) return;
//     await navigator.clipboard.writeText(prompt);
//     alert("Copied ✅");
//   };

//   return (
//     <div className="relative">
//       {/* animated background */}
//       <div className="absolute inset-0 -z-10">
//         <HoliSplashBackground />
//       </div>

//       <div className="mx-auto max-w-6xl px-4 py-10">
//         <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
//           <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
//                 🌸 Holi AI
//               </h1>
//               <p className="mt-2 text-black/60">
//                 Click anywhere on the page to create color splashes ✨
//               </p>
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setMode("photo")}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition border",
//                   mode === "photo"
//                     ? "bg-black text-white border-black"
//                     : "bg-white/80 text-black border-black/10 hover:bg-white",
//                 ].join(" ")}
//               >
//                 Photo Prompt
//               </button>
//               <button
//                 onClick={() => setMode("text")}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition border",
//                   mode === "text"
//                     ? "bg-black text-white border-black"
//                     : "bg-white/80 text-black border-black/10 hover:bg-white",
//                 ].join(" ")}
//               >
//                 Text Message
//               </button>

//               {/* ✅ Generate button */}
//               <button
//                 onClick={generate}
//                 disabled={loading}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold text-white transition",
//                   loading ? "bg-black/50 cursor-not-allowed" : "bg-black hover:opacity-90",
//                 ].join(" ")}
//               >
//                 {loading ? "Generating..." : "Generate"}
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 grid gap-6 lg:grid-cols-2">
//             {/* Controls */}
//             <div className="rounded-2xl border border-black/10 bg-white p-5">
//               <h2 className="text-xl font-semibold">Customize</h2>

//               <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                 <Field label={mode === "text" ? "For" : "Scene"}>
//                   <select
//                     className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                     value={scene}
//                     onChange={(e) => setScene(e.target.value)}
//                   >
//                     <option value="couple">Couple</option>
//                     <option value="friends group">Friends Group</option>
//                     <option value="family">Family</option>
//                     <option value="solo portrait">Solo Portrait</option>
//                     <option value="product shoot">Product</option>
//                   </select>
//                 </Field>

//                 <Field label="Mood / Tone">
//                   <select
//                     className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                     value={mood}
//                     onChange={(e) => setMood(e.target.value)}
//                   >
//                     <option value="joyful">Joyful</option>
//                     <option value="romantic">Romantic</option>
//                     <option value="playful">Playful</option>
//                     <option value="cinematic">Cinematic</option>
//                     <option value="dreamy">Dreamy</option>
//                   </select>
//                 </Field>

//                 {/* Only photo options */}
//                 {mode === "photo" && (
//                   <>
//                     <Field label="Style">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={style}
//                         onChange={(e) => setStyle(e.target.value)}
//                       >
//                         <option>Luxury Editorial</option>
//                         <option>Cinematic</option>
//                         <option>Soft Pastel</option>
//                         <option>Street Photography</option>
//                         <option>Traditional Indian</option>
//                       </select>
//                     </Field>

//                     <Field label="Location">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         placeholder="e.g., rooftop, courtyard, festival street"
//                       />
//                     </Field>

//                     <Field label="Colors">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={colors}
//                         onChange={(e) => setColors(e.target.value)}
//                         placeholder="pink, yellow, green, blue"
//                       />
//                     </Field>

//                     <Field label="Outfit">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={outfit}
//                         onChange={(e) => setOutfit(e.target.value)}
//                         placeholder="white kurta, saree, etc."
//                       />
//                     </Field>

//                     <Field label="Camera / Lens">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={camera}
//                         onChange={(e) => setCamera(e.target.value)}
//                         placeholder="50mm, shallow depth of field"
//                       />
//                     </Field>

//                     <Field label="Aspect Ratio">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={aspect}
//                         onChange={(e) => setAspect(e.target.value)}
//                       >
//                         <option value="9:16">9:16 (Reels)</option>
//                         <option value="1:1">1:1 (Post)</option>
//                         <option value="16:9">16:9 (Wide)</option>
//                         <option value="4:5">4:5 (IG)</option>
//                       </select>
//                     </Field>

//                     <Field label="Negative Prompt (optional)">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={negative}
//                         onChange={(e) => setNegative(e.target.value)}
//                         placeholder="(We already handle negatives in API, optional here)"
//                       />
//                     </Field>

//                     <div className="sm:col-span-2 text-xs text-black/50">
//                       Note: Negative prompt is already added by the API. This field is optional.
//                     </div>
//                   </>
//                 )}

//                 {/* For text mode, show only colors (optional) */}
//                 {mode === "text" && (
//                   <Field label="Mention Colors">
//                     <input
//                       className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                       value={colors}
//                       onChange={(e) => setColors(e.target.value)}
//                       placeholder="pink, yellow, green, blue"
//                     />
//                   </Field>
//                 )}
//               </div>
//             </div>

//             {/* Output */}
//             <div className="rounded-2xl border border-black/10 bg-white p-5">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Your Prompt</h2>
//                 <button
//                   onClick={copy}
//                   disabled={!prompt}
//                   className={[
//                     "rounded-full px-4 py-2 text-sm font-semibold text-white transition",
//                     prompt ? "bg-black hover:opacity-90 hover:scale-105" : "bg-black/40 cursor-not-allowed",
//                   ].join(" ")}
//                 >
//                   Copy
//                 </button>
//               </div>

//               <textarea
//                 className="mt-4 h-[340px] w-full resize-none rounded-2xl border border-black/10 bg-white p-4 text-sm leading-relaxed"
//                 value={prompt}
//                 readOnly
//                 placeholder="Click Generate to get AI output..."
//               />

//               <div className="mt-4 text-sm text-black/60">
//                 Tip: For photo prompts use Midjourney / Leonardo / Firefly. For text messages, copy and share.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <label className="grid gap-1 text-sm">
//       <span className="font-medium text-black/70">{label}</span>
//       {children}
//     </label>
//   );
// }


// new new new new here message 

// "use client";

// import { useState } from "react";
// import HoliSplashBackground from "@/components/HoliSplashBackground";

// type Mode = "photo" | "text";
// type HoliWho = "Couple" | "Solo" | "Product" | "Friends" | "Family";

// export default function HoliAIPage() {
//   const [mode, setMode] = useState<Mode>("photo");

//   // UI fields
//   const [style, setStyle] = useState("Luxury Editorial");
//   const [scene, setScene] = useState("couple"); // maps to who
//   const [mood, setMood] = useState("joyful");
//   const [location, setLocation] = useState("outdoor courtyard");

//   // ✅ Color palette + custom
//   const [palette, setPalette] = useState("Classic Gulal");
//   const [customColors, setCustomColors] = useState("");
//   const [colors, setColors] = useState("gulal colors (pink, yellow, green, blue)");

//   // ✅ Outfit presets + custom
//   const [outfitPreset, setOutfitPreset] = useState("Classic White");
//   const [customOutfit, setCustomOutfit] = useState("");
//   const [outfit, setOutfit] = useState("white kurta & saree with color powder");

//   const [camera, setCamera] = useState("50mm, shallow depth of field");
//   const [aspect, setAspect] = useState("9:16");

//   // (optional) still keeping this input, but API already adds negatives
//   const [negative, setNegative] = useState(
//     "text, logos, watermark, extra fingers, deformed hands, blurry face, clutter, oversaturated, low-res"
//   );

//   // API output
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);

//   // palettes
//   const paletteToColors: Record<string, string> = {
//     "Classic Gulal": "gulal colors (pink, yellow, green, blue)",
//     "Pastel Holi": "pastel gulal (baby pink, mint green, lavender, sky blue)",
//     "Neon Party": "neon gulal (neon pink, neon green, electric blue, neon orange)",
//     "Luxury Editorial": "soft luxury tones (rose pink, ivory, champagne gold, peach)",
//     Bollywood: "bold festive colors (magenta, saffron, emerald, royal blue)",
//     Custom: "",
//   };

//   // outfits
//   const presetToOutfit: Record<string, string> = {
//     "Classic White": "white kurta & saree with color powder",
//     "Modern Casual": "denim jeans and white tee, subtle gulal powder",
//     Traditional: "traditional kurta set / saree, festive accessories, gulal on fabric",
//     Editorial: "high-fashion indo-western outfit, luxury styling, clean minimal backdrop",
//     "Brand/Product": "product-focused styling, clean hands, gulal accents around product",
//     Custom: "",
//   };

//   // map your "scene" to API "who"
//   const mapSceneToWho = (s: string): HoliWho => {
//     const v = (s || "").toLowerCase();
//     if (v.includes("friends")) return "Friends";
//     if (v.includes("family")) return "Family";
//     if (v.includes("solo")) return "Solo";
//     if (v.includes("product")) return "Product";
//     return "Couple";
//   };

//   const generate = async () => {
//     setLoading(true);

//     try {
//       // ✅ PHOTO MODE -> type: "holi"
//       if (mode === "photo") {
//         const res = await fetch("/api/generate", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             type: "holi",
//             who: mapSceneToWho(scene),
//             mood,
//             location,
//             colors,
//             outfit,
//             aspect,
//             style,
//             lighting: "soft golden-hour light",
//             camera,
//           }),
//         });

//         const data = await res.json();

//         if (!res.ok || !data?.ok) {
//           setPrompt(`Error: ${data?.error || "Something went wrong"}`);
//           return;
//         }

//         setPrompt(data.prompt);
//         return;
//       }

//       // ✅ TEXT MODE -> reuse existing API type: "text"
//       const res = await fetch("/api/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           type: "text",
//           category: "Festival Message (Holi)",
//           tone: mood,
//           difficulty: "Easy",
//           topic: `Write a warm, festive Holi message for ${scene}. Mention ${colors}. Keep it short, sweet, and modern. Add 1 emoji and 1 catchy closing line.`,
//           constraints: "Return only the final message, no explanation.",
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data?.ok) {
//         setPrompt(`Error: ${data?.error || "Something went wrong"}`);
//         return;
//       }

//       setPrompt(data.prompt);
//     } catch (e: any) {
//       setPrompt(`Error: ${e?.message || "Server error"}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copy = async () => {
//     if (!prompt) return;
//     await navigator.clipboard.writeText(prompt);
//     alert("Copied ✅");
//   };

//   return (
//     <div className="relative">
//       {/* animated background */}
//       <div className="absolute inset-0 -z-10">
//         <HoliSplashBackground />
//       </div>

//       <div className="mx-auto max-w-6xl px-4 py-10">
//         <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
//           <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
//             <div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
//                 🌸 Holi AI
//               </h1>
//               <p className="mt-2 text-black/60">
//                 Click anywhere on the page to create color splashes ✨
//               </p>
//             </div>

//             {/* ✅ only toggles here (no generate/copy on top) */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setMode("photo")}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition border",
//                   mode === "photo"
//                     ? "bg-black text-white border-black"
//                     : "bg-white/80 text-black border-black/10 hover:bg-white",
//                 ].join(" ")}
//               >
//                 Photo Prompt
//               </button>
//               <button
//                 onClick={() => setMode("text")}
//                 className={[
//                   "rounded-full px-4 py-2 text-sm font-semibold transition border",
//                   mode === "text"
//                     ? "bg-black text-white border-black"
//                     : "bg-white/80 text-black border-black/10 hover:bg-white",
//                 ].join(" ")}
//               >
//                 Text Message
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 grid gap-6 lg:grid-cols-2">
//             {/* Controls */}
//             <div className="rounded-2xl border border-black/10 bg-white p-5">
//               <h2 className="text-xl font-semibold">Customize</h2>

//               <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                 <Field label={mode === "text" ? "For" : "Scene"}>
//                   <select
//                     className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                     value={scene}
//                     onChange={(e) => setScene(e.target.value)}
//                   >
//                     <option value="couple">Couple</option>
//                     <option value="friends group">Friends Group</option>
//                     <option value="family">Family</option>
//                     <option value="solo portrait">Solo Portrait</option>
//                     <option value="product shoot">Product</option>
//                   </select>
//                 </Field>

//                 <Field label="Mood / Tone">
//                   <select
//                     className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                     value={mood}
//                     onChange={(e) => setMood(e.target.value)}
//                   >
//                     <option value="joyful">Joyful</option>
//                     <option value="romantic">Romantic</option>
//                     <option value="playful">Playful</option>
//                     <option value="cinematic">Cinematic</option>
//                     <option value="dreamy">Dreamy</option>
//                   </select>
//                 </Field>

//                 {/* Only photo options */}
//                 {mode === "photo" && (
//                   <>
//                     <Field label="Style">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={style}
//                         onChange={(e) => setStyle(e.target.value)}
//                       >
//                         <option>Luxury Editorial</option>
//                         <option>Cinematic</option>
//                         <option>Soft Pastel</option>
//                         <option>Street Photography</option>
//                         <option>Traditional Indian</option>
//                       </select>
//                     </Field>

//                     <Field label="Location">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={location}
//                         onChange={(e) => setLocation(e.target.value)}
//                         placeholder="e.g., rooftop, courtyard, festival street"
//                       />
//                     </Field>

//                     {/* ✅ Color Palette */}
//                     <Field label="Color Palette">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={palette}
//                         onChange={(e) => {
//                           const p = e.target.value;
//                           setPalette(p);
//                           const mapped = paletteToColors[p] || "";
//                           setColors(mapped);
//                           if (p !== "Custom") setCustomColors("");
//                         }}
//                       >
//                         {Object.keys(paletteToColors).map((p) => (
//                           <option key={p} value={p}>
//                             {p}
//                           </option>
//                         ))}
//                       </select>
//                     </Field>

//                     {palette === "Custom" && (
//                       <Field label="Custom Colors">
//                         <input
//                           className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                           value={customColors}
//                           onChange={(e) => {
//                             setCustomColors(e.target.value);
//                             setColors(e.target.value);
//                           }}
//                           placeholder="e.g., hot pink, lemon yellow, mint green"
//                         />
//                       </Field>
//                     )}

//                     {/* ✅ Outfit preset */}
//                     <Field label="Outfit Preset">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={outfitPreset}
//                         onChange={(e) => {
//                           const p = e.target.value;
//                           setOutfitPreset(p);
//                           const mapped = presetToOutfit[p] || "";
//                           setOutfit(mapped);
//                           if (p !== "Custom") setCustomOutfit("");
//                         }}
//                       >
//                         {Object.keys(presetToOutfit).map((p) => (
//                           <option key={p} value={p}>
//                             {p}
//                           </option>
//                         ))}
//                       </select>
//                     </Field>

//                     {outfitPreset === "Custom" && (
//                       <Field label="Custom Outfit">
//                         <input
//                           className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                           value={customOutfit}
//                           onChange={(e) => {
//                             setCustomOutfit(e.target.value);
//                             setOutfit(e.target.value);
//                           }}
//                           placeholder="e.g., white kurta set with floral dupatta"
//                         />
//                       </Field>
//                     )}

//                     <Field label="Camera / Lens">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={camera}
//                         onChange={(e) => setCamera(e.target.value)}
//                         placeholder="50mm, shallow depth of field"
//                       />
//                     </Field>

//                     <Field label="Aspect Ratio">
//                       <select
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={aspect}
//                         onChange={(e) => setAspect(e.target.value)}
//                       >
//                         <option value="9:16">9:16 (Reels)</option>
//                         <option value="1:1">1:1 (Post)</option>
//                         <option value="16:9">16:9 (Wide)</option>
//                         <option value="4:5">4:5 (IG)</option>
//                       </select>
//                     </Field>

//                     <Field label="Negative Prompt (optional)">
//                       <input
//                         className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                         value={negative}
//                         onChange={(e) => setNegative(e.target.value)}
//                         placeholder="(API already adds strong negatives)"
//                       />
//                     </Field>

//                     <div className="sm:col-span-2 text-xs text-black/50">
//                       Note: Negative prompt is already added by the API. This field is optional.
//                     </div>
//                   </>
//                 )}

//                 {/* Text mode: show colors only */}
//                 {mode === "text" && (
//                   <Field label="Mention Colors">
//                     <input
//                       className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
//                       value={colors}
//                       onChange={(e) => setColors(e.target.value)}
//                       placeholder="pink, yellow, green, blue"
//                     />
//                   </Field>
//                 )}
//               </div>
//             </div>

//             {/* Output */}
//             <div className="rounded-2xl border border-black/10 bg-white p-5">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Your Prompt</h2>
//               </div>

//               <textarea
//                 className="mt-4 h-[340px] w-full resize-none rounded-2xl border border-black/10 bg-white p-4 text-sm leading-relaxed"
//                 value={prompt}
//                 readOnly
//                 placeholder="Click Generate to get AI output..."
//               />

//               <div className="mt-4 text-sm text-black/60">
//                 Tip: For photo prompts use Midjourney / Leonardo / Firefly. For text messages, copy and share.
//               </div>

//               {/* ✅ Buttons at bottom */}
//               <div className="mt-4 flex gap-2 justify-end">
//                 <button
//                   onClick={generate}
//                   disabled={loading}
//                   className={[
//                     "rounded-full px-5 py-2 text-sm font-semibold text-white transition",
//                     loading ? "bg-black/50 cursor-not-allowed" : "bg-black hover:opacity-90",
//                   ].join(" ")}
//                 >
//                   {loading ? "Generating..." : "Generate"}
//                 </button>

//                 <button
//                   onClick={copy}
//                   disabled={!prompt}
//                   className={[
//                     "rounded-full px-5 py-2 text-sm font-semibold transition border",
//                     prompt
//                       ? "border-black/10 bg-white hover:bg-black/5 text-black"
//                       : "border-black/10 bg-white/60 text-black/40 cursor-not-allowed",
//                   ].join(" ")}
//                 >
//                   Copy
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <label className="grid gap-1 text-sm">
//       <span className="font-medium text-black/70">{label}</span>
//       {children}
//     </label>
//   );
// }

// new new new new 

"use client";

import { useEffect, useMemo, useState } from "react";
import HoliSplashBackground from "@/components/HoliSplashBackground";

type Mode = "photo" | "text";
type HoliWho = "Couple" | "Solo" | "Product" | "Friends" | "Family";

type SavedPrompt = {
  id: string;
  title: string;
  mode: Mode;
  prompt: string;
  negative?: string;
  meta: {
    style: string;
    scene: string;
    mood: string;
    location: string;
    colors: string;
    outfit: string;
    camera: string;
    aspect: string;
    palette: string;
    outfitPreset: string;
  };
  createdAt: string;
};

const STORAGE_KEY = "kanova_saved_prompts";

function safeParse<T>(raw: string | null, fallback: T): T {
  try {
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function getSaved(): SavedPrompt[] {
  if (typeof window === "undefined") return [];
  return safeParse<SavedPrompt[]>(localStorage.getItem(STORAGE_KEY), []);
}

function setSaved(list: SavedPrompt[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export default function HoliAIPage() {
  const [mode, setMode] = useState<Mode>("photo");

  // UI fields
  const [style, setStyle] = useState("Luxury Editorial");
  const [scene, setScene] = useState("couple"); // maps to who
  const [mood, setMood] = useState("joyful");
  const [location, setLocation] = useState("outdoor courtyard");

  // ✅ Color palette + custom
  const [palette, setPalette] = useState("Classic Gulal");
  const [customColors, setCustomColors] = useState("");
  const [colors, setColors] = useState("gulal colors (pink, yellow, green, blue)");

  // ✅ Outfit presets + custom
  const [outfitPreset, setOutfitPreset] = useState("Classic White");
  const [customOutfit, setCustomOutfit] = useState("");
  const [outfit, setOutfit] = useState("white kurta & saree with color powder");

  const [camera, setCamera] = useState("50mm, shallow depth of field");
  const [aspect, setAspect] = useState("9:16");

  // (optional) still keeping this input, but API already adds negatives
  const [negative, setNegative] = useState(
    "text, logos, watermark, extra fingers, deformed hands, blurry face, clutter, oversaturated, low-res"
  );

  // API output
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  // Saved UI
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    setSavedCount(getSaved().length);
  }, []);

  const isAlreadySaved = useMemo(() => {
    if (!prompt?.trim()) return false;
    const list = getSaved();
    return list.some(
      (x) =>
        x.prompt.trim() === prompt.trim() &&
        (x.negative || "").trim() === (negative || "").trim() &&
        x.mode === mode
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt, negative, mode]);

  // palettes
  const paletteToColors: Record<string, string> = {
    "Classic Gulal": "gulal colors (pink, yellow, green, blue)",
    "Pastel Holi": "pastel gulal (baby pink, mint green, lavender, sky blue)",
    "Neon Party": "neon gulal (neon pink, neon green, electric blue, neon orange)",
    "Luxury Editorial": "soft luxury tones (rose pink, ivory, champagne gold, peach)",
    Bollywood: "bold festive colors (magenta, saffron, emerald, royal blue)",
    Custom: "",
  };

  // outfits
  const presetToOutfit: Record<string, string> = {
    "Classic White": "white kurta & saree with color powder",
    "Modern Casual": "denim jeans and white tee, subtle gulal powder",
    Traditional: "traditional kurta set / saree, festive accessories, gulal on fabric",
    Editorial: "high-fashion indo-western outfit, luxury styling, clean minimal backdrop",
    "Brand/Product": "product-focused styling, clean hands, gulal accents around product",
    Custom: "",
  };

  // map your "scene" to API "who"
  const mapSceneToWho = (s: string): HoliWho => {
    const v = (s || "").toLowerCase();
    if (v.includes("friends")) return "Friends";
    if (v.includes("family")) return "Family";
    if (v.includes("solo")) return "Solo";
    if (v.includes("product")) return "Product";
    return "Couple";
  };

  const generate = async () => {
    setLoading(true);

    try {
      // ✅ PHOTO MODE -> type: "holi"
      if (mode === "photo") {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "holi",
            who: mapSceneToWho(scene),
            mood,
            location,
            colors,
            outfit,
            aspect,
            style,
            lighting: "soft golden-hour light",
            camera,
          }),
        });

        const data = await res.json();

        if (!res.ok || !data?.ok) {
          setPrompt(`Error: ${data?.error || "Something went wrong"}`);
          return;
        }

        setPrompt(data.prompt);
        return;
      }

      // ✅ TEXT MODE -> reuse existing API type: "text"
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "text",
          category: "Festival Message (Holi)",
          tone: mood,
          difficulty: "Easy",
          topic: `Write a warm, festive Holi message for ${scene}. Mention ${colors}. Keep it short, sweet, and modern. Add 1 emoji and 1 catchy closing line.`,
          constraints: "Return only the final message, no explanation.",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setPrompt(`Error: ${data?.error || "Something went wrong"}`);
        return;
      }

      setPrompt(data.prompt);
    } catch (e: any) {
      setPrompt(`Error: ${e?.message || "Server error"}`);
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    alert("Copied ✅");
  };

  const save = () => {
    if (!prompt?.trim()) {
      alert("Generate a prompt first, then Save.");
      return;
    }

    const list = getSaved();

    // Prevent exact duplicates
    const already = list.some(
      (x) =>
        x.prompt.trim() === prompt.trim() &&
        (x.negative || "").trim() === (negative || "").trim() &&
        x.mode === mode
    );
    if (already) {
      alert("This prompt is already saved ✅");
      return;
    }

    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}_${Math.random().toString(16).slice(2)}`;

    const item: SavedPrompt = {
      id,
      title:
        mode === "photo"
          ? `Holi Photo • ${style} • ${new Date().toLocaleDateString()}`
          : `Holi Message • ${mood} • ${new Date().toLocaleDateString()}`,
      mode,
      prompt,
      negative: mode === "photo" ? negative : undefined,
      meta: {
        style,
        scene,
        mood,
        location,
        colors,
        outfit,
        camera,
        aspect,
        palette,
        outfitPreset,
      },
      createdAt: new Date().toISOString(),
    };

    const next = [item, ...list];
    setSaved(next);
    setSavedCount(next.length);
    alert("Saved ✅");
  };

  return (
    <div className="relative">
      {/* animated background */}
      <div className="absolute inset-0 -z-10">
        <HoliSplashBackground />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur p-6 shadow-sm">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                🌸 Holi AI
              </h1>
              <p className="mt-2 text-black/60">
                Click anywhere on the page to create color splashes ✨
              </p>
            </div>

            {/* ✅ only toggles here (no generate/copy on top) */}
            <div className="flex gap-2">
              <button
                onClick={() => setMode("photo")}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition border",
                  mode === "photo"
                    ? "bg-black text-white border-black"
                    : "bg-white/80 text-black border-black/10 hover:bg-white",
                ].join(" ")}
              >
                Photo Prompt
              </button>
              <button
                onClick={() => setMode("text")}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition border",
                  mode === "text"
                    ? "bg-black text-white border-black"
                    : "bg-white/80 text-black border-black/10 hover:bg-white",
                ].join(" ")}
              >
                Text Message
              </button>

              {/* optional: quick saved counter pill */}
              <div className="hidden md:flex items-center rounded-full border border-black/10 bg-white/80 px-3 py-2 text-sm text-black/70">
                Saved: <span className="ml-1 font-semibold text-black">{savedCount}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Controls */}
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <h2 className="text-xl font-semibold">Customize</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label={mode === "text" ? "For" : "Scene"}>
                  <select
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                    value={scene}
                    onChange={(e) => setScene(e.target.value)}
                  >
                    <option value="couple">Couple</option>
                    <option value="friends group">Friends Group</option>
                    <option value="family">Family</option>
                    <option value="solo portrait">Solo Portrait</option>
                    <option value="product shoot">Product</option>
                  </select>
                </Field>

                <Field label="Mood / Tone">
                  <select
                    className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                  >
                    <option value="joyful">Joyful</option>
                    <option value="romantic">Romantic</option>
                    <option value="playful">Playful</option>
                    <option value="cinematic">Cinematic</option>
                    <option value="dreamy">Dreamy</option>
                  </select>
                </Field>

                {/* Only photo options */}
                {mode === "photo" && (
                  <>
                    <Field label="Style">
                      <select
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                      >
                        <option>Luxury Editorial</option>
                        <option>Cinematic</option>
                        <option>Soft Pastel</option>
                        <option>Street Photography</option>
                        <option>Traditional Indian</option>
                      </select>
                    </Field>

                    <Field label="Location">
                      <input
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g., rooftop, courtyard, festival street"
                      />
                    </Field>

                    {/* ✅ Color Palette */}
                    <Field label="Color Palette">
                      <select
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={palette}
                        onChange={(e) => {
                          const p = e.target.value;
                          setPalette(p);
                          const mapped = paletteToColors[p] || "";
                          setColors(mapped);
                          if (p !== "Custom") setCustomColors("");
                        }}
                      >
                        {Object.keys(paletteToColors).map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {palette === "Custom" && (
                      <Field label="Custom Colors">
                        <input
                          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                          value={customColors}
                          onChange={(e) => {
                            setCustomColors(e.target.value);
                            setColors(e.target.value);
                          }}
                          placeholder="e.g., hot pink, lemon yellow, mint green"
                        />
                      </Field>
                    )}

                    {/* ✅ Outfit preset */}
                    <Field label="Outfit Preset">
                      <select
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={outfitPreset}
                        onChange={(e) => {
                          const p = e.target.value;
                          setOutfitPreset(p);
                          const mapped = presetToOutfit[p] || "";
                          setOutfit(mapped);
                          if (p !== "Custom") setCustomOutfit("");
                        }}
                      >
                        {Object.keys(presetToOutfit).map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </Field>

                    {outfitPreset === "Custom" && (
                      <Field label="Custom Outfit">
                        <input
                          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                          value={customOutfit}
                          onChange={(e) => {
                            setCustomOutfit(e.target.value);
                            setOutfit(e.target.value);
                          }}
                          placeholder="e.g., white kurta set with floral dupatta"
                        />
                      </Field>
                    )}

                    <Field label="Camera / Lens">
                      <input
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={camera}
                        onChange={(e) => setCamera(e.target.value)}
                        placeholder="50mm, shallow depth of field"
                      />
                    </Field>

                    <Field label="Aspect Ratio">
                      <select
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={aspect}
                        onChange={(e) => setAspect(e.target.value)}
                      >
                        <option value="9:16">9:16 (Reels)</option>
                        <option value="1:1">1:1 (Post)</option>
                        <option value="16:9">16:9 (Wide)</option>
                        <option value="4:5">4:5 (IG)</option>
                      </select>
                    </Field>

                    <Field label="Negative Prompt (optional)">
                      <input
                        className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                        value={negative}
                        onChange={(e) => setNegative(e.target.value)}
                        placeholder="(API already adds strong negatives)"
                      />
                    </Field>

                    <div className="sm:col-span-2 text-xs text-black/50">
                      Note: Negative prompt is already added by the API. This field is optional.
                    </div>
                  </>
                )}

                {/* Text mode: show colors only */}
                {mode === "text" && (
                  <Field label="Mention Colors">
                    <input
                      className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                      value={colors}
                      onChange={(e) => setColors(e.target.value)}
                      placeholder="pink, yellow, green, blue"
                    />
                  </Field>
                )}
              </div>
            </div>

            {/* Output */}
            <div className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your Prompt</h2>
                {prompt?.trim() ? (
                  <span
                    className={[
                      "text-xs rounded-full px-3 py-1 border",
                      isAlreadySaved
                        ? "border-green-600/30 bg-green-50 text-green-700"
                        : "border-black/10 bg-white text-black/60",
                    ].join(" ")}
                  >
                    {isAlreadySaved ? "Saved ✅" : "Not saved"}
                  </span>
                ) : null}
              </div>

              <textarea
                className="mt-4 h-[340px] w-full resize-none rounded-2xl border border-black/10 bg-white p-4 text-sm leading-relaxed"
                value={prompt}
                readOnly
                placeholder="Click Generate to get AI output..."
              />

              <div className="mt-4 text-sm text-black/60">
                {/* Tip: For photo prompts use Midjourney / Leonardo / Firefly. For text messages, copy and share. */}
                 <p className="mt-4 text-xs text-black/50">
                {/* Paste into:{" "} */}
                Tip: For photo prompts use {" "}
                <a
                  href="https://chat.openai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  ChatGPT
                </a>{" "}
                /{" "}
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Gemini
                </a>{" "}
                /{" "}
                <a
                  href="https://www.midjourney.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Midjourney
                </a>{" "}
                /{" "}
                <a
                  href="https://leonardo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Leonardo
                </a>{" "}
                /{" "}
                <a
                  href="https://firefly.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2 hover:text-blue-600"
                >
                  Firefly
                </a>
               {" "} For text messages, copy and share.
              </p>
              </div>

              {/* ✅ Buttons at bottom */}
              <div className="mt-4 flex gap-2 justify-end">
                <button
                  onClick={generate}
                  disabled={loading}
                  className={[
                    "rounded-full px-5 py-2 text-sm font-semibold text-white transition",
                    loading ? "bg-black/50 cursor-not-allowed" : "bg-black hover:opacity-90",
                  ].join(" ")}
                >
                  {loading ? "Generating..." : "Generate"}
                </button>

                <button
                  onClick={copy}
                  disabled={!prompt}
                  className={[
                    "rounded-full px-5 py-2 text-sm font-semibold transition border",
                    prompt
                      ? "border-black/10 bg-white hover:bg-black/5 text-black"
                      : "border-black/10 bg-white/60 text-black/40 cursor-not-allowed",
                  ].join(" ")}
                >
                  Copy
                </button>

                {/* ✅ NEW: Save button */}
                <button
                  onClick={save}
                  disabled={!prompt || isAlreadySaved}
                  className={[
                    "rounded-full px-5 py-2 text-sm font-semibold transition border",
                    !prompt
                      ? "border-black/10 bg-white/60 text-black/40 cursor-not-allowed"
                      : isAlreadySaved
                      ? "border-green-600/30 bg-green-50 text-green-700 cursor-not-allowed"
                      : "border-black/10 bg-white hover:bg-black/5 text-black",
                  ].join(" ")}
                >
                  {isAlreadySaved ? "Saved" : "Save"}
                </button>
              </div>

              <div className="mt-3 text-xs text-black/50">
                {/* Saved prompts are stored in your browser (localStorage) under: <b>{STORAGE_KEY}</b> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-black/70">{label}</span>
      {children}
    </label>
  );
}