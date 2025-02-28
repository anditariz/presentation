// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline();
//         tl.to(".curtain-left", { x: 0, duration: .5, ease: "power2.inOut", delay: 0.5 })
//           .to(".curtain-right", { x: -1, duration: .5, ease: "power2.inOut" }, "-=.5")
//           .to(".loading-container", {duration: .5, opacity : 1 ,ease: "power2.inOut", delay: 0.1 }) 
//           .to(".loading-water", { height: "100%", duration: .5, ease: "power2.inOut", delay: 0.3 }) 
//           .set(".contents", { opacity: 1 })
//           .to(".curtain", { y: "-100%", duration: 1, ease: "power2.inOut" });

// mainContentTl = gsap.timeline({
//             scrollTrigger: {
//               trigger: ".main-content",
//               scrub: 1,
//               pin: true,
//               anticipatePin : 1 ,
//             //   markers: true,
//               start: 'top top',
//               end: '+=1000px'
//             }
//           })
// mainContentTl.to(
//               `.main-content`,
//               {
//                 y : 0,
//                 x: -100,
//                 opacity: 0,
//                 scale : 4,
//                 duration : 2
//               },
//               `<`
//             );

// gsap.utils.toArray(".section").forEach((section , index) => {

//     index += 1
//     console.log(index)

//     gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           scrub: 1,
//           pin: true,
//         //   markers: true,
//           start: 'top top',
//           end: '+=1000px'
//         }
//       })
//         .fromTo(
//             `#section-${index}`,
//             {
//               scale: 0,
//               opacity: 0,
//               y: 0,
//               x: -100
//             },
//             {
//               scale: 1,
//               opacity: 1,
//               duration: .5,
//               ease: "power2.out"
//             },
//           ).to(
//             `#section-${index}`,
//             {
//               scale: 3,
//               opacity: 0,
//               duration: .5,
//               ease: "power2.out"
//             },
//           );
// });
