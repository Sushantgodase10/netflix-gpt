export const checkValidData = ( email, password) => {
  const isEmailvalid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // const isNameValid =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(name);

 // if (!isNameValid) return "Name is not Valid";
  if (!isEmailvalid) return "Email ID is not valid";
  if (!isPasswordValid) return "Paasword is not Valid";

  return null;
};
