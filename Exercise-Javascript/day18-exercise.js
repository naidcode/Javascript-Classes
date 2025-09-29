// const p1 = new Promise(resolve => setTimeout(() => resolve("P1 Done"), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("P2 Done"), 500));
// const p3 = new Promise(resolve => setTimeout(() => resolve("P3 Done"), 2000));

// Promise.all([p1, p2, p3])
//   .then(results => console.log("✅ Results:", results))
//   .catch(error => console.log("❌ Error:", error));


  // 🔹 Service Layer
class WeatherService {
  static getWeather(city) {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 2000) + 500; // 0.5s - 2.5s
      const conditions = ["Sunny", "Cloudy", "Rainy", "Stormy"];

      setTimeout(() => {
        if (Math.random() > 0.2) {  // 80% success
          resolve({city,temperature: Math.floor(Math.random() * 15) + 20, 
            condition: conditions[Math.floor(Math.random() * conditions.length)]
          });
        } else {
          reject(`❌ Failed to fetch weather for ${city}`);
        }
      }, delay);
    });
  }
}

// 🔹 Dashboard Layer
class WeatherDashboard {
  #cities = [];

  addCity(city) {
    this.#cities.push(city);
  }

  // ✅ Fetch all weather (only if ALL succeed)
  fetchAllWeather() {
    const promises = this.#cities.map(city => WeatherService.getWeather(city));
    return Promise.all(promises);
  }

  // ⚡ Return the fastest weather (first to resolve/reject)
  fetchFastestWeather() {
    const promises = this.#cities.map(city => WeatherService.getWeather(city));
    return Promise.race(promises);
  }

  // 🔄 Fetch all, even if some fail
  fetchAllSettledWeather() {
    const promises = this.#cities.map(city => WeatherService.getWeather(city));
    return Promise.allSettled(promises);
  }
}

// 🔹 Usage
(async () => {
  const dashboard = new WeatherDashboard();
  dashboard.addCity("mangle");
  dashboard.addCity("Bangalore");
  dashboard.addCity("Mumbai");
  dashboard.addCity("Delhi");

  console.log("\n--- Fetch All Weather (Promise.all) ---");
  try {
    const allWeather = await dashboard.fetchAllWeather();
    console.log("✅ Success:", allWeather);
  } catch (error) {
    console.log("❌ Error:", error);
  }

  console.log("\n--- Fetch Fastest Weather (Promise.race) ---");
  try {
    const fastest = await dashboard.fetchFastestWeather();
    console.log("⚡ Fastest:", fastest);
  } catch (error) {
    console.log("❌ Error:", error);
  }

  console.log("\n--- Fetch All Settled Weather (Promise.allSettled) ---");
  const allSettled = await dashboard.fetchAllSettledWeather();
  console.log("🔄 Results:", allSettled);
})();

