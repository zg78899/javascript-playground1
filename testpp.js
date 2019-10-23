
const obj = {};

// 자바스크립트 엔진은 프로퍼티를 생성할 때, 프로퍼티의 상태를 나타내는
// 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
obj.prop = 10;

// 정의된 프로퍼티 어트리뷰트는 Object.getOwnPropertyDescriptor 메소드로 확인할 수 있다.
const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descriptor);

// {value: 10, writable: true, enumerable: true, configurable: true}

// ES8
// 모든 프로퍼티 어트리뷰트를 표현하는 프로퍼티 디스크립터 객체를 취득한다.
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// {