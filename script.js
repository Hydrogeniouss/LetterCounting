const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const transform = () => {
  const input = Array.from(
    document.getElementById("input").value.trim().toUpperCase()
  );
  if (!input.length || input.some((x) => !alphabet.includes(x)))
    return [false, "Input Some stuff"];
  const decrement = (index) => {
    if (input[index] === "A") {
      input[index] = "Z";
      if (index > 0) {
        decrement(index - 1);
      }
    } else {
      input[index] = alphabet[alphabet.indexOf(input[index]) - 1];
    }
  };

  decrement(input.length - 1);

  return [true, input.join("")];
};
const changeText = () => {
  const output = document.getElementById("output");
  const input = document.getElementById("input");
  const value = transform();
  output.innerHTML = value[1];
  if (value[0]) {
    input.value = value[1];
    output.innerHTML = value[1];
  }
};
window.addEventListener("DOMContentLoaded", () =>
  document.getElementById("transform").addEventListener("click", changeText)
);
