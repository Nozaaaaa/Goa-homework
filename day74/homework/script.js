// 1. 
function createCar(brand, model, year, engineVolume) {
    return {
      brand: brand,
      model: model,
      year: year,
      engineVolume: engineVolume,
      getFullDescription: function() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
      }
    };
  }
  
  // 2. 
  function createBook(title, author, pages, year) {
    return {
      title: title,
      author: author,
      pages: pages,
      year: year,
      pagesPerDay: function() {
        return this.pages / 7;  // 7 დღე
      }
    };
  }
  
  // 3. 
  function createAthlete(name, age, sport, trainingHours) {
    return {
      name: name,
      age: age,
      sport: sport,
      trainingHours: trainingHours,
      increasedTrainingHours: function() {
        return this.trainingHours * 1.2;  // 20%-ით გაზრდილი საათი
      }
    };
  }
  
 