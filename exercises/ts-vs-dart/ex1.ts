type Building = {
  id: string;
  address: string;
  floors: number | null;
  elevators: number | null;
};

function describe(b: Building): string {
  const floors = b.floors ?? 'unknown';
  const elevators = b.elevators ?? 'unknown';
  return `${b.address}: ${floors} floors, elevators ${elevators}`;
}

const b: Building = {
  id: 'b-17',
  address: 'Str. Lipscani 12',
  floors: null,
  elevators: null,
};

let count = 3;
// count = 'three'; // Eroare: count acceptă numere, nu text.

console.log(describe(b));
console.log(describe({ ...b, floors: 4 }));
console.log(b.floors?.toFixed(1) ?? 'n/a');
console.log(`count is ${count}`);