interface Syncable {
  readonly id: string;
  toJson(): Record<string, unknown>;
}

function Timestamped<T extends new (...args: any[]) => object>(Base: T) {
  return class extends Base {
    readonly createdAt = new Date('2026-10-06T15:30:00.000Z');

    get stamp(): string {
      return this.createdAt.toISOString();
    }
  };
}

abstract class Entity {
  constructor(public readonly id: string) {}
  abstract label(): string;
}

const TimestampedBase = Timestamped(class {});

class Survey extends Entity implements Syncable {
  private photos: string[] = [];
  private readonly timestamp = new TimestampedBase();

  constructor(id: string, public readonly pinId: string) {
    super(id);
  }

  addPhoto(path: string): void {
    this.photos.push(path);
  }

  label(): string {
    return `Survey ${this.id} (${this.photos.length} photos)`;
  }

  toJson(): Record<string, unknown> {
    return {
      id: this.id,
      pinId: this.pinId,
      photos: [...this.photos],
      createdAt: this.timestamp.stamp,
    };
  }
}

const s = new Survey('s-1', 'b-17');
s.addPhoto('IMG_0001.jpg');

console.log(s.label());
console.log(JSON.stringify(s.toJson()));