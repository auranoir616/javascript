function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ username: "john_doe", email: "john@example.com" });
      }, 1000);
    });
  }
  
 async function processUserData() {
    try {
      const userData = await fetchUserData();
      console.log("User data:", userData);
      console.log("Processing user data...");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  
  processUserData();
  console.log("Processing started...");
  