const userAction = async () => {
    const response = await fetch('https://api.github.com/user:drewthatdude79');
    const myJson = await response.json();
  }
  