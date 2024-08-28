import { Car } from './models/Car.js'
import { Home } from './models/Homes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Car[]} */
  cars = [
    new Car({
      make: 'Honda',
      model: 'Civic',
      mileage: 100000,
      year: 1990,
      price: 10000,
      color: '#d40100',
      imgUrl: 'https://images.unsplash.com/photo-1716167950737-ac635698a16a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Red and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      mileage: 100000,
      year: 2006,
      price: 10000,
      color: '#004e63',
      imgUrl: 'https://images.unsplash.com/photo-1705440158861-f26c436ac6fa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Blue and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Ford',
      model: 'F-150',
      mileage: 150,
      year: 2024,
      price: 100000,
      color: '#080b0d',
      imgUrl: 'https://images.unsplash.com/photo-1590043586837-35512e866a4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Black and shiny, low miles, owned by grandpa',
      transmission: 'automatic'
    })
  ]

  homes = [
    new Home({ year: '1974', bedrooms: 3, bathrooms: 2.5, sqft: 1400, price: 375000, description: 'Newly renovated mid-century modern home near good schools', img: '.\assets\img\SmallHouse.png' }),
    new Home({ year: '1994', bedrooms: 4, bathrooms: 2, sqft: 1800, price: 500000, description: 'Modern home in a quiet neighborhood, great for retired couples', img: '.\assets\img\MedHouse.png' }),
    new Home({ year: '1994', bedrooms: 4, bathrooms: 2, sqft: 1800, price: 500000, description: 'Luxury home with a mediterranean atmosphere and relaxing pool perfect for parties', img: '.\assets\img\LuxuryHome' }),

  ]
}

export const AppState = createObservableProxy(new ObservableAppState())