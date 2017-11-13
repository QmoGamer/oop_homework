interface Student {
  Name: string;
}

class School<T extends Student> implements IterableIterator<T> {
  public students: T[];
  private index = 0;

  constructor() {
    this.students = [
      <T>{ Name: 'Sam' },
      <T>{ Name: 'Kevin' },
      <T>{ Name: 'Jessie' }
    ];
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this;
  }

  next(): IteratorResult<T> {
    if (this.index < this.students.length) {
      return {
        done: false,
        value: this.students[this.index++]
      };
    }

    return {
      done: true,
      value: undefined
    };
  }
}

const school = new School<Student>();

for (const student of school.students) {
    console.log(student.Name);
}