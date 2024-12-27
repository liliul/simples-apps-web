// const t0 = performance.now();

// for (let i = 1; i <= 15; i++) {
//     console.log('passei', i)
// }

// const t1 = performance.now();
// console.log('Este código levou ', (t1 - t0), ' milissegundos.'); 


const t0 = performance.timeOrigin;
console.log('inicia: ', t0)

for (let i = 1; i <= 15; i++) {
    console.log('for > ', i)
}

const t1 = performance.now()
console.log('tempo: ', (t1 + t0))

// // Report all exposed events
// for (entry of performance.eventCounts.entries()) {
//   const type = entry[0];
//   const count = entry[1];
//   // sendToEventAnalytics(type, count);
// }

// // Report a specific event
// const clickCount = performance.eventCounts.get("click");
// // sendToEventAnalytics("click", clickCount);

// // Check if an event count is exposed for a type
// const isExposed = performance.eventCounts.has("mousemove"); // false
