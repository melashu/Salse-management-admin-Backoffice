const formInput = [
  {
    id: 0,
    label: "Username",
    placeholder: "meshu",
    htmlFor: "username",

    type: "text",
    isSex: false,
  },
  {
    id: 1,
    label: "Password",
    type: "password",
    htmlFor: "password",
    isSex: false,
  },
  {
    id: 2,
    label: "First Name",
    placeholder: "Melashu",
    type: "text",
    htmlFor: "fname",
    isSex: false,
  },
  {
    id: 8,
    label: "Last Name",
    placeholder: "Amare",
    type: "text",
    htmlFor: "lname",
    isSex: false,
  },
  {
    id: 3,
    label: "Phone",
    placeholder: "+251980631983",
    type: "tel",
    htmlFor: "phone",
    isSex: false,
  },
  {
    id: 4,
    label: "Employement Date",
    htmlFor: "date",
    type: "date",
    isSex: false,
  },
  {
    id: 5,
    label: "Email",
    placeholder: "meshu102@gmail.com",
    htmlFor: "email",
    type: "email",
    isSex: false,
  },
  {
    id: 6,
    label: "Gender",
    htmlFor: "sex",
    type: "radio",
    isSex: true,
  },
];

// const dispatch = appUseDispatch();
// const userList = appUseSelector(getUsers);
// const [img, setImg] = appUseState("");
// const [gender, setGender] = appUseState("");
// const [username, setUsername] = appUseState("Melashu");
// const [fname, setFirstName] = appUseState("");
// const [lname, setLastName] = appUseState("");
// const [password, setPassword] = appUseState("");
// const [phone, setPhone] = appUseState("");
// const [date, setDate] = appUseState("");
// const [email, setEmail] = appUseState("");
// const userOnSubmitHundler = (e) => {
//   e.preventDefault();
//   dispatch(
//     addUser({
//       id: userList.length,
//       username,
//       fname,
//       lname,
//       phone,
//       img,
//       email,
//       status: "pending",
//       date,
//       gender,
//       password,
//     })
//   );
//   setImg("");
//   setDate("");
//   setEmail("");
//   setFirstName("");
//   setLastName("");
//   setPhone();
//   setGender("");
//   setUsername("");
//   setPassword("");
// };

// const userInputHundler = (input, value) => {
//   switch (input) {
//     case "Username":
//       setUsername(value);
//       break;
//     case "Password":
//       setPassword(value);
//       break;
//     case "First Name":
//       setFirstName(value);
//       break;
//     case "Last Name":
//       setLastName(value);
//       break;
//     case "Phone":
//       setPhone(value);
//       break;
//     case "Employement Date":
//       setDate(value);
//       break;
//     case "Email":
//       setEmail(value);
//       break;
//     case "Gender":
//       setGender(value);
//       break;
//     default:
//       return null;
//   }
// };

// const setInputValue = (input) => {
//   switch (input) {
//     case "Username":
//    return username;
//     case "Password":
//       return password;
//     case "First Name":
//       return fname;
//     case "Last Name":
//       return lname;
//     case "Phone":
//       return phone;
//     case "Employement Date":
//       return date;
//     case "Email":
//       return email;
//     case "Gender":
//       return gender;
//     default:
//       return null;
//   }
// }

export {
  formInput,
  // setInputValue,
  // userOnSubmitHundler,
  // img,
  // setImg,
  // userInputHundler,
};
