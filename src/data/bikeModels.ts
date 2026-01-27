export interface BikeModel {
  id: string;
  name: string;
  modelFile: string;
  engine: string;
  power: string;
  torque: string;
  mileage: string;
  price: string;
  description: string;
  image: string;
  brakes: string;
  weight: string;
  topSpeed: string;
  category: string;
}

export const bikeModels: BikeModel[] = [
  {
    id: 'ninja-300',
    name: 'Ninja 300',
    modelFile: '/models/ninja_300.glb',
    engine: '296cc Twin Cylinder',
    power: '39 HP @ 11,000 RPM',
    torque: '27 Nm @ 10,000 RPM',
    mileage: '25-30 km/l',
    price: '$4,999',
    description: 'The perfect entry point into the Ninja world',
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80',
    brakes: 'ABS Dual Disc',
    weight: '172 kg',
    topSpeed: '180 km/h',
    category: 'Sport'
  },
  {
    id: 'ninja-400',
    name: 'Ninja 400',
    modelFile: '/models/ninja_400.glb',
    engine: '399cc Twin Cylinder',
    power: '45 HP @ 9,000 RPM',
    torque: '37 Nm @ 7,000 RPM',
    mileage: '23-27 km/l',
    price: '$5,499',
    description: 'Balanced performance for spirited riding',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
    brakes: 'ABS Dual Disc',
    weight: '168 kg',
    topSpeed: '200 km/h',
    category: 'Sport'
  },
  {
    id: 'ninja-650',
    name: 'Ninja 650',
    modelFile: '/models/ninja_650.glb',
    engine: '649cc Twin Cylinder',
    power: '68 HP @ 8,000 RPM',
    torque: '65 Nm @ 7,000 RPM',
    mileage: '20-24 km/l',
    price: '$7,399',
    description: 'The sweet spot of power and practicality',
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=800&q=80',
    brakes: 'ABS Dual Disc',
    weight: '193 kg',
    topSpeed: '210 km/h',
    category: 'Sport Touring'
  },
  {
    id: 'ninja-zx6r',
    name: 'Ninja ZX-6R',
    modelFile: '/models/ninja_zx6r.glb',
    engine: '636cc Inline-4',
    power: '130 HP @ 13,500 RPM',
    torque: '70 Nm @ 11,000 RPM',
    mileage: '16-20 km/l',
    price: '$10,999',
    description: 'Supersport precision and track-ready performance',
    image: 'https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=800&q=80',
    brakes: 'ABS Race-Spec Brembo',
    weight: '196 kg',
    topSpeed: '260 km/h',
    category: 'Supersport'
  },
  {
    id: 'ninja-zx10r',
    name: 'Ninja ZX-10R',
    modelFile: '/models/ninja_zx10r.glb',
    engine: '998cc Inline-4',
    power: '203 HP @ 13,000 RPM',
    torque: '114 Nm @ 11,500 RPM',
    mileage: '14-18 km/l',
    price: '$16,999',
    description: 'The ultimate expression of Kawasaki engineering',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=80',
    brakes: 'ABS Race-Spec Brembo',
    weight: '207 kg',
    topSpeed: '299 km/h',
    category: 'Superbike'
  }
];

export const defaultBike = bikeModels[2]; // Ninja 650 as default