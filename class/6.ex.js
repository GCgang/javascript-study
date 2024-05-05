// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
class Counter {
    #value;
    constructor(startValue) {
        if (isNaN(startValue) || startValue < 0)
            this.#value = 0;
        else {
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    }

    increment = () => {
        this.#value++;
    };
}

const counter = new Counter(8);
console.log(counter.value); // 8
counter.increment();
counter.increment();
console.log(counter.value); // 10

// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
    constructor (name, department, workHoursPerMonth, hourlyRate) {
        this.name = name;
        this.department = department;
        this.workHoursPerMonth = workHoursPerMonth;
        this.hourlyRate = hourlyRate
    }

    calculatedSalary() {
        return (this.workHoursPerMonth * this.hourlyRate).toLocaleString();
    }
}

class FullTimeEmployee extends Employee {
    static #HOURLY_RATE = 10000;
    constructor(name, department, workHoursPerMonth) {
        super(name, department, workHoursPerMonth, FullTimeEmployee.#HOURLY_RATE);
    }
}

class PartTimeEmployee extends Employee {
    static #HOURLY_RATE = 8000;
    constructor(name, department, workHoursPerMonth) {
        super(name, department, workHoursPerMonth, PartTimeEmployee.#HOURLY_RATE);
    }
}

const fullTimer = new FullTimeEmployee('정연', 'IT', 160);
console.log(fullTimer);
// FullTimeEmployee {
//     name: '정연',
//     department: 'IT',
//     workHoursPerMonth: 160,
//     hourlyRate: 10000
//   }
console.log(`정직원 월급: ${fullTimer.calculatedSalary()} 원`); // 정직원 월급: 1,600,000 원

const partTimer = new PartTimeEmployee('현준', 'IT', 160);
console.log(partTimer);
// PartTimeEmployee {
//     name: '현준',
//     department: 'IT',
//     workHoursPerMonth: 160,
//     hourlyRate: 8000
//   }
console.log(`파트타이머 월급: ${partTimer.calculatedSalary()} 원`); // 파트타이머 월급: 1,280,000 원

