onmessage = async function(e) {
  console.log(e);
  const response = await fetch(e.data);
  const data = await response.json();
  console.log(data);

  postMessage(data);
}