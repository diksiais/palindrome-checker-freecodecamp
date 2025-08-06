const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") {
    alert("Please input a value");
    return;
  } 
  
  const cleaned = value.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

   result.classList.remove("success", "error", "show");

   
  if (cleaned === reversed){
    result.innerText = `${value} is a palindrome`;
    result.classList.add("success", "show");
  } else {
    result.innerText = `${value} is not a palindrome`;
    result.classList.add("error", "show");
  }
});
