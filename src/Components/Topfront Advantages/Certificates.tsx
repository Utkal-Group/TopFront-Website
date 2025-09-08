// export default function Certificates() {
//     const certifications = [
//       {
//         title: "ISO 9001:2008",
//         description: "Quality Management System",
//         action: "Preview | Download",
//       },
//       {
//         title: "ISO 14001:2004",
//         description: "Environmental Management System",
//         action: "Preview | Download",
//       },
//       {
//         title: "BS OHSAS 18001:2007",
//         description: "Occupational Health and Safety",
//         action: "Preview | Download",
//       },
//     ];
  
//     return (
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Certifications
//         </h2>
  
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {certifications.map((certification, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 border border-gray-200 
//                          transition-all hover:shadow-lg hover:-translate-y-1"
//             >
//               <h3
//                 className="text-xl font-semibold mb-4 text-green-400"
//                 style={{
//                   background: "linear-gradient(to right, #1e3a8a, #059669)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {certification.title}
//               </h3>
//               <p className="text-green-600 mb-6">{certification.description}</p>
//               <button
//                 className="font-medium hover:underline"
//                 style={{
//                   background: "linear-gradient(to right, #1e3a8a, #059669)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 {certification.action}
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }