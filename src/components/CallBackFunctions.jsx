import "./CallBackFunctions.css";

export function CallBackFunctions() {
  function addNumbers(a, b, resultFormatter) {
    const result = a + b;
    return resultFormatter(result);
  }

  function formatResult(result) {
    return `Result: ${result}`;
  }

  function formatResultWithDate(result) {
    const now = new Date();
    console.log(now);
    return `Result: ${result} ${now}`;
  }

  console.log(addNumbers(1, 2, formatResult));
  console.log(addNumbers(1, 2, formatResultWithDate));

  console.log(
    addNumbers(1, 2, (result) => `Result: ${result} from Arrow Functions`)
  );

  const persons = [
    { name: "Johnny B", age: 50 },
    { name: "Madonna", age: 60 },
  ];

  // console.log(addNumbers(1,2));
  return (
    <div className="callBackFunctions">
      <h2>CallBackFunctions</h2>
      <p>{addNumbers(1, 2, formatResult)}</p>
      <p>{addNumbers(1, 2, formatResultWithDate)}</p>
      {/* Das hier ist die sauberste Variante */}
      {persons.map((person, index) => (
        <p key={index}>
          {person.name} is {person.age} years old
        </p>
      ))}
      {persons.map((person, index) => {
        return (
          <p key={index}>
            {person.name} is {person.age} years old
          </p>
        );
      })}
    </div>
  );
}
