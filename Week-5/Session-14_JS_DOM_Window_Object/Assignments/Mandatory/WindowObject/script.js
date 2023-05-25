const displayWindowProperties = () => {
  console.log(window.navigator.userAgent);
  console.log(`${window.screen.width} and ${window.screen.height}`);
  console.log(`${window.location.href} and ${window.location.pathname}`);
  console.log(`${window.sessionStorage} and ${window.localStorage}`);

  sessionStorage.setItem("sessionData", "This is the data of session storage");
  const sessionData = sessionStorage.getItem("sessionData");
  console.log("Session Data:", sessionData);

  localStorage.setItem("localData", "This is the data of local storage");
  const localData = localStorage.getItem("localData");
  console.log("Local Data:", localData);
};

window.addEventListener("load", displayWindowProperties);
