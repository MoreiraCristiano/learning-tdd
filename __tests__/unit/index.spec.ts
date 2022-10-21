import "jest";
import { a } from "../../src/index";

// /**
//  * Teste com um objeto importado
//  */
// it("Tests with import equality", () => {
//   expect({
//     name: "cristiano",
//   }).toEqual(a);
// });

// /**
//  * Teste que deve ser falso
//  */
// test("should be false", () => {
//   expect(false).toBeFalsy();
// });

// /**
//  * Um grupo de testes definido com o describe
//  */
// describe("a group of tests", () => {
//   test("first test", () => {
//     expect("string value").toEqual("string value");
//   });

//   it("second test", () => {
//     expect("abc").not.toEqual("def");
//   });

//   xit("should be equal to ten", () => {
//     expect(10).toEqual(10);
//   });
// });

// /**
//  * Comparacoes de objetos com jest (cuidado ao utilizar mesmos apontamentos de memoria)
//  */
// test("Compare two obj", () => {
//   let objA = { a: 10 };
//   let objB = objA;

//   expect(objA).toBe(objB);
// });

// /**
//  * Testes para verificar se contem uma determinada parte do argumento
//  */
// it("should contain a value", () => {
//   expect("abcdef").toContain("def");
// });

// /**
//  * Testes que verificam o lancamento de erros
//  */
// function lancaErro() {
//   throw new Error("Erro1");
// }

// it("throws a new error", () => {
//   expect(() => {
//     lancaErro();
//   }).toThrowError(new Error("Erooooooooooooooooooooooooooooooooooou"));
// });

// /**
//  * Testes de array
//  */
// it("must be less then five", () => {
//   [1, 2, 3, 4].forEach((element) => {
//     expect(element).toBeLessThan(5);
//   });
// });

/**
 * Mocks and spy
 */
// class CallbackClass {
//   executeCallback(value: string, callbackfn: (value: string) => void) {
//     console.log("Now I will run the callback, take a look bitch");
//     callbackfn(value);
//   }

//   testSpy() {
//     console.log("Test spy called");
//     this.spyied();
//   }

//   spyied() {
//     console.log("Am I spyied?");
//   }
// }

// it("should run with the mock to check if callbackfn was called", () => {
//   let mock = jest.fn();
//   let myObj = new CallbackClass();

//   myObj.executeCallback("Value string lalala", mock);
//   expect(mock).toHaveBeenCalled();
// });

// it("should run with the mock the callbackfn and check the argument", () => {
//   let mock = jest.fn();
//   let myObj = new CallbackClass();

//   myObj.executeCallback("Value checked", mock);
//   expect(mock).toHaveBeenCalledWith("Value checked");
// });

// it("spy a method inside the class CallbackClass", () => {
//   let objToBeSpyied = new CallbackClass();
//   const testFnSpy = jest.spyOn(objToBeSpyied, "spyied");
//   objToBeSpyied.testSpy();
//   expect(testFnSpy).toHaveBeenCalled();
// });

// Testes assincronos com mock
class MockAsync {
  executeSlowFn(complete: (value: string) => void) {
    setTimeout(() => complete("Completed"), 1000);
  }
}

// Este teste deve falhar
describe("failing async tests", () => {
  it("should wait for callback to complete", () => {
    let mockAsync = new MockAsync();

    let returnedValue!: string;
    mockAsync.executeSlowFn((value: string) => {
      returnedValue = value;
    });

    expect(returnedValue).toBe("Completed");
  });
});

// Correcao para o teste anterior
describe("async test with done ", () => {
  let returnedValue!: string;

  beforeEach((done: jest.DoneCallback) => {
    let mockAsync = new MockAsync();
    console.log(`1. calling executeSlowFunction`);
    mockAsync.executeSlowFn((value: string) => {
      console.log(`2. executeSlowFunction returned`);
      returnedValue = value;
      done();
    });
  });

  it("should return value after 1 second", () => {
    console.log(`3. checking returnedValue`);
    expect(returnedValue).toEqual("Completed");
  });
});
