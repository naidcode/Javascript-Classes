// // function fetchData() {
// //   return new Promise((resolve, reject) => {
// //     let success = true;

// //     if (success) {
// //       resolve("Data loaded!");
// //     } else {
// //       reject("Something went wrong...");
// //     }
// //   });
// // }

// // fetchData()
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("Process finished");
// //   });


//   class WeatherApp{
//     #city
//     constructor(city){
//       this.#city = city
//     }

//     fetchWeather(){
//       return new Promise((resolve , reject) => {
//         setTimeout(() => {
//           if(this.#city){
//             resolve(`weather date for ${this.#city}: Sunny, 25°C`)
//           } else{
//             reject("city not found")
//           }
//         },2000 );
//       })
//     }

//     showWeather(){
//       this.fetchWeather().then(value => console.log(value)).catch(error => console.log(error))
//     }

//     handleError(){
//       this.fetchWeather().catch(error => console.log(error))
//     }

//     processComplete(){
//       this.fetchWeather().finally(() =>console.log("process completed successfully"))
//     }
//   }


//   let weather = new WeatherApp("London")

//   weather.showWeather()
//   weather.handleError()
//   weather.processComplete()

  
// let weather2 = new WeatherApp(""); 
// weather2.showWeather();       // Failure case
// weather2.handleError();
// weather2.processComplete()


class FoodDelivery{
  #OrderID;
  constructor(orderID){
    this.#OrderID = orderID
  }

  placeOrder(){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(this.#OrderID){
          resolve("Order placed: Pizza")
        } else{
          reject("no order yet")
        }
      }, 2000);
    })
  }

    prepareOrder(){
      return new Promise((resolve , reject) => {
        setTimeout(() => {
          if(this.#OrderID){
            resolve("Pizza Prepared")
          } else{
            reject("we don't have any order")
          }
          
        }, 3000);
      })
    }

    deliverOrder(){
      return new Promise((resolve , reject) => {
        setTimeout(() => {
          if(this.#OrderID){
            resolve(`pizza Delivered`)
          } else{
            reject("no order ")
          }
          
        }, 4000);
      })
    }
}

let foodDelivery = new FoodDelivery(1235689)

foodDelivery.placeOrder().then(value => {console.log(value) ;return foodDelivery.prepareOrder();})
                         .then(value => {console.log(value); return foodDelivery.deliverOrder();})
                         .then(value => console.log(value))
                         .catch(error => console.log(error))
                         .finally(() => console.log("process Finished");